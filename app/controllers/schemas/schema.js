import Ember from 'ember';
import Schema from 'ember-json-schema-document/models/schema';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
  schemaLibrary: storageFor('schemaLibrary'),
  persistedSchema: null,  // Set in setupController
  initialSchema: null,    // Set in setupController
  currentSchema: null,    // Schema bound to jsonEditor
  jsonDocument: null,     // Default json document seed
  showPreview: false,     // Preview view state

  renderProperties() {
    let schema = new Schema(this.get('persistedSchema'));
    let schemaDocument = schema.buildDocument();

    if(this.get('jsonDocument')) {
      schemaDocument.load(this.get('jsonDocument') || {});
    }


    this.setProperties({ schema, schemaDocument });
  },

  actions: {
    save() {
      let p = this.get('persistedSchema')
      debugger;
      this.get('persistedSchema').setProperties(this.get('currentSchema'));
      this.renderProperties();
    },

    preview() {
      this.set('previewJson', this.get('schemaDocument.values'));
      this.set('showPreview', true);
    },

    hidePreview() {
      this.set('previewJson', {});
      this.set('showPreview', false);
    }

  }
});
