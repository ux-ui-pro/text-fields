class TextFields {
  private textFieldContainer: (HTMLInputElement | HTMLTextAreaElement)[];

  private floatingLabel: HTMLElement[];

  private resizeObserver: ResizeObserver;

  private notches: { container: HTMLElement; notch: HTMLElement }[] = [];

  constructor() {
    this.textFieldContainer = Array.from(document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('.text-field-container input, .text-field-container textarea'));
    this.floatingLabel = Array.from(document.querySelectorAll<HTMLElement>('.floating-label'));

    this.resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const notch = entry.target.closest('.notched-outline')?.querySelector<HTMLElement>('.notched-outline__notch');

        if (notch) TextFields.setNotchWidth(notch, TextFields.getNotchWidth(notch));
      });
    });
  }

  private notched() {
    this.floatingLabel.forEach((label) => {
      const notchedOutline = label.closest('.notched-outline') ?? TextFields.createNotchedOutline(label);

      this.notches.push({ container: notchedOutline.parentNode as HTMLElement, notch: notchedOutline.querySelector<HTMLElement>('.notched-outline__notch')! });

      const lastNotch = this.notches.at(-1)!.notch;

      TextFields.setNotchWidth(lastNotch, TextFields.getNotchWidth(lastNotch));
      this.resizeObserver.observe(notchedOutline.querySelector<HTMLElement>('.floating-label')!);
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
    const notchElement = notch;
    notchElement.style.width = width;
  }

  private static getNotchWidth(notch: HTMLElement): string {
    const label = notch.querySelector<HTMLElement>('.floating-label');
    return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : 'auto';
  }

  private handleEvents() {
    this.textFieldContainer.forEach((field) => {
      const notchData = this.notches.find((data) => data.container.contains(field));

      if (!notchData) return;

      this.setupObserver(field, notchData.container);
      this.addListeners(field, notchData.container, notchData.notch, field instanceof HTMLTextAreaElement);
    });
  }

  private initialNotchWidths() {
    this.notches.forEach(({ notch }) => {
      TextFields.setNotchWidth(notch, TextFields.getNotchWidth(notch));
    });
  }

  /* eslint-disable class-methods-use-this */
  private setupObserver(field: HTMLInputElement | HTMLTextAreaElement, container: HTMLElement) {
    const fieldObserver = new MutationObserver(() => {
      TextFields.updateStyles(field, container, field instanceof HTMLTextAreaElement);
    });

    fieldObserver.observe(field, { attributes: true, attributeFilter: ['required', 'disabled'] });
  }

  private addListeners(field: HTMLInputElement | HTMLTextAreaElement, container: HTMLElement, notch: HTMLElement, fieldType: boolean) {
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

      if (fieldType) TextFields.resizeTextarea(field as HTMLTextAreaElement, container);
    });

    TextFields.updateStyles(field, container, fieldType);
  }
  /* eslint-enable class-methods-use-this */

  private static updateStyles(field: HTMLInputElement | HTMLTextAreaElement, container: HTMLElement, fieldType: boolean) {
    container.classList.toggle(fieldType ? 'textarea--filled' : 'input--filled', field.value.trim().length > 0);
    container.classList.toggle(fieldType ? 'textarea--disabled' : 'input--disabled', field.disabled);
    container.classList.toggle(fieldType ? 'textarea--error' : 'input--error', field.required);
  }

  private static resizeTextarea(field: HTMLTextAreaElement, container: HTMLElement) {
    if (container.classList.contains('textarea--auto-resizeable')) {
      const newField = field;
      newField.style.height = 'auto';
      newField.style.height = `${field.scrollHeight}px`;
    }
  }

  public async init() {
    this.notched();
    this.handleEvents();
    this.initialNotchWidths();
  }
}

export default TextFields;
