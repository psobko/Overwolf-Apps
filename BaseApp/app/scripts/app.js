define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(){
    console.log('init');
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});