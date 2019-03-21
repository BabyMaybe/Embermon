import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  // click() {
  //   console.log('clicked move', this.move.name);
  //   // this.transitionToRoute('moves.detail', this.model);
  //   // this.doTheBoop();
  // },

  actions: {
    openDetails() {
      this.openDetails(this.move);
    }
  }
});
