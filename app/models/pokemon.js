import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  moves: DS.hasMany('move', {async: true})
});
