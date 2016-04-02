var config = require('../config/config.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

// A paid API plan is required to access this endpoint

hellosign.account.verify({email_address : 'maheshmeka16@gmail.com'})
    .then(function(response){
        //parse response
         console.log(response);
    })
    .catch(function(err){
        //catch error
         console.log(err);
    });