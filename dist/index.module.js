const $cf838c15c8b009ba$var$notched = `
    <div class="notched-outline">
        <div class="notched-outline__leading"></div>
        <div class="notched-outline__notch"></div>
        <div class="notched-outline__trailing"></div>
    </div>
`;
const $cf838c15c8b009ba$var$customizeLabel = (textField)=>{
    const label = textField.previousElementSibling;
    textField.parentElement.insertAdjacentHTML("afterbegin", $cf838c15c8b009ba$var$notched);
    textField.parentElement.querySelector(".notched-outline__notch").appendChild(label);
};
const $cf838c15c8b009ba$var$handleInput = (input, classList, label, style)=>{
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
const $cf838c15c8b009ba$var$handleTextarea = (textarea, classList, label, style)=>{
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
const $cf838c15c8b009ba$export$f5b8910cec6cf069 = ()=>{
    const inputs = document.querySelectorAll(".input input");
    for (let input of inputs){
        const label = input.previousElementSibling;
        if (!label) return;
        $cf838c15c8b009ba$var$customizeLabel(input);
        const { classList: classList  } = input.parentNode;
        const { style: style  } = label.parentNode;
        $cf838c15c8b009ba$var$handleInput(input, classList, label, style);
    }
};
const $cf838c15c8b009ba$export$379139ebc1c2b235 = ()=>{
    const textareas = document.querySelectorAll(".textarea textarea");
    for (let textarea of textareas){
        const label = textarea.previousElementSibling;
        if (!label) return;
        $cf838c15c8b009ba$var$customizeLabel(textarea);
        const { classList: classList  } = textarea.parentNode;
        const { style: style  } = label.parentNode;
        $cf838c15c8b009ba$var$handleTextarea(textarea, classList, label, style);
    }
};


export {$cf838c15c8b009ba$export$f5b8910cec6cf069 as Input, $cf838c15c8b009ba$export$379139ebc1c2b235 as Textarea};
//# sourceMappingURL=index.module.js.map
