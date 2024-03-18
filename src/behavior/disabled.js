const disabled = (field, container, fieldType) => {
  if (field.disabled) {
    container.classList.add(fieldType ? 'textarea--disabled' : 'input--disabled');
  } else {
    container.classList.remove(fieldType ? 'textarea--disabled' : 'input--disabled');
  }
};

export default disabled;
