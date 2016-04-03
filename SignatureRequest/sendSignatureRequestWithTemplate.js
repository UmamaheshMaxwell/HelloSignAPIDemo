var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

var options = {
    test_mode : 1,
    template_id : '2a368dcf584d03a05e30fd1b5eae42e365e048a6',
    subject : 'Signature Request ',
    message : 'Glad we could come to an agreement.',
  	signers : [
     {
       email_address : 'maheshmeka16@gmail.com',
       name : 'Umamaheswararao Meka',
       role : 'EE'
     },
    {
       email_address : 'umamahesh_16@yahoo.co.in',
       name : 'Umamaheswararao Meka',
       role : 'HR'
     }
   ],   
   custom_fields :{
       
    }
};

hellosign.signatureRequest.sendWithTemplate(options)
    .then(function(response){
        //parse response
        console.log(response.signature_request.custom_fields);
    })
    .catch(function(err){
        //catch error
        console.log(err);
    });