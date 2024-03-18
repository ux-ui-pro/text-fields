const textareaResizeable = (field, container, fieldType) => {
  if (fieldType && container.classList.contains('textarea--auto-resizeable')) {
    field.style.height = 'auto';
    field.style.height = `${field.scrollHeight}px`;
  }
};

export default textareaResizeable;
