import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['offset', 'limit'],
  offset: null,
  limit: null
});