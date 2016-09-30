import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  model(params) {
    let schemas = this.modelFor('schemas');
    return schemas.findBy('id', params.schema_id);
  },

  setupController(controller, model) {
    controller.set('initialSchema', model);
    controller.set('persistedSchema', model);
    controller.renderProperties();
  }
});
