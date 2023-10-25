import required from '../behavior/required';
import disabled from '../behavior/disabled';

function observer(field, container) {
  const fieldType = field instanceof HTMLTextAreaElement;

  const fieldObserver = new MutationObserver(() => {
    required(field, container, fieldType);
    disabled(field, container, fieldType);
  });

  fieldObserver.observe(field, { attributes: true, attributeFilter: ['required', 'disabled'] });
}

export default observer;
