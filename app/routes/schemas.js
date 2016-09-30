import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  schemaLibrary: storageFor('schemaLibrary'),

  model() {
    return this.get('schemaLibrary');
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

      this.get('schemaLibrary').addObject(schema);

      this.controller.set('newSchemaHandle', '');
      this.controller.set('newSchemaTitle', '');
    }
  }
});
