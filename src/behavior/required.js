const required = (field, container, fieldType) => {
  if (field.required) {
    container.classList.add(fieldType ? 'textarea--error' : 'input--error');
  } else {
    container.classList.remove(fieldType ? 'textarea--error' : 'input--error');
  }
};

export default required;
