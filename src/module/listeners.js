import getNotchWidth from '../utils/getNotchWidth';
import textareaResizeable from '../utils/textareaResizeable';
import filled from '../states/filled';
import disabled from '../states/disabled';

function listeners(field, container, notch, fieldType) {
  const eventType = fieldType ? 'input' : 'change';
  const notchStyle = notch.style;

  field.addEventListener('focus', () => {
    container.classList.add(fieldType ? 'textarea--focused' : 'input--focused');
    notchStyle.width = getNotchWidth(notch);
  });

  field.addEventListener('blur', () => {
    container.classList.remove(fieldType ? 'textarea--focused' : 'input--focused');

    if (field.value.trim().length <= 0) {
      notchStyle.width = 'auto';
    }
  });

  field.addEventListener(eventType, () => {
    filled(field, container, fieldType);
    textareaResizeable(field, container, fieldType);
  });

  filled(field, container, fieldType);
  disabled(field, container, fieldType);

  notchStyle.width = getNotchWidth(notch);
}

export default listeners;
