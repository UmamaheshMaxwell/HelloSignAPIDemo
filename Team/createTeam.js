var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

// You must upgrade to create a team
hellosign.team.get()
    .then(function(response){
        //parse response
        console.log(response);
    })
    .catch(function(err){
        //catch error
         console.log(err);
    });