import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    let schemas = this.modelFor('schemas');

    if(schemas.get('length') > 0) {
      this.transitionTo('schemas.schema', schemas.get('firstObject'));
    }
  }
});
