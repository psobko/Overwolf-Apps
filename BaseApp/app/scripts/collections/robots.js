define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/robot'
], function(_, Backbone, RobotModel){
  var RobotCollection = Backbone.Collection.extend({
    model: RobotModel
  });
  // You don't usually return a collection instantiated
  return RobotCollection;
});