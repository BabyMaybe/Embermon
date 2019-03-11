import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    offset: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },
  model(params) {
    console.log('modelParams');
    console.log(params);
    return this.store.findAll('move', params);
    }
});
