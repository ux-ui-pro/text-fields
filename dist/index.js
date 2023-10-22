
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
function $598d57897adea35a$var$notched() {
    const labels = document.querySelectorAll(".floating-label");
    labels.forEach((label)=>{
        const notchedOutline = label.closest(".notched-outline");
        if (notchedOutline) this.notches.push({
            container: notchedOutline.parentNode,
            notch: notchedOutline.querySelector(".notched-outline__notch")
        });
        else {
            const outline = document.createElement("div");
            outline.classList.add("notched-outline");
            outline.innerHTML = `<div class="notched-outline__leading"></div><div class="notched-outline__notch">${label.outerHTML}</div><div class="notched-outline__trailing"></div>`;
            label.replaceWith(outline);
            this.notches.push({
                container: outline.parentNode,
                notch: outline.querySelector(".notched-outline__notch")
            });
        }
    });
}
var $598d57897adea35a$export$2e2bcd8739ae039 = $598d57897adea35a$var$notched;


function $b4201eebdf0099a8$var$observers(field, container) {
    const fieldType = field instanceof HTMLTextAreaElement;
    const observer = new MutationObserver(()=>{
        if (field.required) container.classList.add(fieldType ? "textarea--error" : "input--error");
        else container.classList.remove(fieldType ? "textarea--error" : "input--error");
        if (field.disabled) container.classList.add(fieldType ? "textarea--disabled" : "input--disabled");
        else container.classList.remove(fieldType ? "textarea--disabled" : "input--disabled");
    });
    observer.observe(field, {
        attributes: true,
        attributeFilter: [
            "required",
            "disabled"
        ]
    });
}
var $b4201eebdf0099a8$export$2e2bcd8739ae039 = $b4201eebdf0099a8$var$observers;


function $3a21e1140688247a$var$getNotchWidth(notch) {
    const label = notch.querySelector(".floating-label");
    return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : "auto";
}
function $3a21e1140688247a$var$listeners(field, container, notch, fieldType) {
    const eventType = fieldType ? "input" : "change";
    const notchStyle = notch.style;
    field.addEventListener("focus", ()=>{
        container.classList.add(fieldType ? "textarea--focused" : "input--focused");
        notchStyle.width = $3a21e1140688247a$var$getNotchWidth(notch);
    });
    field.addEventListener("blur", ()=>{
        container.classList.remove(fieldType ? "textarea--focused" : "input--focused");
        if (field.value.trim().length <= 0) notchStyle.width = "auto";
    });
    field.addEventListener(eventType, ()=>{
        if (field.value.trim().length > 0) container.classList.add(fieldType ? "textarea--filled" : "input--filled");
        else container.classList.remove(fieldType ? "textarea--filled" : "input--filled");
        if (fieldType && container.classList.contains("textarea--auto-resizeable")) {
            const currentField = field;
            currentField.style.height = "auto";
            currentField.style.height = `${currentField.scrollHeight}px`;
        }
    });
}
var $3a21e1140688247a$export$2e2bcd8739ae039 = $3a21e1140688247a$var$listeners;


const $4fa36e821943b400$var$TextFields = {
    notches: [],
    notched: $598d57897adea35a$export$2e2bcd8739ae039,
    handlers () {
        const fields = [
            ...document.querySelectorAll(".text-field-container input, .text-field-container textarea")
        ];
        fields.forEach((field)=>{
            const notchData = this.notches.find((data)=>data.container.contains(field));
            if (!notchData) return;
            const { container: container, notch: notch } = notchData;
            const fieldType = field instanceof HTMLTextAreaElement;
            (0, $b4201eebdf0099a8$export$2e2bcd8739ae039)(field, container, notch);
            (0, $3a21e1140688247a$export$2e2bcd8739ae039)(field, container, notch, fieldType);
        });
    },
    init () {
        this.notched();
        this.handlers();
    },
    destroy () {
        this.notches = [];
    }
};
var $4fa36e821943b400$export$2e2bcd8739ae039 = $4fa36e821943b400$var$TextFields;


//# sourceMappingURL=index.js.map
