import Controller from "@ember/controller";

export default Controller.extend({
  // init() {
  //   this._super(...arguments);
  // }

  actions: {
    testParent() {
      console.log('boop!');
      console.log('literally anything?');
      this.transitionToRoute('moves.detail');
      console.log('should have transitioned');
    }
  }
});
