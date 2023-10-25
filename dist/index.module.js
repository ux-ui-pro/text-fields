function $b9be27a0e887d99d$var$required(field, container, fieldType) {
    if (field.required) container.classList.add(fieldType ? "textarea--error" : "input--error");
    else container.classList.remove(fieldType ? "textarea--error" : "input--error");
}
var $b9be27a0e887d99d$export$2e2bcd8739ae039 = $b9be27a0e887d99d$var$required;


function $d63f6be5729f9f4d$var$disabled(field, container, fieldType) {
    if (field.disabled) container.classList.add(fieldType ? "textarea--disabled" : "input--disabled");
    else container.classList.remove(fieldType ? "textarea--disabled" : "input--disabled");
}
var $d63f6be5729f9f4d$export$2e2bcd8739ae039 = $d63f6be5729f9f4d$var$disabled;


function $3b865bfd338f95a2$var$observer(field, container) {
    const fieldType = field instanceof HTMLTextAreaElement;
    const fieldObserver = new MutationObserver(()=>{
        (0, $b9be27a0e887d99d$export$2e2bcd8739ae039)(field, container, fieldType);
        (0, $d63f6be5729f9f4d$export$2e2bcd8739ae039)(field, container, fieldType);
    });
    fieldObserver.observe(field, {
        attributes: true,
        attributeFilter: [
            "required",
            "disabled"
        ]
    });
}
var $3b865bfd338f95a2$export$2e2bcd8739ae039 = $3b865bfd338f95a2$var$observer;


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


function $85cbcddd12c7338d$var$filled(field, container, fieldType) {
    if (field.value.trim().length > 0) container.classList.add(fieldType ? "textarea--filled" : "input--filled");
    else container.classList.remove(fieldType ? "textarea--filled" : "input--filled");
}
var $85cbcddd12c7338d$export$2e2bcd8739ae039 = $85cbcddd12c7338d$var$filled;




function $17213d199e128eda$var$listeners(field, container, notch, fieldType) {
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
        (0, $85cbcddd12c7338d$export$2e2bcd8739ae039)(field, container, fieldType);
        (0, $9d84a9ca8fdba971$export$2e2bcd8739ae039)(field, container, fieldType);
    });
    (0, $85cbcddd12c7338d$export$2e2bcd8739ae039)(field, container, fieldType);
    (0, $d63f6be5729f9f4d$export$2e2bcd8739ae039)(field, container, fieldType);
    (0, $b9be27a0e887d99d$export$2e2bcd8739ae039)(field, container, fieldType);
    notchStyle.width = (0, $2cd48c5c256c7ff7$export$2e2bcd8739ae039)(notch);
}
var $17213d199e128eda$export$2e2bcd8739ae039 = $17213d199e128eda$var$listeners;


function $a9991ae38dc15d24$var$handlers() {
    const fields = [
        ...document.querySelectorAll(".text-field-container input, .text-field-container textarea")
    ];
    fields.forEach((field)=>{
        const notchData = this.notches.find((data)=>data.container.contains(field));
        if (!notchData) return;
        const { container: container, notch: notch } = notchData;
        const fieldType = field instanceof HTMLTextAreaElement;
        (0, $3b865bfd338f95a2$export$2e2bcd8739ae039)(field, container, notch);
        (0, $17213d199e128eda$export$2e2bcd8739ae039)(field, container, notch, fieldType);
    });
}
var $a9991ae38dc15d24$export$2e2bcd8739ae039 = $a9991ae38dc15d24$var$handlers;


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


function $667736a34816a1e1$var$reset() {
    const fields = [
        ...document.querySelectorAll(".text-field-container input, .text-field-container textarea")
    ];
    const resetFields = ()=>{
        fields.forEach((field)=>{
            const e = field;
            e.parentNode.classList.remove("textarea--filled", "textarea--error");
            e.parentNode.classList.remove("input--filled", "input--error");
            e.value = "";
            if (e.parentNode.classList.contains("textarea--auto-resizeable")) e.style.height = "auto";
        });
    };
    requestAnimationFrame(resetFields);
}
var $667736a34816a1e1$export$2e2bcd8739ae039 = $667736a34816a1e1$var$reset;


const $cf838c15c8b009ba$var$TextFields = {
    notches: [],
    notched: $85068ae01dc596ad$export$2e2bcd8739ae039,
    handlers: $a9991ae38dc15d24$export$2e2bcd8739ae039,
    reset: $667736a34816a1e1$export$2e2bcd8739ae039,
    async init () {
        await this.notched();
        await this.handlers();
    }
};
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $cf838c15c8b009ba$var$TextFields;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
