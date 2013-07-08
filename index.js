'use strict';
var xhr = require('xhr');

function addressFormat(addressId, container, options) {
    var el = container;
    if (el == null) {
        el = document;
    }
    if (options == null) {
        options = {};
    }
    options.url = options.url || '../address/';

    function updateField(field, value) {
        var input = el.querySelector("[data-qas='" + field + "']");
        if (input !== null) {
            input.value = value;
        }
    }

    xhr({
        url: options.url + addressId,
        headers: {
            'Accept': 'application/json'
        }
    },
    function onSuccess(req) {
        var result = JSON.parse(req.responseText);

        updateField('line1', result.addressLine1);
        updateField('line2', result.addressLine2);
        updateField('locality', result.locality);
        updateField('country', result.country);
        updateField('postcode', result.postcode);
        updateField('state', result.state);
    },
    function onError(err) {
        console.log('There was an error getting the address details: ' + err.message);
    });
}

module.exports = addressFormat;
