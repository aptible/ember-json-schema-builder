import DS from 'ember-data';

export default DS.Model.extend({
  schema: DS.attr(),
  fileName: Ember.computed('schema.id', function() {
    let segments = this.get('schema.id').split('/').reverse();
    return `${segments[1]}_${segments[0]}.json`;
  }),
});