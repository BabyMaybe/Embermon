import Controller from '@ember/controller';
import { inject as service } from "@ember/service";

export default Controller.extend({
  queryParams: ['offset', 'limit'],
  offset: null,
  limit: null,
  pagination: service(),

  actions: {
    test(move) {
      console.log('boop!');
      console.log(this.model);
      this.transitionToRoute('moves.detail', move);
      console.log('should have transitioned');
    }
  }
});
