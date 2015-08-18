define([
  'jquery',
  'underscore',
  'backbone',
  'models/robot',
  'text!/templates/robot/info.html'
], function($, _, Backbone, RobotModel, robotInfoViewTemplate){
  var RobotInfoView = Backbone.View.extend({
    el: $('#container'),
    // initialize: function(){
    //   // this.collection = new ProjectsCollection();
    //   this.collection.add({ name: "Ginger Kid"});
    //   // Compile the template using Underscores micro-templating
    //   var compiledTemplate = _.template( projectsListTemplate, { projects: this.collection.models } );
    //   this.$el.html(compiledTemplate);
    // },
    render: function(){
    	
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( robotInfoViewTemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    }
  });
  // Our module now returns our view
  return RobotInfoView;
});