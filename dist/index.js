
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
function $c35decadc36dbe51$var$notched() {
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
var $c35decadc36dbe51$export$2e2bcd8739ae039 = $c35decadc36dbe51$var$notched;


function $6f47aa3ef7224efa$var$required(field, container, fieldType) {
    if (field.required) container.classList.add(fieldType ? "textarea--error" : "input--error");
    else container.classList.remove(fieldType ? "textarea--error" : "input--error");
}
var $6f47aa3ef7224efa$export$2e2bcd8739ae039 = $6f47aa3ef7224efa$var$required;


function $51dd5d3f7e8bc6e9$var$disabled(field, container, fieldType) {
    if (field.disabled) container.classList.add(fieldType ? "textarea--disabled" : "input--disabled");
    else container.classList.remove(fieldType ? "textarea--disabled" : "input--disabled");
}
var $51dd5d3f7e8bc6e9$export$2e2bcd8739ae039 = $51dd5d3f7e8bc6e9$var$disabled;


function $2547ed608777a5fe$var$observers(field, container) {
    const fieldType = field instanceof HTMLTextAreaElement;
    const observer = new MutationObserver(()=>{
        (0, $6f47aa3ef7224efa$export$2e2bcd8739ae039)(field, container, fieldType);
        (0, $51dd5d3f7e8bc6e9$export$2e2bcd8739ae039)(field, container, fieldType);
    });
    observer.observe(field, {
        attributes: true,
        attributeFilter: [
            "required",
            "disabled"
        ]
    });
}
var $2547ed608777a5fe$export$2e2bcd8739ae039 = $2547ed608777a5fe$var$observers;


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


function $a937e105c7bb00ac$var$filled(field, container, fieldType) {
    if (field.value.trim().length > 0) container.classList.add(fieldType ? "textarea--filled" : "input--filled");
    else container.classList.remove(fieldType ? "textarea--filled" : "input--filled");
}
var $a937e105c7bb00ac$export$2e2bcd8739ae039 = $a937e105c7bb00ac$var$filled;



function $c863a16b060bf865$var$listeners(field, container, notch, fieldType) {
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
        (0, $a937e105c7bb00ac$export$2e2bcd8739ae039)(field, container, fieldType);
        (0, $1f6247984b559a91$export$2e2bcd8739ae039)(field, container, fieldType);
    });
    (0, $a937e105c7bb00ac$export$2e2bcd8739ae039)(field, container, fieldType);
    (0, $51dd5d3f7e8bc6e9$export$2e2bcd8739ae039)(field, container, fieldType);
    notchStyle.width = (0, $f05f33b2a1e3bc6c$export$2e2bcd8739ae039)(notch);
}
var $c863a16b060bf865$export$2e2bcd8739ae039 = $c863a16b060bf865$var$listeners;


const $4fa36e821943b400$var$TextFields = {
    notches: [],
    notched: $c35decadc36dbe51$export$2e2bcd8739ae039,
    handlers () {
        const fields = [
            ...document.querySelectorAll(".text-field-container input, .text-field-container textarea")
        ];
        fields.forEach((field)=>{
            const notchData = this.notches.find((data)=>data.container.contains(field));
            if (!notchData) return;
            const { container: container, notch: notch } = notchData;
            const fieldType = field instanceof HTMLTextAreaElement;
            (0, $2547ed608777a5fe$export$2e2bcd8739ae039)(field, container, notch);
            (0, $c863a16b060bf865$export$2e2bcd8739ae039)(field, container, notch, fieldType);
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
