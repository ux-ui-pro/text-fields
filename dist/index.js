
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
function $e3f4bbd5392df92b$var$required(field, container, fieldType) {
    if (field.required) container.classList.add(fieldType ? "textarea--error" : "input--error");
    else container.classList.remove(fieldType ? "textarea--error" : "input--error");
}
var $e3f4bbd5392df92b$export$2e2bcd8739ae039 = $e3f4bbd5392df92b$var$required;


function $f20c9cdf4cf285ea$var$disabled(field, container, fieldType) {
    if (field.disabled) container.classList.add(fieldType ? "textarea--disabled" : "input--disabled");
    else container.classList.remove(fieldType ? "textarea--disabled" : "input--disabled");
}
var $f20c9cdf4cf285ea$export$2e2bcd8739ae039 = $f20c9cdf4cf285ea$var$disabled;


function $8f3475f3c41d511b$var$observer(field, container) {
    const fieldType = field instanceof HTMLTextAreaElement;
    const fieldObserver = new MutationObserver(()=>{
        (0, $e3f4bbd5392df92b$export$2e2bcd8739ae039)(field, container, fieldType);
        (0, $f20c9cdf4cf285ea$export$2e2bcd8739ae039)(field, container, fieldType);
    });
    fieldObserver.observe(field, {
        attributes: true,
        attributeFilter: [
            "required",
            "disabled"
        ]
    });
}
var $8f3475f3c41d511b$export$2e2bcd8739ae039 = $8f3475f3c41d511b$var$observer;


function $f05f33b2a1e3bc6c$var$getNotchWidth(notch) {
    const label = notch.querySelector(".floating-label");
    return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : "auto";
}
var $f05f33b2a1e3bc6c$export$2e2bcd8739ae039 = $f05f33b2a1e3bc6c$var$getNotchWidth;


function $1f6247984b559a91$var$textareaResizeable(field, container, fieldType) {
    if (fieldType && container.classList.contains("textarea--auto-resizeable")) {
        const currentField = field;
        currentField.style.height = "auto";
        currentField.style.height = `${currentField.scrollHeight}px`;
    }
}
var $1f6247984b559a91$export$2e2bcd8739ae039 = $1f6247984b559a91$var$textareaResizeable;


function $82e54b8b7540bfa7$var$filled(field, container, fieldType) {
    if (field.value.trim().length > 0) container.classList.add(fieldType ? "textarea--filled" : "input--filled");
    else container.classList.remove(fieldType ? "textarea--filled" : "input--filled");
}
var $82e54b8b7540bfa7$export$2e2bcd8739ae039 = $82e54b8b7540bfa7$var$filled;




function $5c3ba44487dc4f26$var$listeners(field, container, notch, fieldType) {
    const eventType = fieldType ? "input" : "change";
    const notchStyle = notch.style;
    field.addEventListener("focus", ()=>{
        container.classList.add(fieldType ? "textarea--focused" : "input--focused");
        notchStyle.width = (0, $f05f33b2a1e3bc6c$export$2e2bcd8739ae039)(notch);
    });
    field.addEventListener("blur", ()=>{
        container.classList.remove(fieldType ? "textarea--focused" : "input--focused");
        if (field.value.trim().length <= 0) notchStyle.width = "auto";
    });
    field.addEventListener(eventType, ()=>{
        (0, $82e54b8b7540bfa7$export$2e2bcd8739ae039)(field, container, fieldType);
        (0, $1f6247984b559a91$export$2e2bcd8739ae039)(field, container, fieldType);
    });
    (0, $82e54b8b7540bfa7$export$2e2bcd8739ae039)(field, container, fieldType);
    (0, $f20c9cdf4cf285ea$export$2e2bcd8739ae039)(field, container, fieldType);
    (0, $e3f4bbd5392df92b$export$2e2bcd8739ae039)(field, container, fieldType);
    notchStyle.width = (0, $f05f33b2a1e3bc6c$export$2e2bcd8739ae039)(notch);
}
var $5c3ba44487dc4f26$export$2e2bcd8739ae039 = $5c3ba44487dc4f26$var$listeners;


function $6c721e49ead28247$var$handlers() {
    const fields = [
        ...document.querySelectorAll(".text-field-container input, .text-field-container textarea")
    ];
    fields.forEach((field)=>{
        const notchData = this.notches.find((data)=>data.container.contains(field));
        if (!notchData) return;
        const { container: container, notch: notch } = notchData;
        const fieldType = field instanceof HTMLTextAreaElement;
        (0, $8f3475f3c41d511b$export$2e2bcd8739ae039)(field, container, notch);
        (0, $5c3ba44487dc4f26$export$2e2bcd8739ae039)(field, container, notch, fieldType);
    });
}
var $6c721e49ead28247$export$2e2bcd8739ae039 = $6c721e49ead28247$var$handlers;


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


function $c0e3891dd48f5cfd$var$reset() {
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
var $c0e3891dd48f5cfd$export$2e2bcd8739ae039 = $c0e3891dd48f5cfd$var$reset;


const $4fa36e821943b400$var$TextFields = {
    notches: [],
    notched: $598d57897adea35a$export$2e2bcd8739ae039,
    handlers: $6c721e49ead28247$export$2e2bcd8739ae039,
    reset: $c0e3891dd48f5cfd$export$2e2bcd8739ae039,
    async init () {
        await this.notched();
        await this.handlers();
    }
};
var $4fa36e821943b400$export$2e2bcd8739ae039 = $4fa36e821943b400$var$TextFields;


//# sourceMappingURL=index.js.map
