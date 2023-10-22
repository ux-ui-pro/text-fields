import notched from './utils/notched';
import observers from './utils/observers';
import listeners from './utils/listeners';

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
