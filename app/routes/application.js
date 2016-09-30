import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  persistedSchema: storageFor('schema'),
  setupController(controller) {
    let storage = this.get('persistedSchema');
    let restoredSchema = storage.get('schema');

    controller.set('initialSchema', restoredSchema);
    controller.renderProperties();
  }
});
