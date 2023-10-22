function observers(field, container) {
  const fieldType = field instanceof HTMLTextAreaElement;

  const observer = new MutationObserver(() => {
    if (field.required) {
      container.classList.add(fieldType ? 'textarea--error' : 'input--error');
    } else {
      container.classList.remove(fieldType ? 'textarea--error' : 'input--error');
    }

    if (field.disabled) {
      container.classList.add(fieldType ? 'textarea--disabled' : 'input--disabled');
    } else {
      container.classList.remove(fieldType ? 'textarea--disabled' : 'input--disabled');
    }
  });

  observer.observe(field, { attributes: true, attributeFilter: ['required', 'disabled'] });
}

export default observers;
