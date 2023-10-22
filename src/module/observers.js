import required from '../states/required';
import disabled from '../states/disabled';

function observers(field, container) {
  const fieldType = field instanceof HTMLTextAreaElement;

  const observer = new MutationObserver(() => {
    required(field, container, fieldType);
    disabled(field, container, fieldType);
  });

  observer.observe(field, { attributes: true, attributeFilter: ['required', 'disabled'] });
}

export default observers;
