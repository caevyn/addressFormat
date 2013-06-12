#addressFormat
Component that calls an address service with an addressId to get back a formatted address.
It will then populate fields based on data attributes.

Example markup

```
<label>
    <span>Address</span>
    <input id="address" data-qas="address" type="text" />
</label>
```
          
The data-qas attribute supports the following values:
address, locality, state, postcode, country.

Example usage:

```javascript
var addressFormat = require('addressFormat');
addressFormat(addressId, document.getElementById('myContainer'), { url: '../address/' });
```

addressId is obtained from the search api.

