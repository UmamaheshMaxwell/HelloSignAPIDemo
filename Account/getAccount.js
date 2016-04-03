var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

//Get Account settings
//Returns the properties and settings of your Account
hellosign.account.get()
    .then(function(response){
        //parse response
        console.log(response);
    })
    .catch(function(err){
        //catch error
         console.log(err);
    });