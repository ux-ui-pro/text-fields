class $14d766c2f144a932$var$TextFields {
    #notches;
    constructor(){
        this.#notches = [];
    }
    async init() {
        await this.#notched();
        await this.#handleEvents();
        this.#initialNotchWidths();
    }
    #notched() {
        document.querySelectorAll(".floating-label").forEach((label)=>{
            const notchedOutline = label.closest(".notched-outline");
            const outline = notchedOutline ?? document.createElement("div");
            if (!notchedOutline) {
                outline.classList.add("notched-outline");
                outline.innerHTML = `
          <div class="notched-outline__leading"></div>
          <div class="notched-outline__notch">${label.outerHTML}</div>
          <div class="notched-outline__trailing"></div>
        `;
                label.replaceWith(outline);
            }
            this.#notches.push({
                container: outline.parentNode,
                notch: outline.querySelector(".notched-outline__notch")
            });
            this.#setNotchWidth(this.#notches[this.#notches.length - 1].notch, this.#getNotchWidth(this.#notches[this.#notches.length - 1].notch));
        });
    }
    #handleEvents() {
        document.querySelectorAll(".text-field-container input, .text-field-container textarea").forEach((field)=>{
            const notchData = this.#notches.find((data)=>data.container.contains(field));
            if (!notchData) return;
            this.#setupObserver(field, notchData.container);
            this.#addListeners(field, notchData.container, notchData.notch, field instanceof HTMLTextAreaElement);
        });
    }
    #initialNotchWidths() {
        this.#notches.forEach((notchData)=>{
            this.#setNotchWidth(notchData.notch, this.#getNotchWidth(notchData.notch));
        });
    }
    #setupObserver(field, container) {
        const fieldType = field instanceof HTMLTextAreaElement;
        const fieldObserver = new MutationObserver(()=>{
            this.#updateStyles(field, container, fieldType);
        });
        fieldObserver.observe(field, {
            attributes: true,
            attributeFilter: [
                "required",
                "disabled"
            ]
        });
    }
    #addListeners(field, container, notch, fieldType) {
        const eventType = fieldType ? "input" : "change";
        field.addEventListener("focus", ()=>{
            container.classList.add(fieldType ? "textarea--focused" : "input--focused");
            this.#setNotchWidth(notch, this.#getNotchWidth(notch));
        });
        field.addEventListener("blur", ()=>{
            container.classList.remove(fieldType ? "textarea--focused" : "input--focused");
            if (field.value.trim()) this.#setNotchWidth(notch, this.#getNotchWidth(notch));
            else this.#setNotchWidth(notch, "auto");
        });
        field.addEventListener(eventType, ()=>{
            this.#updateStyles(field, container, fieldType);
            this.#textareaResizeable(field, container, fieldType);
        });
        this.#updateStyles(field, container, fieldType);
    }
    #updateStyles(field, container, fieldType) {
        container.classList.toggle(fieldType ? "textarea--filled" : "input--filled", field.value.trim().length > 0);
        container.classList.toggle(fieldType ? "textarea--disabled" : "input--disabled", field.disabled);
        container.classList.toggle(fieldType ? "textarea--error" : "input--error", field.required);
    }
    #setNotchWidth(notch, width) {
        notch.style.width = width;
    }
    #getNotchWidth(notch) {
        const label = notch.querySelector(".floating-label");
        return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : "auto";
    }
    #textareaResizeable(field, container, fieldType) {
        if (fieldType && container.classList.contains("textarea--auto-resizeable")) {
            field.style.height = "auto";
            field.style.height = `${field.scrollHeight}px`;
        }
    }
}
var $14d766c2f144a932$export$2e2bcd8739ae039 = $14d766c2f144a932$var$TextFields;


export {$14d766c2f144a932$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
