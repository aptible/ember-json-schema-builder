import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('schemas', {}, function() {
    this.route('schema', { path: ':schema_id'});
  });
  this.route("export");
  this.route("import");
});

export default Router;
