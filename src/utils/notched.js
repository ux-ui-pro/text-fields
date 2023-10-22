function notched() {
  const labels = document.querySelectorAll('.floating-label');

  labels.forEach((label) => {
    const notchedOutline = label.closest('.notched-outline');

    if (notchedOutline) {
      this.notches.push({
        container: notchedOutline.parentNode,
        notch: notchedOutline.querySelector('.notched-outline__notch'),
      });
    } else {
      const outline = document.createElement('div');

      outline.classList.add('notched-outline');
      outline.innerHTML = `<div class="notched-outline__leading"></div><div class="notched-outline__notch">${label.outerHTML}</div><div class="notched-outline__trailing"></div>`;

      label.replaceWith(outline);

      this.notches.push({
        container: outline.parentNode,
        notch: outline.querySelector('.notched-outline__notch'),
      });
    }
  });
}

export default notched;
