import observer from './observer';
import listeners from './listeners';

function handlers() {
  const fields = [...document.querySelectorAll('.text-field-container input, .text-field-container textarea')];

  fields.forEach((field) => {
    const notchData = this.notches.find((data) => data.container.contains(field));

    if (!notchData) return;

    const { container, notch } = notchData;
    const fieldType = field instanceof HTMLTextAreaElement;

    observer(field, container, notch);
    listeners(field, container, notch, fieldType);
  });
}

export default handlers;
