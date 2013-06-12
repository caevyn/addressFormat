'use strict';
var xhr = require('xhr');

function addressFormat(addressId, options) {
    if (options === undefined) {
        options = { };
    }
    options.url = options.url || '../address/';
    options.cssPrefix = options.cssPrefix || 'qas';
    
    xhr({
        url: options.url + addressId,
        headers: {
            'Accept': 'application/json'
        }
    },
    function onSuccess(req) {
        var result = JSON.parse(req.responseText);

        var address = document.getElementsByClassName(options.cssPrefix + '-address')[0];
        if (address !== undefined) {
            address.value = result.streetAddress;
        }

        var locality = document.getElementsByClassName(options.cssPrefix + '-locality')[0];
        if (locality !== undefined) {
            locality.value = result.locality;
        }
        
        var country = document.getElementsByClassName(options.cssPrefix + '-country')[0];
        if (country !== undefined) {
            country.value = result.country;
        }
        
        var postcode = document.getElementsByClassName(options.cssPrefix + '-postcode')[0];
        if (postcode !== undefined) {
            postcode.value = result.postcode;
        }
        
        var state = document.getElementsByClassName(options.cssPrefix + '-state')[0];
        if (state !== undefined) {
            state.value = result.state;
        }
    },
    function onError(err) {
        console.log('There was an error getting the address details: ' + err.message);
    });
}

module.exports = addressFormat;