const notched = function notchedFunction() {
  document.querySelectorAll('.floating-label').forEach((label) => {
    const notchedOutline = label.closest('.notched-outline');

    const outline = notchedOutline || document.createElement('div');
    if (!notchedOutline) {
      outline.classList.add('notched-outline');
      outline.innerHTML = `<div class="notched-outline__leading"></div><div class="notched-outline__notch">${label.outerHTML}</div><div class="notched-outline__trailing"></div>`;
      label.replaceWith(outline);
    }

    this.notches.push({
      container: outline.parentNode,
      notch: outline.querySelector('.notched-outline__notch'),
    });
  });
};

export default notched;
