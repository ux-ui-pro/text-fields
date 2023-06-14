function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
const $4fa36e821943b400$var$notched = `
    <div class="notched-outline">
        <div class="notched-outline__leading"></div>
        <div class="notched-outline__notch"></div>
        <div class="notched-outline__trailing"></div>
    </div>
`;
const $4fa36e821943b400$var$notch = document.querySelector(".notched-outline__notch");
const $4fa36e821943b400$var$customizeLabel = (textField)=>{
    const label = textField.previousElementSibling;
    textField.parentElement.insertAdjacentHTML("afterbegin", $4fa36e821943b400$var$notched);
    textField.parentElement.querySelector(".notched-outline__notch").appendChild(label);
};
const $4fa36e821943b400$var$handleInput = (input, classList, label, style)=>{
    if (input && label) {
        if (input.disabled) classList.add("input--disabled");
        if (input.required) label.classList.add("floating-label--required");
        if (input.value.trim().length > 0) {
            classList.add("input--filled");
            style.width = (label.clientWidth + 13) * .75 + "px";
        }
        input.addEventListener("focus", ()=>{
            classList.add("input--focused");
            style.width = (label.clientWidth + 13) * .75 + "px";
        });
        input.addEventListener("blur", ()=>{
            classList.remove("input--focused");
            if (input.value.trim().length <= 0 && label) style.width = "auto";
        });
        input.addEventListener("input", ()=>{
            input.value.trim().length > 0 ? classList.add("input--filled") : classList.remove("input--filled");
        });
    }
};
const $4fa36e821943b400$var$handleTextarea = (textarea, classList, label, style)=>{
    if (textarea && label) {
        if (textarea.disabled) classList.add("textarea--disabled");
        if (textarea.required) label.classList.add("floating-label--required");
        if (textarea.value.trim().length > 0) {
            classList.add("textarea--filled");
            style.width = (label.clientWidth + 13) * .75 + "px";
        }
        textarea.addEventListener("focus", ()=>{
            classList.add("textarea--focused");
            style.width = (label.clientWidth + 13) * .75 + "px";
        });
        textarea.addEventListener("blur", ()=>{
            classList.remove("textarea--focused");
            if (textarea.value.trim().length <= 0 && label) style.width = "auto";
        });
        textarea.addEventListener("change", ()=>{
            textarea.value.trim().length > 0 ? classList.add("textarea--filled") : classList.remove("textarea--filled");
        });
        textarea.addEventListener("input", ()=>{
            if (classList.contains("textarea--auto-resizeable")) {
                textarea.style.height = "auto";
                textarea.style.height = textarea.scrollHeight + "px";
            }
        });
    }
};
const $4fa36e821943b400$var$input = ()=>{
    const inputs = document.querySelectorAll(".input input");
    for (let input of inputs){
        const label = input.previousElementSibling;
        if (!label) return;
        if (!$4fa36e821943b400$var$notch) $4fa36e821943b400$var$customizeLabel(input);
        const { classList: classList  } = input.parentNode;
        const { style: style  } = label.parentNode;
        $4fa36e821943b400$var$handleInput(input, classList, label, style);
    }
};
const $4fa36e821943b400$var$textarea = ()=>{
    const textareas = document.querySelectorAll(".textarea textarea");
    for (let textarea of textareas){
        const label = textarea.previousElementSibling;
        if (!label) return;
        if (!$4fa36e821943b400$var$notch) $4fa36e821943b400$var$customizeLabel(textarea);
        const { classList: classList  } = textarea.parentNode;
        const { style: style  } = label.parentNode;
        $4fa36e821943b400$var$handleTextarea(textarea, classList, label, style);
    }
};
var $4fa36e821943b400$export$2e2bcd8739ae039 = {
    input: $4fa36e821943b400$var$input,
    textarea: $4fa36e821943b400$var$textarea
};


//# sourceMappingURL=index.js.map
