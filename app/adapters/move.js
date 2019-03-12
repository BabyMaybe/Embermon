import ApplicationAdapter from "./application";

export default ApplicationAdapter.extend({
  // urlForFindRecord(id, modelName, snapshot) {
  //   const url = this._super(...arguments);
  //   console.log("url:", url);
  //   return url;
  // },
  urlForQuery(query, modelName) {
    // console.log("query time!");
    // console.log("query", query);
    const url = this._super(...arguments);
    // console.log("url:", url);
    let qurl = Object.keys(query).reduce((acc, cur) => {
      if (query[cur]) {
        return `${acc}${cur}=${query[cur]}&`;
      } else {
        return acc;
      }
    }, url + "?");
    // console.log("qrl", qurl);
    return qurl;
  },
  // buildURL(modelName, id, snapshot, requestType, query) {
  //   console.log("building url");
  //   console.log("requestType", requestType);
  //   console.log("query", query);
  //   let url = this._super(...arguments);
  //   console.log("url:", url);
  //   return url;
  // },
  async query(store, type, query) {
    // console.log("finding all moves!");
    let endpoints = await this._super(...arguments);
    return await unpackRequests(endpoints);
  },
  async findAll(store, type, sinceToken, snapshotRecordArray) {
    // console.log("finding all moves!");
    let endpoints = await this._super(...arguments);
    return await unpackRequests(endpoints);
  }
});
async function unpackRequests(endpoints) {
  let requests = endpoints.results.map(m => fetch(m.url));
  let moves = [];
  await Promise.all(requests)
    .then(responses => Promise.all(responses.map(data => data.json())))
    .then(dataSet => {
      dataSet.map(data => {
        moves.push(data);
      });
    });
  return moves;
}
