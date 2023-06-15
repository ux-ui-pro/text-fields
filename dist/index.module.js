class $cf838c15c8b009ba$var$TextFields {
    constructor(){
        this.notches = [];
        this.labels = document.querySelectorAll(".floating-label");
        this.wrap();
        this.handleFields();
    }
    wrap = ()=>{
        this.labels.forEach((label)=>{
            const notchedOutline = label.closest(".notched-outline");
            if (notchedOutline) this.notches.push({
                container: notchedOutline.parentNode,
                notch: notchedOutline.querySelector(".notched-outline__notch")
            });
            else {
                const notchedOutline = document.createElement("div");
                notchedOutline.classList.add("notched-outline");
                notchedOutline.innerHTML = `<div class="notched-outline__leading"></div><div class="notched-outline__notch">${label.outerHTML}</div><div class="notched-outline__trailing"></div>`;
                label.replaceWith(notchedOutline);
                this.notches.push({
                    container: notchedOutline.parentNode,
                    notch: notchedOutline.querySelector(".notched-outline__notch")
                });
            }
        });
        this.update();
    };
    handleFields = ()=>{
        const fields = [
            ...document.querySelectorAll(".text-field-container input, .text-field-container textarea")
        ];
        fields.forEach((field)=>{
            const notchData = this.notches.find((notchData)=>notchData.container.contains(field));
            if (!notchData) return;
            const { container: container , notch: notch  } = notchData;
            const label = notch.querySelector(".floating-label");
            const fieldType = field instanceof HTMLTextAreaElement;
            if (field.disabled) container.classList.add(fieldType ? "textarea--disabled" : "input--disabled");
            if (field.required) label.classList.add("floating-label--required");
            if (field.value.trim().length > 0) {
                container.classList.add(fieldType ? "textarea--filled" : "input--filled");
                notch.style.width = this.getNotchWidth(notch);
            }
            field.addEventListener("focus", ()=>{
                container.classList.add(fieldType ? "textarea--focused" : "input--focused");
                notch.style.width = this.getNotchWidth(notch);
            });
            field.addEventListener("blur", ()=>{
                container.classList.remove(fieldType ? "textarea--focused" : "input--focused");
                if (field.value.trim().length <= 0) notch.style.width = "auto";
            });
            field.addEventListener("change", ()=>{
                this.toggleFilledClass(field, container, fieldType);
            });
            if (fieldType && container.classList.contains("textarea--auto-resizeable")) field.addEventListener("input", ()=>{
                field.style.height = "auto";
                field.style.height = `${field.scrollHeight}px`;
            });
            else field.addEventListener("input", ()=>{
                this.toggleFilledClass(field, container, fieldType);
            });
        });
    };
    update = ()=>{
        this.inputs = document.querySelectorAll(".text-field-container input, .text-field-container textarea");
    };
    toggleFilledClass = (field, container, fieldType)=>{
        field.value.trim().length > 0 ? container.classList.add(fieldType ? "textarea--filled" : "input--filled") : container.classList.remove(fieldType ? "textarea--filled" : "input--filled");
    };
    getNotchWidth = (notch)=>{
        const label = notch.querySelector(".floating-label");
        return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * .75}px` : "auto";
    };
}
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $cf838c15c8b009ba$var$TextFields;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
