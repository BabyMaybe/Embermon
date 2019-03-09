import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | moves', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:moves');
    assert.ok(route);
  });
});
