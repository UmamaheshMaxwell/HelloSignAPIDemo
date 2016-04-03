var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});


hellosign.template.get('1d1e4223d33d9a4658be4e2304d4085ceec3ec37')
    .then(function(response){
        //parse response
        console.log('\n Template Details \n')
        console.log(response.template);
    })
    .catch(function(err){
        //catch error
        console.log(err);
    });