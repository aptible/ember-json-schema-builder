import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('schema');
  },

  actions: {
    createSchema(handle, title) {
      let schema = {
        "$schema":"http://json-schema.org/draft-04/schema#",
        id: `${handle}/0.0.1`,
        type: "object",
        title: title,
        properties: {
          security_controls: {
            type: 'object',
            properties: {}
          }
        }
      };

      this.store.createRecord('schema', { schema }).save().then((schema) => {
        this.transitionTo('schemas.schema', schema);
      })
      this.controller.set('newSchemaHandle', '');
      this.controller.set('newSchemaTitle', '');
    }
  }
});
