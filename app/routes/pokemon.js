import Route from "@ember/routing/route";

export default Route.extend({
  queryParams: {
    offset: null,
    limit: null
  },
  model(params) {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
    const queryOffset = params['offset'] ? `?offset=${params['offset']}` : '';
    const limitOffset = params['limit'] ? `&limit=${params['limit']}` : '';

    const request = baseURL + queryOffset + limitOffset;

    return fetch(request).then(data => {
      return data.json();
    }).then(json => {
      return { pokemon: json.results, count: json.count, next: json.next, previous: json.previous };
    })

    // return this.store.findRecord("pokemon", 1);

  }
});
