const filled = (field, container, fieldType) => {
  if (field.value.trim().length > 0) {
    container.classList.add(fieldType ? 'textarea--filled' : 'input--filled');
  } else {
    container.classList.remove(fieldType ? 'textarea--filled' : 'input--filled');
  }
};

export default filled;
