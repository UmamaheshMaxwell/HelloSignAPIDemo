var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

hellosign.account.update({callback_url : 'https://www.example.com/callback'})
    .then(function(response){
        //parse response
         console.log(response);
    })
    .catch(function(err){
        //catch error
         console.log(err);
    });