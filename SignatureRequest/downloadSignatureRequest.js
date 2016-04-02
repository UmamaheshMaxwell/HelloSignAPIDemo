var config = require('../config/config.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

hellosign.signatureRequest.download('5da6373e7ac93935ecc3b239758d5ff6a4b45844', {file_type: 'zip'}, function(err, response){
    var fs = require('fs');
    var file = fs.createWriteStream(__dirname + "/zipfiles/" + "allSignedPDFs");
    console.log(file.path);
    response.pipe(file);
    file.on('finish', function(response) {
        file.close();        
    });
});