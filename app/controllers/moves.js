import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  queryParams: ["offset", "limit"],
  offset: null,
  limit: null,
  pagination: service(),

  actions: {
    openDetails(move) {
      this.transitionToRoute("moves.detail", move);
    }
  }
});
