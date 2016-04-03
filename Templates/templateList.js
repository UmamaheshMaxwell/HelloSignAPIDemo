var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

// Get the list of templates
hellosign.template.list()
    .then(function(response){
        //parse response
        console.log("\n Gets the list of templates !!\n");

        for(var i= 0; i<response.templates.length; i++){
        	console.log(" Template Id_"+i + " is " + response.templates[i].template_id)
        }
    })
    .catch(function(err){
        //catch error
        console.log(err);
    });