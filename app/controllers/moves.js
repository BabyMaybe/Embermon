import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    console.log('model');
    console.log(this.model);
  }
});
