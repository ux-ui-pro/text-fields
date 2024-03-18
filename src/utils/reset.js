const reset = () => {
  const fields = [...document.querySelectorAll('.text-field-container input, .text-field-container textarea')];

  const resetFields = () => fields.forEach((field) => {
    field.parentNode.classList.remove('textarea--filled', 'textarea--error', 'input--filled', 'input--error');
    field.value = '';

    if (field.parentNode.classList.contains('textarea--auto-resizeable')) {
      field.style.height = 'auto';
    }
  });

  requestAnimationFrame(resetFields);
};

export default reset;
