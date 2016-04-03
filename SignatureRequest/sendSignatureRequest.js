var config = require('../config/dev.js')
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
    files : ['../Forms/Texttags_example.pdf'],
    
   // //1be21f_14
   // custom_fields :{
   //      //"1be21f_14" : '$20,000'
   //  },
   //  use_text_tags : 1
    
};

hellosign.signatureRequest.send(options)
    .then(function(response){
        //parse response
        console.log(response.signature_request);
    })
    .catch(function(err){
        //catch error
         console.log(err);
    });