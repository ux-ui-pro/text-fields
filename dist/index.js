
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
                if (notch) this.setNotchWidth(notch, this.getNotchWidth(notch));
            });
        });
    }
    notched() {
        this.floatingLabel.forEach((label)=>{
            const notchedOutline = label.closest(".notched-outline") ?? this.createNotchedOutline(label);
            this.notches.push({
                container: notchedOutline.parentNode,
                notch: notchedOutline.querySelector(".notched-outline__notch")
            });
            const lastNotch = this.notches.at(-1).notch;
            this.setNotchWidth(lastNotch, this.getNotchWidth(lastNotch));
            this.resizeObserver.observe(notchedOutline.querySelector(".floating-label"));
        });
    }
    createNotchedOutline(label) {
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
    setNotchWidth = (notch, width)=>{
        notch.style.width = width;
    };
    getNotchWidth = (notch)=>{
        const label = notch.querySelector(".floating-label");
        return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : "auto";
    };
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
            this.setNotchWidth(notch, this.getNotchWidth(notch));
        });
    }
    setupObserver(field, container) {
        const fieldObserver = new MutationObserver(()=>{
            this.updateStyles(field, container, field instanceof HTMLTextAreaElement);
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
            this.setNotchWidth(notch, this.getNotchWidth(notch));
        });
        field.addEventListener("blur", ()=>{
            container.classList.remove(fieldType ? "textarea--focused" : "input--focused");
            this.setNotchWidth(notch, field.value.trim() ? this.getNotchWidth(notch) : "auto");
        });
        field.addEventListener(eventType, ()=>{
            this.updateStyles(field, container, fieldType);
            if (fieldType) this.resizeTextarea(field, container);
        });
        this.updateStyles(field, container, fieldType);
    }
    updateStyles(field, container, fieldType) {
        container.classList.toggle(fieldType ? "textarea--filled" : "input--filled", field.value.trim().length > 0);
        container.classList.toggle(fieldType ? "textarea--disabled" : "input--disabled", field.disabled);
        container.classList.toggle(fieldType ? "textarea--error" : "input--error", field.required);
    }
    resizeTextarea(field, container) {
        if (container.classList.contains("textarea--auto-resizeable")) {
            field.style.height = "auto";
            field.style.height = `${field.scrollHeight}px`;
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
