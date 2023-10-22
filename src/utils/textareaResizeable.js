function textareaResizeable(field, container, fieldType) {
  if (fieldType && container.classList.contains('textarea--auto-resizeable')) {
    const currentField = field;

    currentField.style.height = 'auto';
    currentField.style.height = `${currentField.scrollHeight}px`;
  }
}

export default textareaResizeable;
