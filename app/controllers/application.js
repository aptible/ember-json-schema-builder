import Ember from 'ember';
import Schema from 'ember-json-schema-document/models/schema';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
  showPreview: false,
  persistedSchema: storageFor('schema'),
  currentSchema: null,
  initialSchema: null,
  jsonDocument: {},

  renderProperties() {
    let schema = new Schema(this.get('persistedSchema.schema'));
    let schemaDocument = schema.buildDocument();

    schemaDocument.load(this.get('jsonDocument') || {});

    this.setProperties({ schema, schemaDocument });
  },

  actions: {
    save() {
      let storage = this.get('persistedSchema');
      storage.set('schema', this.get('currentSchema'));

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
