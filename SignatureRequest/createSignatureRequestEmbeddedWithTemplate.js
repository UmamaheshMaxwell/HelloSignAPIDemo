var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

var options = {
    test_mode : 1,
    clientId : config.HELLOSIGN_CLIENTID,
    template_id : '2a368dcf584d03a05e30fd1b5eae42e365e048a6',
    subject : 'Purchase Order',
    message : 'Glad we could come to an agreement.',
    signers : [
        {
            email_address : 'maheshmeka16@gmail.com',
            name : 'Umamaheswaarao Meka',
            role : 'EE'
        }
    ],   
    custom_fields : {
        null : '$20,000'
    }
};

hellosign.signatureRequest.createEmbeddedWithTemplate(options)
    .then(function(response){
        //parse response
        console.log(response.signature_request);
    })
    .catch(function(err){
        //catch error
         console.log(err);
    });