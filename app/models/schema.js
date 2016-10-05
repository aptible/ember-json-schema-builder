import DS from 'ember-data';
const FILE_TYPE = 'application/json;charset=utf-8';

export default DS.Model.extend({
  schema: DS.attr(),
  fileName: Ember.computed('schema.id', function() {
    let segments = this.get('schema.id').split('/').reverse();
    return `${segments[1]}_${segments[0]}.json`;
  }),

  export() {
    let filename = this.get('fileName');
    let content = JSON.stringify(this.get('schema'));

    window.saveAs(new Blob([content], { type: FILE_TYPE }), filename);
  }
});