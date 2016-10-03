import Ember from 'ember';
import Schema from 'ember-json-schema-document/models/schema';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
  schemaLibrary: storageFor('schemaLibrary'),
  initialSchema: null,    // Set in setupController, used to seed jsonEditor
  currentSchema: null,    // Schema bound to jsonEditor
  jsonDocument: { security_controls: {} },     // Default json document seed
  showPreview: false,     // Preview view state

  renderProperties() {
    let schema = new Schema(this.get('model.schema'));
    let schemaDocument = schema.buildDocument();

    // if(this.get('jsonDocument')) {
    //   schemaDocument.load(this.get('jsonDocument') || {});
    // }

    this.setProperties({ schema, schemaDocument });
  },

  save() {
    this.get('model').set('schema', this.get('currentSchema'));
    this.renderProperties();
    return this.get('model').save();
  },

  actions: {
    save() {
      this.save();
    },

    exportSchema() {
      this.save().then((model) => {
        let filename = model.get('fileName');
        let content = JSON.stringify(model.get('schema'));
        window.saveAs(new Blob([content],
                               {type: 'application/json;charset=utf-8'}), filename);
      })
    },

    destroy() {
      this.get('model').destroyRecord().then(() => {
        this.transitionTo('schemas');
      });
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
