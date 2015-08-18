require.config({
    // baseUrl : 'scripts/',
    paths : {
        jquery : "vendor/jquery/dist/jquery",
        underscore : "vendor/underscore-amd/underscore",
        backbone : "vendor/backbone-amd/backbone",
        text : 'vendor/requirejs-text/text'
    }
});

require(['app'], function(App) {
	console.log('asd');
     App.initialize();
     // App.navigate("info", {trigger: true});

});
