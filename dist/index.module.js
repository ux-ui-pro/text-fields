function $b6e9082d8b811de5$var$notched() {
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
var $b6e9082d8b811de5$export$2e2bcd8739ae039 = $b6e9082d8b811de5$var$notched;


function $a138b0cb7beaacac$var$required(field, container, fieldType) {
    if (field.required) container.classList.add(fieldType ? "textarea--error" : "input--error");
    else container.classList.remove(fieldType ? "textarea--error" : "input--error");
}
var $a138b0cb7beaacac$export$2e2bcd8739ae039 = $a138b0cb7beaacac$var$required;


function $f4d83fd2c8dbf337$var$disabled(field, container, fieldType) {
    if (field.disabled) container.classList.add(fieldType ? "textarea--disabled" : "input--disabled");
    else container.classList.remove(fieldType ? "textarea--disabled" : "input--disabled");
}
var $f4d83fd2c8dbf337$export$2e2bcd8739ae039 = $f4d83fd2c8dbf337$var$disabled;


function $8019ab4d39907fdc$var$observers(field, container) {
    const fieldType = field instanceof HTMLTextAreaElement;
    const observer = new MutationObserver(()=>{
        (0, $a138b0cb7beaacac$export$2e2bcd8739ae039)(field, container, fieldType);
        (0, $f4d83fd2c8dbf337$export$2e2bcd8739ae039)(field, container, fieldType);
    });
    observer.observe(field, {
        attributes: true,
        attributeFilter: [
            "required",
            "disabled"
        ]
    });
}
var $8019ab4d39907fdc$export$2e2bcd8739ae039 = $8019ab4d39907fdc$var$observers;


function $2cd48c5c256c7ff7$var$getNotchWidth(notch) {
    const label = notch.querySelector(".floating-label");
    return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : "auto";
}
var $2cd48c5c256c7ff7$export$2e2bcd8739ae039 = $2cd48c5c256c7ff7$var$getNotchWidth;


function $9d84a9ca8fdba971$var$textareaResizeable(field, container, fieldType) {
    if (fieldType && container.classList.contains("textarea--auto-resizeable")) {
        const currentField = field;
        currentField.style.height = "auto";
        currentField.style.height = `${currentField.scrollHeight}px`;
    }
}
var $9d84a9ca8fdba971$export$2e2bcd8739ae039 = $9d84a9ca8fdba971$var$textareaResizeable;


function $dc1e20be3f06df2e$var$filled(field, container, fieldType) {
    if (field.value.trim().length > 0) container.classList.add(fieldType ? "textarea--filled" : "input--filled");
    else container.classList.remove(fieldType ? "textarea--filled" : "input--filled");
}
var $dc1e20be3f06df2e$export$2e2bcd8739ae039 = $dc1e20be3f06df2e$var$filled;



function $b60dcf6944ff4d60$var$listeners(field, container, notch, fieldType) {
    const eventType = fieldType ? "input" : "change";
    const notchStyle = notch.style;
    field.addEventListener("focus", ()=>{
        container.classList.add(fieldType ? "textarea--focused" : "input--focused");
        notchStyle.width = (0, $2cd48c5c256c7ff7$export$2e2bcd8739ae039)(notch);
    });
    field.addEventListener("blur", ()=>{
        container.classList.remove(fieldType ? "textarea--focused" : "input--focused");
        if (field.value.trim().length <= 0) notchStyle.width = "auto";
    });
    field.addEventListener(eventType, ()=>{
        (0, $dc1e20be3f06df2e$export$2e2bcd8739ae039)(field, container, fieldType);
        (0, $9d84a9ca8fdba971$export$2e2bcd8739ae039)(field, container, fieldType);
    });
    (0, $dc1e20be3f06df2e$export$2e2bcd8739ae039)(field, container, fieldType);
    (0, $f4d83fd2c8dbf337$export$2e2bcd8739ae039)(field, container, fieldType);
    notchStyle.width = (0, $2cd48c5c256c7ff7$export$2e2bcd8739ae039)(notch);
}
var $b60dcf6944ff4d60$export$2e2bcd8739ae039 = $b60dcf6944ff4d60$var$listeners;


const $cf838c15c8b009ba$var$TextFields = {
    notches: [],
    notched: $b6e9082d8b811de5$export$2e2bcd8739ae039,
    handlers () {
        const fields = [
            ...document.querySelectorAll(".text-field-container input, .text-field-container textarea")
        ];
        fields.forEach((field)=>{
            const notchData = this.notches.find((data)=>data.container.contains(field));
            if (!notchData) return;
            const { container: container, notch: notch } = notchData;
            const fieldType = field instanceof HTMLTextAreaElement;
            (0, $8019ab4d39907fdc$export$2e2bcd8739ae039)(field, container, notch);
            (0, $b60dcf6944ff4d60$export$2e2bcd8739ae039)(field, container, notch, fieldType);
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
