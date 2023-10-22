function getNotchWidth(notch) {
  const label = notch.querySelector('.floating-label');
  return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : 'auto';
}

function filled(field, container, fieldType) {
  if (field.value.trim().length > 0) {
    container.classList.add(fieldType ? 'textarea--filled' : 'input--filled');
  } else {
    container.classList.remove(fieldType ? 'textarea--filled' : 'input--filled');
  }
}

function textareaResizeable(field, container, fieldType) {
  if (fieldType && container.classList.contains('textarea--auto-resizeable')) {
    const currentField = field;

    currentField.style.height = 'auto';
    currentField.style.height = `${currentField.scrollHeight}px`;
  }
}

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

  notchStyle.width = getNotchWidth(notch);
}

export default listeners;
