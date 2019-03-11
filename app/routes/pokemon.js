import Route from '@ember/routing/route';

export default Route.extend({
  model(parms) {
    return this.store.findRecord('pokemon', 1);
  }
});
