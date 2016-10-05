import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/route';

export default Ember.Route.extend(KeyboardShortcuts, {
  model(params) {
    let schemas = this.modelFor('schemas');
    return schemas.findBy('id', params.schema_id);
  },

  setupController(controller, model) {
    controller.set('initialSchema', model.get('schema'));
    controller.set('currentSchema', model.get('schema'));
    controller.set('model', model);
    controller.renderProperties();
  },

  actions: {
    save() {
      this.controller.save();
    }
  },

  keyboardShortcuts: {
    'ctrl+s' : { action: 'save' }
  }
});
