import DS from "ember-data";

export default DS.JSONSerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    // console.log("normalizing single response");
    // console.log(payload);

    // payload = payload.results;
    payload.pokemeta = payload.meta;
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    // console.log("normalizing array response");
    // console.log(payload);

    payload.forEach(item => (item.pokemeta = item.meta));
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalize(modelClass, resourceHash) {
    resourceHash.accuracy = resourceHash.accuracy;
    resourceHash.ailment = resourceHash.pokemeta.ailment.name;
    resourceHash.category = resourceHash.pokemeta.category.name;
    resourceHash.critRate = resourceHash.pokemeta.crit_rate;
    resourceHash.damageClass = resourceHash.damage_class.name;
    resourceHash.drain = resourceHash.pokemeta.drain;
    resourceHash.effectChance = resourceHash.effect_chance;
    resourceHash.effectChanges = resourceHash.effect_changes;
    resourceHash.effectEntry = resourceHash.effect_entries[0].effect;
    resourceHash.flavorText = resourceHash.flavor_text_entries
      .filter(m => m.language.name === "en")
      .filter(m =>
        ["red-blue", "yellow", "firered-leafgreen"].includes(
          m.version_group.name
        )
      )
      .find(m => m.flavor_text)
      .flavor_text.replace(/\n|\r/g, " ")
      .trim();
    resourceHash.flinchChance = resourceHash.pokemeta.flinch_chance;
    resourceHash.generation = resourceHash.generation.name;
    resourceHash.healing = resourceHash.pokemeta.healing;
    resourceHash.id = resourceHash.id;
    resourceHash.maxHits = resourceHash.pokemeta.max_hits;
    resourceHash.maxTurns = resourceHash.pokemeta.max_turns;
    resourceHash.minHits = resourceHash.pokemeta.min_hits;
    resourceHash.minTurns = resourceHash.pokemeta.min_turns;
    resourceHash.moveType = resourceHash.type.name;
    resourceHash.name = resourceHash.name;
    resourceHash.power = resourceHash.power;
    resourceHash.pp = resourceHash.pp;
    resourceHash.priority = resourceHash.priority;
    resourceHash.statChanges = resourceHash.stat_changes;
    resourceHash.statChance = resourceHash.pokemeta.stat_chance;
    resourceHash.target = resourceHash.target.name;

    return this._super(modelClass, resourceHash);
  }
});
