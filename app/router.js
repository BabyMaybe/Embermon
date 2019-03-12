import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("moves", function() {
    this.route("detail");
    this.route("detail", { path: "/:move_id" });
  });
  this.route("pokemon", function() {
    this.route("detail", { path: "/:pokemon_id" });
  });
});

export default Router;
