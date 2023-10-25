import handlers from './events/handlers';
import notched from './utils/notched';
import reset from './utils/reset';

const TextFields = {
  notches: [],

  notched,

  handlers,

  reset,

  async init() {
    await this.notched();
    await this.handlers();
  },
};

export default TextFields;
