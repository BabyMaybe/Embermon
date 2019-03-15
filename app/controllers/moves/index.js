import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['offset', 'limit'],
  offset: null,
  limit: null,

  actions: {
    test(move) {
      console.log('boop!');
      console.log(this.model);
      this.transitionToRoute('moves.detail', move);
      console.log('should have transitioned');
    }
  }
});
