import Ember from 'ember';

function readFile(file) {
  const reader = new FileReader();

  return new Ember.RSVP.Promise((resolve) => {
    reader.onload = function(event) {
      resolve({
        file: file.name,
        type: file.type,
        data: event.target.result,
        size: file.size
      });
    };

    reader.readAsText(file);
  });
}

export default Ember.Controller.extend({
  actions: {
    importData(event) {
      readFile(event.target.files[0])
        .then((file) => {
          let schemaData = JSON.parse(file.data);

          this.store.createRecord('schema', { schema: schemaData }).save().then((schema) => {
            this.transitionTo('schemas.schema', schema);
          })
        });
    }
  }
});
