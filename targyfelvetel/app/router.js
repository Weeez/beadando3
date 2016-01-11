import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {path: '/login'});
  this.route('/', {path: '/index'});
  this.route('registration', {path: '/registration'});
  this.route('about', {path: '/about'});
  this.route('subjects', function() {
    this.route('list', {path: '/list'});
    this.route('new', {path: '/new'});
    this.route('update', {path: '/update/:id'});
  });
});

export default Router;
