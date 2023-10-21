const $cf838c15c8b009ba$var$TextFields = {
    notches: [],
    labels: null,
    inputs: null,
    wrap () {
        this.labels = document.querySelectorAll(".floating-label");
        this.labels.forEach((label)=>{
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
        this.update();
    },
    handleFields () {
        const fields = [
            ...document.querySelectorAll(".text-field-container input, .text-field-container textarea")
        ];
        fields.forEach((field)=>{
            const notchData = this.notches.find((data)=>data.container.contains(field));
            if (!notchData) return;
            const { container: container, notch: notch } = notchData;
            const label = notch.querySelector(".floating-label");
            const fieldType = field instanceof HTMLTextAreaElement;
            if (field.disabled) container.classList.add(fieldType ? "textarea--disabled" : "input--disabled");
            if (field.required) label.classList.add("floating-label--required");
            this.toggleFilledClass(field, container, fieldType);
            this.addEventListeners(field, container, notch, fieldType);
        });
        this.notches.forEach(({ notch: notch })=>{
            const notchElement = notch;
            notchElement.style.width = this.getNotchWidth(notchElement);
        });
    },
    addEventListeners (field, container, notch, fieldType) {
        const eventType = fieldType ? "input" : "change";
        const notchWidth = this.getNotchWidth(notch);
        const notchStyle = notch.style;
        field.addEventListener("focus", ()=>{
            container.classList.add(fieldType ? "textarea--focused" : "input--focused");
            notchStyle.width = notchWidth;
        });
        field.addEventListener("blur", ()=>{
            container.classList.remove(fieldType ? "textarea--focused" : "input--focused");
            if (field.value.trim().length <= 0) notchStyle.width = "auto";
        });
        field.addEventListener(eventType, ()=>{
            this.toggleFilledClass(field, container, fieldType);
        });
        if (fieldType && container.classList.contains("textarea--auto-resizeable")) field.addEventListener(eventType, ()=>{
            const currentField = field;
            currentField.style.height = "auto";
            currentField.style.height = `${currentField.scrollHeight}px`;
        });
    },
    toggleFilledClass (field, container, fieldType) {
        if (field.value.trim().length > 0) container.classList.add(fieldType ? "textarea--filled" : "input--filled");
        else container.classList.remove(fieldType ? "textarea--filled" : "input--filled");
    },
    getNotchWidth (notch) {
        const label = notch.querySelector(".floating-label");
        return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : "auto";
    },
    update () {
        this.inputs = document.querySelectorAll(".text-field-container input, .text-field-container textarea");
    },
    init () {
        this.wrap();
        this.handleFields();
    },
    destroy () {
        this.notches.forEach(({ container: container, notch: notch })=>{
            const label = notch.querySelector(".floating-label");
            label.replaceWith(label.innerHTML);
            container.replaceWith(notch.innerHTML);
        });
        this.notches = [];
        this.labels = null;
        this.inputs = null;
    }
};
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $cf838c15c8b009ba$var$TextFields;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
