var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

var options = {
    test_mode : 1,
    clientId : config.HELLOSIGN_CLIENTID,
    title : 'Maxwell Healthcare',
    subject : 'Maxwell healthcare Business',
    message : 'Please sign this form and then we can discuss more. Let me know if you have any questions.',
    signers : [
        {
            email_address : 'maheshmeka16@gmail.com',
            name : 'Jack',
            order : 0
        },
        {
            email_address : 'umamahesh_16@yahoo.co.in',
            name : 'Jill',
            order : 1
        }
    ],
    cc_email_addresses : ['maheshmeka16@gmail.com', 'umamahesh_16@yahoo.co.in'],
    files : ['../Forms/MasterForm.pdf', '../Forms/Texttags_example.pdf']
};

// Get Embedded Signature Url
hellosign.signatureRequest.createEmbedded(options)
    .then(function(response){
        var signatureId = response.signature_request.signatures[0].signature_id;
        console.log(response);
        return hellosign.embedded.getSignUrl(signatureId);
    })
    .then(function(response){
        console.log('Embedded_Sign_Url = ' + response.embedded.sign_url);
    })
    .catch(function(err){
        //catch error
    });