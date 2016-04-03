var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});


var options = {
    test_mode: 1,
    clientId : config.HELLOSIGN_CLIENTID,
    files: ['../Forms/MasterForm.pdf'],
    title: 'Embedded Template Draft',
    subject: 'Embedded Template Draft',
    message: 'Embedded Template Draft Message',
    signer_roles: [
        {
            name: 'EE',
            order: 0
        },{
            name: 'HR',
            order: 1
        }
    ],
    cc_roles: ['maheshmeka16@gmail.com']
};

var results = hellosign.template.createEmbeddedDraft(options)
    .then(function(response){
        //parse response
        console.log(response);
    })
    .catch(function(err){
        //catch error
        console.log(err);
    });