
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $a196c1ed25598f0e$export$2e2bcd8739ae039; });
class $a196c1ed25598f0e$var$TextFields {
    textFieldContainer;
    floatingLabel;
    resizeObserver;
    notches = [];
    constructor(){
        this.textFieldContainer = Array.from(document.querySelectorAll(".text-field-container input, .text-field-container textarea"));
        this.floatingLabel = Array.from(document.querySelectorAll(".floating-label"));
        this.resizeObserver = new ResizeObserver((entries)=>{
            entries.forEach((entry)=>{
                const notch = entry.target.closest(".notched-outline")?.querySelector(".notched-outline__notch");
                if (notch) $a196c1ed25598f0e$var$TextFields.setNotchWidth(notch, $a196c1ed25598f0e$var$TextFields.getNotchWidth(notch));
            });
        });
    }
    notched() {
        this.floatingLabel.forEach((label)=>{
            const notchedOutline = label.closest(".notched-outline") ?? $a196c1ed25598f0e$var$TextFields.createNotchedOutline(label);
            this.notches.push({
                container: notchedOutline.parentNode,
                notch: notchedOutline.querySelector(".notched-outline__notch")
            });
            const lastNotch = this.notches.at(-1).notch;
            $a196c1ed25598f0e$var$TextFields.setNotchWidth(lastNotch, $a196c1ed25598f0e$var$TextFields.getNotchWidth(lastNotch));
            this.resizeObserver.observe(notchedOutline.querySelector(".floating-label"));
        });
    }
    static createNotchedOutline(label) {
        const notchedOutline = document.createElement("div");
        notchedOutline.classList.add("notched-outline");
        notchedOutline.innerHTML = `
      <div class="notched-outline__leading"></div>
      <div class="notched-outline__notch">${label.outerHTML}</div>
      <div class="notched-outline__trailing"></div>
    `;
        label.replaceWith(notchedOutline);
        return notchedOutline;
    }
    static setNotchWidth(notch, width) {
        const notchElement = notch; // Используем временную переменную
        notchElement.style.width = width;
    }
    static getNotchWidth(notch) {
        const label = notch.querySelector(".floating-label");
        return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : "auto";
    }
    handleEvents() {
        this.textFieldContainer.forEach((field)=>{
            const notchData = this.notches.find((data)=>data.container.contains(field));
            if (!notchData) return;
            this.setupObserver(field, notchData.container);
            this.addListeners(field, notchData.container, notchData.notch, field instanceof HTMLTextAreaElement);
        });
    }
    initialNotchWidths() {
        this.notches.forEach(({ notch: notch })=>{
            $a196c1ed25598f0e$var$TextFields.setNotchWidth(notch, $a196c1ed25598f0e$var$TextFields.getNotchWidth(notch));
        });
    }
    /* eslint-disable class-methods-use-this */ setupObserver(field, container) {
        const fieldObserver = new MutationObserver(()=>{
            $a196c1ed25598f0e$var$TextFields.updateStyles(field, container, field instanceof HTMLTextAreaElement);
        });
        fieldObserver.observe(field, {
            attributes: true,
            attributeFilter: [
                "required",
                "disabled"
            ]
        });
    }
    addListeners(field, container, notch, fieldType) {
        const eventType = fieldType ? "input" : "change";
        field.addEventListener("focus", ()=>{
            container.classList.add(fieldType ? "textarea--focused" : "input--focused");
            $a196c1ed25598f0e$var$TextFields.setNotchWidth(notch, $a196c1ed25598f0e$var$TextFields.getNotchWidth(notch));
        });
        field.addEventListener("blur", ()=>{
            container.classList.remove(fieldType ? "textarea--focused" : "input--focused");
            $a196c1ed25598f0e$var$TextFields.setNotchWidth(notch, field.value.trim() ? $a196c1ed25598f0e$var$TextFields.getNotchWidth(notch) : "auto");
        });
        field.addEventListener(eventType, ()=>{
            $a196c1ed25598f0e$var$TextFields.updateStyles(field, container, fieldType);
            if (fieldType) $a196c1ed25598f0e$var$TextFields.resizeTextarea(field, container);
        });
        $a196c1ed25598f0e$var$TextFields.updateStyles(field, container, fieldType);
    }
    /* eslint-enable class-methods-use-this */ static updateStyles(field, container, fieldType) {
        container.classList.toggle(fieldType ? "textarea--filled" : "input--filled", field.value.trim().length > 0);
        container.classList.toggle(fieldType ? "textarea--disabled" : "input--disabled", field.disabled);
        container.classList.toggle(fieldType ? "textarea--error" : "input--error", field.required);
    }
    static resizeTextarea(field, container) {
        if (container.classList.contains("textarea--auto-resizeable")) {
            const newField = field;
            newField.style.height = "auto";
            newField.style.height = `${field.scrollHeight}px`;
        }
    }
    async init() {
        this.notched();
        this.handleEvents();
        this.initialNotchWidths();
    }
}
var $a196c1ed25598f0e$export$2e2bcd8739ae039 = $a196c1ed25598f0e$var$TextFields;


//# sourceMappingURL=index.js.map
