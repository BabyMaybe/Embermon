import DS from 'ember-data';

export default DS.RESTSerializer.extend({


  normalize(modelClass, resourceHash) {
    console.log('resourceHash')
    console.log(resourceHash);
    const data = {
      id: resourceHash.id,
      type : modelClass.modelName,
      attributes: {
        accuracy: resourceHash.accuracy,
        ailment: resourceHash.meta.ailment.name,
        category: resourceHash.meta.category.name,
        critRate: resourceHash.meta.crit_rate,
        damageClass: resourceHash.damage_class.name,
        drain: resourceHash.meta.drain,
        effectChance: resourceHash.effect_chance,
        effectChanges : resourceHash.effect_changes,
        effectEntry : resourceHash.effect_entries[0].effect,
        flavorText : resourceHash.flavor_text_entries.filter( m => m.language.name === 'en' ).filter( m => ['red-blue','yellow','firered-leafgreen'].includes(m.version_group.name)).find(m => m.flavor_text).flavor_text.replace(/\n|\r/g, ' ').trim(),
        flinchChance: resourceHash.meta.flinch_chance,
        generation : resourceHash.generation.name,
        healing: resourceHash.meta.healing,
        maxHits: resourceHash.meta.max_hits,
        maxTurns: resourceHash.meta.max_turns,
        minHits: resourceHash.meta.min_hits,
        minTurns: resourceHash.meta.min_turns,
        moveType : resourceHash.type.name,
        name : resourceHash.name,
        power : resourceHash.power,
        pp : resourceHash.pp,
        priority : resourceHash.priority,
        statChanges : resourceHash.stat_changes,
        statChance: resourceHash.meta.stat_chance,
        target : resourceHash.target.name,
      },
    };
    console.log('data');
    console.log(data);
    return { data: data };
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (requestType === 'findRecord') {
      return this.normalize(primaryModelClass, payload);
    } else {
      return payload.results.reduce((acc, result) => {
        let { data } = this.normalize(primaryModelClass, result);
        acc.data.push(data);
        return acc;
      }, { data: [] })
    }
  },

});
