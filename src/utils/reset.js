function reset() {
  const fields = [...document.querySelectorAll('.text-field-container input, .text-field-container textarea')];

  const resetFields = () => {
    fields.forEach((field) => {
      const e = field;

      e.parentNode.classList.remove('textarea--filled', 'textarea--error');
      e.parentNode.classList.remove('input--filled', 'input--error');
      e.value = '';

      if (e.parentNode.classList.contains('textarea--auto-resizeable')) {
        e.style.height = 'auto';
      }
    });
  };

  requestAnimationFrame(resetFields);
}

export default reset;
