class TextFields {
  private textFieldContainer: (HTMLInputElement | HTMLTextAreaElement)[];

  private floatingLabel: HTMLElement[];

  private resizeObserver: ResizeObserver;

  private notches: { container: HTMLElement; notch: HTMLElement }[] = [];

  private mutationObserver: MutationObserver;

  constructor() {
    this.textFieldContainer = [];
    this.floatingLabel = [];
    this.resizeObserver = new ResizeObserver(TextFields.handleResize.bind(this));
    this.mutationObserver = new MutationObserver(this.initializeElements.bind(this));
    this.observeDOMChanges();
  }

  private observeDOMChanges() {
    this.mutationObserver.observe(document.body, { childList: true, subtree: true });
  }

  private static handleResize(entries: ResizeObserverEntry[]) {
    entries.forEach((entry) => {
      const notch = entry.target.closest('.notched-outline')?.querySelector<HTMLElement>('.notched-outline__notch');

      if (notch) {
        TextFields.setNotchWidth(notch, TextFields.getNotchWidth(notch));
      }
    });
  }

  private initializeElements() {
    this.textFieldContainer = Array.from(document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('.text-field-container input, .text-field-container textarea'));
    this.floatingLabel = Array.from(document.querySelectorAll<HTMLElement>('.floating-label'));

    if (this.textFieldContainer.length > 0 && this.floatingLabel.length > 0) {
      this.setupNotches();
      this.handleEvents();
      this.updateInitialNotchWidths();
    }
  }

  private setupNotches() {
    this.floatingLabel.forEach((label) => {
      const notchedOutline = label.closest('.notched-outline') ?? TextFields.createNotchedOutline(label);

      if (notchedOutline) {
        const notch = notchedOutline.querySelector<HTMLElement>('.notched-outline__notch');

        if (notch) {
          this.notches.push({ container: notchedOutline.parentElement as HTMLElement, notch });

          TextFields.setNotchWidth(notch, TextFields.getNotchWidth(notch));

          this.resizeObserver.observe(label);
        }
      }
    });
  }

  private static createNotchedOutline(label: HTMLElement): HTMLElement {
    const notchedOutline = document.createElement('div');

    notchedOutline.classList.add('notched-outline');
    notchedOutline.innerHTML = `
      <div class="notched-outline__leading"></div>
      <div class="notched-outline__notch">${label.outerHTML}</div>
      <div class="notched-outline__trailing"></div>
    `;
    label.replaceWith(notchedOutline);

    return notchedOutline;
  }

  private static setNotchWidth(notch: HTMLElement, width: string) {
    const newNotch = notch;

    newNotch.style.width = width;
  }

  private static getNotchWidth(notch: HTMLElement): string {
    const label = notch.querySelector<HTMLElement>('.floating-label');

    return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : 'auto';
  }

  private handleEvents() {
    this.textFieldContainer.forEach((field) => {
      const notchData = this.notches.find((data) => data.container.contains(field));

      if (notchData) {
        TextFields.setupFieldEvents(field, notchData.container, notchData.notch);
      }
    });
  }

  private updateInitialNotchWidths() {
    this.notches.forEach(({ notch }) => {
      TextFields.setNotchWidth(notch, TextFields.getNotchWidth(notch));
    });
  }

  private static setupFieldEvents(field: HTMLInputElement | HTMLTextAreaElement, container: HTMLElement, notch: HTMLElement) {
    const fieldType = field instanceof HTMLTextAreaElement;
    const eventType = fieldType ? 'input' : 'change';

    field.addEventListener('focus', () => {
      container.classList.add(fieldType ? 'textarea--focused' : 'input--focused');
      TextFields.setNotchWidth(notch, TextFields.getNotchWidth(notch));
    });

    field.addEventListener('blur', () => {
      container.classList.remove(fieldType ? 'textarea--focused' : 'input--focused');
      TextFields.setNotchWidth(notch, field.value.trim() ? TextFields.getNotchWidth(notch) : 'auto');
    });

    field.addEventListener(eventType, () => {
      TextFields.updateStyles(field, container, fieldType);

      if (fieldType) {
        TextFields.resizeTextarea(field as HTMLTextAreaElement, container);
      }
    });

    TextFields.updateStyles(field, container, fieldType);
  }

  private static updateStyles(field: HTMLInputElement | HTMLTextAreaElement, container: HTMLElement, fieldType: boolean) {
    container.classList.toggle(fieldType ? 'textarea--filled' : 'input--filled', field.value.trim().length > 0);
    container.classList.toggle(fieldType ? 'textarea--disabled' : 'input--disabled', field.disabled);
  }

  private static resizeTextarea(field: HTMLTextAreaElement, container: HTMLElement) {
    if (container.classList.contains('textarea--auto-resizeable')) {
      const newField = field;

      newField.style.height = 'auto';
      newField.style.height = `${field.scrollHeight}px`;
    }
  }

  public updateField(field: HTMLInputElement | HTMLTextAreaElement) {
    const container = field.closest('.text-field-container') as HTMLElement;
    const notchData = this.notches.find((data) => data.container.contains(field));

    if (container) {
      TextFields.updateStyles(field, container, field instanceof HTMLTextAreaElement);

      if (notchData) {
        TextFields.setNotchWidth(notchData.notch, TextFields.getNotchWidth(notchData.notch));
      }
    }
  }

  public async init() {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 0);
    });

    this.initializeElements();
  }
}

export default TextFields;
