var config = require('../config/config.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

hellosign.signatureRequest.list({page: 1})
    .then(function(response){
        //parse response 
        var signatures = [];

        for(var i=0; i <response.signature_requests.length; i++){
        	signatures.push(response.signature_requests[0].signature_request_id);
        }
        return signatures.unique();
    })
    .then(function(signatures){
    	 for(var i=0; i <signatures.length; i++){
        	console.log("Signature_Request_Id" + i + "  is :" +signatures[i] );
       	}   	
    })
    .catch(function(err){
        //catch error
         console.log(err);
    });

Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}