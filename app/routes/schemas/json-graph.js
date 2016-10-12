import Ember from 'ember';
import { buildImportFromSchemas } from 'schema-builder/utils/build-import-json';

export default Ember.Route.extend({
  model() {
    return this.modelFor('schemas');
  },

  setupController(controller, model) {
    let importJSON = buildImportFromSchemas(model);
    controller.set('importJSON', importJSON);
  }
});
