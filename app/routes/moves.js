import Route from "@ember/routing/route";

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
    return this.store.query("move", params);
  }
});
