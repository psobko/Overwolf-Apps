define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var RobotModel = Backbone.Model.extend({
    defaults: {
      name: "Potter"
    }
  });
  // Return the model for the module
  return RobotModel;
});