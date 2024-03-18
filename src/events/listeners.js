import getNotchWidth from '../utils/getNotchWidth';
import textareaResizeable from '../utils/textareaResizeable';
import filled from '../behavior/filled';
import disabled from '../behavior/disabled';
import required from '../behavior/required';

const setNotchWidth = (notch, width) => {
  notch.style.width = width;
};

const listeners = (field, container, notch, fieldType) => {
  const eventType = fieldType ? 'input' : 'change';

  field.addEventListener('focus', () => {
    container.classList.add(fieldType ? 'textarea--focused' : 'input--focused');

    setNotchWidth(notch, getNotchWidth(notch));
  });

  field.addEventListener('blur', () => {
    container.classList.remove(fieldType ? 'textarea--focused' : 'input--focused');
    if (!field.value.trim()) {
      setNotchWidth(notch, 'auto');
    }
  });

  field.addEventListener(eventType, () => {
    filled(field, container, fieldType);
    textareaResizeable(field, container, fieldType);
  });

  filled(field, container, fieldType);
  disabled(field, container, fieldType);
  required(field, container, fieldType);

  setNotchWidth(notch, getNotchWidth(notch));
};

export default listeners;
