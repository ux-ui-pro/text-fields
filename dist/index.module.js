function $85068ae01dc596ad$var$notched() {
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
var $85068ae01dc596ad$export$2e2bcd8739ae039 = $85068ae01dc596ad$var$notched;


function $12b7859a657b7ab7$var$observers(field, container) {
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
var $12b7859a657b7ab7$export$2e2bcd8739ae039 = $12b7859a657b7ab7$var$observers;


function $8290bb03cd88138a$var$getNotchWidth(notch) {
    const label = notch.querySelector(".floating-label");
    return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : "auto";
}
function $8290bb03cd88138a$var$filled(field, container, fieldType) {
    if (field.value.trim().length > 0) container.classList.add(fieldType ? "textarea--filled" : "input--filled");
    else container.classList.remove(fieldType ? "textarea--filled" : "input--filled");
}
function $8290bb03cd88138a$var$textareaResizeable(field, container, fieldType) {
    if (fieldType && container.classList.contains("textarea--auto-resizeable")) {
        const currentField = field;
        currentField.style.height = "auto";
        currentField.style.height = `${currentField.scrollHeight}px`;
    }
}
function $8290bb03cd88138a$var$listeners(field, container, notch, fieldType) {
    const eventType = fieldType ? "input" : "change";
    const notchStyle = notch.style;
    field.addEventListener("focus", ()=>{
        container.classList.add(fieldType ? "textarea--focused" : "input--focused");
        notchStyle.width = $8290bb03cd88138a$var$getNotchWidth(notch);
    });
    field.addEventListener("blur", ()=>{
        container.classList.remove(fieldType ? "textarea--focused" : "input--focused");
        if (field.value.trim().length <= 0) notchStyle.width = "auto";
    });
    field.addEventListener(eventType, ()=>{
        $8290bb03cd88138a$var$filled(field, container, fieldType);
        $8290bb03cd88138a$var$textareaResizeable(field, container, fieldType);
    });
    $8290bb03cd88138a$var$filled(field, container, fieldType);
    notchStyle.width = $8290bb03cd88138a$var$getNotchWidth(notch);
}
var $8290bb03cd88138a$export$2e2bcd8739ae039 = $8290bb03cd88138a$var$listeners;


const $cf838c15c8b009ba$var$TextFields = {
    notches: [],
    notched: $85068ae01dc596ad$export$2e2bcd8739ae039,
    handlers () {
        const fields = [
            ...document.querySelectorAll(".text-field-container input, .text-field-container textarea")
        ];
        fields.forEach((field)=>{
            const notchData = this.notches.find((data)=>data.container.contains(field));
            if (!notchData) return;
            const { container: container, notch: notch } = notchData;
            const fieldType = field instanceof HTMLTextAreaElement;
            (0, $12b7859a657b7ab7$export$2e2bcd8739ae039)(field, container, notch);
            (0, $8290bb03cd88138a$export$2e2bcd8739ae039)(field, container, notch, fieldType);
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
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $cf838c15c8b009ba$var$TextFields;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
