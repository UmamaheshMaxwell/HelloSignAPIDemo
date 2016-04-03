var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

hellosign.template.addUser('2a368dcf584d03a05e30fd1b5eae42e365e048a6',
    {email_address : 'maheshmeka16@gmail.com'})
        .then(function(response){
            //parse response
            console.log(response);
        })
        .catch(function(err){
            //catch error
            console.log(err);
        });