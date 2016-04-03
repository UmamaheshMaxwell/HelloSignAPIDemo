var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

hellosign.account.create({email_address : 'localv5@maxwellhealth.com'})
    .then(function(response){
        //parse response
        console.log(response)
    })
    .catch(function(err){
        //catch error
        console.log(err);
    });