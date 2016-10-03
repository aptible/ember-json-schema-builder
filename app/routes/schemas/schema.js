import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let schemas = this.modelFor('schemas');
    return schemas.findBy('id', params.schema_id);
  },

  setupController(controller, model) {
    controller.set('initialSchema', model.get('schema'));
    controller.set('currentSchema', model.get('schema'));
    controller.set('model', model);
    controller.renderProperties();
  }
});
