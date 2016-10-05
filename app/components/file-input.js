import Ember from 'ember';

const {
  Component,
  run: {
    bind
  }
} = Ember;

export default Component.extend({
  tagName: 'input',
  attributeBindings: ['type', 'multiple'],
  type: 'file',
  multiple: true,

  didInsertElement() {
    this.$().on('change', bind(this, 'filesSelected'));
  },

  filesSelected(event) {
    this.sendAction('importData', event);
  }
});