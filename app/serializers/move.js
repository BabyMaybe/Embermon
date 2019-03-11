import DS from 'ember-data';

export default DS.JSONSerializer.extend({


  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = {
      accuracy : payload.accuracy,
      ailment : payload.meta.ailment.name,
      category : payload.meta.category.name,
      critRate : payload.meta.crit_rate,
      damageClass : payload.damage_class.name,
      drain : payload.meta.drain,
      effectChance : payload.effect_chance,
      effectChanges : payload.effect_changes,
      effectEntry : payload.effect_entries[0].effect,
      flavorText : payload.flavor_text_entries.filter(m => m.language.name === 'en').filter(m => ['red-blue', 'yellow', 'firered-leafgreen'].includes(m.version_group.name)).find(m => m.flavor_text).flavor_text.replace(/\n|\r/g, ' ').trim(),
      flinchChance : payload.meta.flinch_chance,
      generation : payload.generation.name,
      healing : payload.meta.healing,
      id: payload.id,
      maxHits : payload.meta.max_hits,
      maxTurns : payload.meta.max_turns,
      minHits : payload.meta.min_hits,
      minTurns : payload.meta.min_turns,
      moveType : payload.type.name,
      name : payload.name,
      power : payload.power,
      pp : payload.pp,
      priority : payload.priority,
      statChanges : payload.stat_changes,
      statChance : payload.meta.stat_chance,
      target : payload.target.name
    };

    return this._super(store, primaryModelClass, newPayload, id, requestType);

  },

  // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //   if (requestType === 'findRecord') {
  //     const data = this.normalize(primaryModelClass, payload);

  //   // console.log('data');
  //   // console.log(data);
  //     store.push(data);
  //     return data;
  //   } else {
  //     return payload.results.reduce((acc, result) => {
  //       let { data } = this.normalize(primaryModelClass, result);
  //       acc.data.push(data);
  //       store.push(data);
  //       return acc;
  //     }, { data: [] })
  //   }
  // },

});
