import Ember from 'ember';
import { readFile } from 'schema-builder/utils/read-file';

export default Ember.Controller.extend({
  actions: {
    exportAllSchemas() {
      this.get('model').forEach(schema => schema.export());
    },

    importData(event) {
      let { files } = event.target;
      let promises = [];
      // event.target.files is a FileList, not an array :(

      for(let i = 0; i < files.length; i++) {
        let file = files[i];
        readFile(file).then((file) => {
          let schemaData = JSON.parse(file.data);
          let schema = this.store.createRecord('schema', { schema: schemaData });

          promises.push(schema.save());
        });
      }

      Ember.RSVP.all(promises).then(() => {
        this.get('flashMessages').success(`${promises.length} schemas imported!`);
      });
    }
  }
});
