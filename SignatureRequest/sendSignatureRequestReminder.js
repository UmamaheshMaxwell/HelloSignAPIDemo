var config = require('../config/dev.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

var signatureRequestId = '0ce97fd8020e1cc9e6a6f080a3cb5992975b5572';

hellosign.signatureRequest.remind(signatureRequestId,
      {email_address : 'maheshmeka16@gmail.com'})
          .then(function(response){
              //parse response
              console.log(response);
          })
          .catch(function(err){
              //catch error
               console.log(err);
          });