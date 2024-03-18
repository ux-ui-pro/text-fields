import observer from './observer';
import listeners from './listeners';

function handlers() {
  [...document.querySelectorAll('.text-field-container input, .text-field-container textarea')].forEach((field) => {
    const notchData = this.notches.find((data) => data.container.contains(field));

    if (!notchData) return;

    observer(field, notchData.container, notchData.notch);
    listeners(field, notchData.container, notchData.notch, field instanceof HTMLTextAreaElement);
  });
}

export default handlers;
