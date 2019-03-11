import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalize(modelClass, resourceHash) {
    // console.log('resourceHash')
    // console.log(resourceHash);

    resourceHash.moves = resourceHash.moves.map( m => m.move.url.split("/")[6]);

    // console.log(resourceHash.moves);

    let preNorm =  this._super(modelClass, resourceHash);
    // console.log('preNorm');
    // console.log(preNorm);

    return preNorm;
  }
});
