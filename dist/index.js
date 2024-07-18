
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
    mutationObserver;
    constructor(){
        this.textFieldContainer = [];
        this.floatingLabel = [];
        this.resizeObserver = new ResizeObserver($a196c1ed25598f0e$var$TextFields.handleResize.bind(this));
        this.mutationObserver = new MutationObserver(this.initializeElements.bind(this));
        this.observeDOMChanges();
    }
    observeDOMChanges() {
        this.mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    static handleResize(entries) {
        entries.forEach((entry)=>{
            const notch = entry.target.closest(".notched-outline")?.querySelector(".notched-outline__notch");
            if (notch) $a196c1ed25598f0e$var$TextFields.setNotchWidth(notch, $a196c1ed25598f0e$var$TextFields.getNotchWidth(notch));
        });
    }
    initializeElements() {
        this.textFieldContainer = Array.from(document.querySelectorAll(".text-field-container input, .text-field-container textarea"));
        this.floatingLabel = Array.from(document.querySelectorAll(".floating-label"));
        if (this.textFieldContainer.length > 0 && this.floatingLabel.length > 0) {
            this.setupNotches();
            this.handleEvents();
            this.updateInitialNotchWidths();
        }
    }
    setupNotches() {
        this.floatingLabel.forEach((label)=>{
            const notchedOutline = label.closest(".notched-outline") ?? $a196c1ed25598f0e$var$TextFields.createNotchedOutline(label);
            if (notchedOutline) {
                const notch = notchedOutline.querySelector(".notched-outline__notch");
                if (notch) {
                    this.notches.push({
                        container: notchedOutline.parentElement,
                        notch: notch
                    });
                    $a196c1ed25598f0e$var$TextFields.setNotchWidth(notch, $a196c1ed25598f0e$var$TextFields.getNotchWidth(notch));
                    this.resizeObserver.observe(label);
                }
            }
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
        const newNotch = notch;
        newNotch.style.width = width;
    }
    static getNotchWidth(notch) {
        const label = notch.querySelector(".floating-label");
        return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : "auto";
    }
    handleEvents() {
        this.textFieldContainer.forEach((field)=>{
            const notchData = this.notches.find((data)=>data.container.contains(field));
            if (notchData) $a196c1ed25598f0e$var$TextFields.setupFieldEvents(field, notchData.container, notchData.notch);
        });
    }
    updateInitialNotchWidths() {
        this.notches.forEach(({ notch: notch })=>{
            $a196c1ed25598f0e$var$TextFields.setNotchWidth(notch, $a196c1ed25598f0e$var$TextFields.getNotchWidth(notch));
        });
    }
    static setupFieldEvents(field, container, notch) {
        const fieldType = field instanceof HTMLTextAreaElement;
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
    static updateStyles(field, container, fieldType) {
        container.classList.toggle(fieldType ? "textarea--filled" : "input--filled", field.value.trim().length > 0);
        container.classList.toggle(fieldType ? "textarea--disabled" : "input--disabled", field.disabled);
    }
    static resizeTextarea(field, container) {
        if (container.classList.contains("textarea--auto-resizeable")) {
            const newField = field;
            newField.style.height = "auto";
            newField.style.height = `${field.scrollHeight}px`;
        }
    }
    async init() {
        await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            }, 0);
        });
        this.initializeElements();
    }
}
var $a196c1ed25598f0e$export$2e2bcd8739ae039 = $a196c1ed25598f0e$var$TextFields;


//# sourceMappingURL=index.js.map
