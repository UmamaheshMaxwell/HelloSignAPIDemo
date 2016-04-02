var config = require('../config/config.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

var options = {
    test_mode : 1,
    title : 'Signature Request From Maxwell',
    subject : 'Maxwell Form Signature',
    message : 'Please sign this maxwell form and then we can discuss more. Let me know if you have any questions.',
    signers : [
        {
            email_address : 'maheshmeka16@gmail.com',
            name : 'Umamaheswararao Meka'
        }
    ],
    files : ['../Forms/MasterForm.pdf']
};

hellosign.signatureRequest.send(options)
    .then(function(response){
        //parse response
        console.log(response);
    })
    .catch(function(err){
        //catch error
         console.log(err);
    });