var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

hellosign.signatureRequest.get("5da6373e7ac93935ecc3b239758d5ff6a4b45844")
    .then(function(response){
        //parse response
        console.log(response);
    })
    .catch(function(err){
        //catch error
         console.log(err);
    });