'use strict';
var xhr = require('xhr');

function addressFormat(addressId, container, options) {
    var el = container;
    if(el === undefined) {
        el = document;
    }
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
        
        var address = el.querySelector("input[data-qas='address']");
        if (address !== undefined) {
            address.value = result.streetAddress;
        }

        var locality = el.querySelector("input[data-qas='locality']");
        if (locality !== undefined) {
            locality.value = result.locality;
        }
        
        var country = el.querySelector("input[data-qas='country']");
        if (country !== undefined) {
            country.value = result.country;
        }
        
        var postcode = el.querySelector("input[data-qas='postcode']");;
        if (postcode !== undefined) {
            postcode.value = result.postcode;
        }
        
        var state = el.querySelector("input[data-qas='state']");;
        if (state !== undefined) {
            state.value = result.state;
        }
    },
    function onError(err) {
        console.log('There was an error getting the address details: ' + err.message);
    });
}

module.exports = addressFormat;