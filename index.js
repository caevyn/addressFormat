'use strict';
var xhr = require('xhr');

function addressFormat(addressId, container, options) {
    var el = container;
    if(el === undefined || el === null) {
        el = document;
    }
    if (options === undefined || el === null) {
        options = { };
    }
    options.url = options.url || '../address/';
        
    xhr({
        url: options.url + addressId,
        headers: {
            'Accept': 'application/json'
        }
    },
    function onSuccess(req) {
        var result = JSON.parse(req.responseText);
        
        var address = el.querySelector("[data-qas='address']");
        if (address !== null) {
            address.value = result.streetAddress;
        }

        var locality = el.querySelector("[data-qas='locality']");
        if (locality !== null) {
            locality.value = result.locality;
        }
        
        var country = el.querySelector("[data-qas='country']");
        if (country !== null) {
            country.value = result.country;
        }
        
        var postcode = el.querySelector("[data-qas='postcode']");;
        if (postcode !== null) {
            postcode.value = result.postcode;
        }
        
        var state = el.querySelector("[data-qas='state']");;
        if (state !== null) {
            state.value = result.state;
        }
    },
    function onError(err) {
        console.log('There was an error getting the address details: ' + err.message);
    });
}

module.exports = addressFormat;