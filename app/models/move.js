import DS from "ember-data";

export default DS.Model.extend({
  accuracy: DS.attr("number"),
  ailment: DS.attr("string"),
  category: DS.attr("string"),
  critRate: DS.attr("number"),
  damageClass: DS.attr("string"),
  drain: DS.attr("number"),
  effectChance: DS.attr("number"),
  effectChanges: DS.attr("string"),
  effectEntry: DS.attr("string"),
  flavorText: DS.attr("string"),
  flinchChance: DS.attr("number"),
  generation: DS.attr("string"),
  healing: DS.attr("number"),
  maxHits: DS.attr("number"),
  maxTurns: DS.attr("number"),
  minHits: DS.attr("number"),
  minTurns: DS.attr("number"),
  moveType: DS.attr("string"),
  name: DS.attr("string"),
  power: DS.attr("number"),
  pp: DS.attr("number"),
  priority: DS.attr("number"),
  statChanges: DS.attr(),
  statChance: DS.attr("number"),
  target: DS.attr("string")
});
