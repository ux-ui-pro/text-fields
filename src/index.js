import notched from './module/notched';
import observers from './module/observers';
import listeners from './module/listeners';

const TextFields = {
    notches: [],

    notched,

    handlers() {
        const fields = [...document.querySelectorAll('.text-field-container input, .text-field-container textarea')];

        fields.forEach((field) => {
            const notchData = this.notches.find((data) => data.container.contains(field));

            if (!notchData) return;

            const { container, notch } = notchData;
            const fieldType = field instanceof HTMLTextAreaElement;

            observers(field, container, notch);
            listeners(field, container, notch, fieldType);
        });
    },

    init() {
        this.notched();
        this.handlers();
    },

    destroy() {
        this.notches = [];
    },
};

export default TextFields;
