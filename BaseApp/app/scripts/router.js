define([
  'jquery',
  'underscore',
  'backbone',
  'views/robot/info',
], function($, _, Backbone, RobotInfoView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'info': 'showRobotInfo',

      // Default
      '*actions': 'showRobotInfo'
    },
    showRobotInfo : function(){
      var robotInfoView = new RobotInfoView();
      robotInfoView.render();
    },
    info : function(){console.log('aaaxx2xx')}
  });

  var initialize = function(){
    console.log('initialized');
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});