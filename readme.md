# @bemoje/arr-for-each-reverse

Iterate an array in reverse.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-for-each-reverse" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-for-each-reverse" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-for-each-reverse" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-for-each-reverse.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-for-each-reverse" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-for-each-reverse.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-for-each-reverse" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-for-each-reverse" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-for-each-reverse/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-for-each-reverse" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-for-each-reverse
npm install --save @bemoje/arr-for-each-reverse
npm install --save-dev @bemoje/arr-for-each-reverse
```

## Usage

```javascript
import arrForEachReverse from '@bemoje/arr-for-each-reverse'

const arr = ['a', 'b', 'c']

arrForEachReverse(arr, (element, index, array) => {
	console.log({ element, index, array })
})
//=> { element: 'c', index: 2, array: [ 'a', 'b', 'c' ] }
//=> { element: 'b', index: 1, array: [ 'a', 'b', 'c' ] }
//=> { element: 'a', index: 0, array: [ 'a', 'b', 'c' ] }

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrForEachReverse

Iterate an array in reverse.

##### Parameters

-   `arr` **[Array][5]** The array

-   `callback` **[callback][6]** callback(arr[i], i, arr)

##### Returns
**void** 

## callback

Type: [Function][7]

##### Parameters

-   `element` **any** The current element

-   `index` **[number][8]** The current element's index in the array

-   `array` **[Array][5]** The array

[1]: #arrforeachreverse

[2]: #parameters

[3]: #callback

[4]: #parameters-1

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[6]: #callback

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number