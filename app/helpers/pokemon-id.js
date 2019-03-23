import { helper } from '@ember/component/helper';

export function pokemonId(params/*, hash*/) {
  return params[0].url.split('/')[6];
}

export default helper(pokemonId);
