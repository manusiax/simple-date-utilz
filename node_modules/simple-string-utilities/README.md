# Simple String Utilities

Simple String Utilities is an npm package that provides utility functions for string manipulation. This package offers several functions such as lowercase, uppercase, capitalize, and countCharacters. Additionally, it includes a feature to format dates using the date-fns library.

## Installation

You can install this package using npm:

```bash
npm install simple-string-utilities
```
## Usage

```javascript
const { lowercase, uppercase, capitalize, formatDate, countCharacters } = require('simple-string-utilities');

let text = 'hello, world!';
let date = new Date();

console.log(lowercase(text)); // Output: hello, world!
console.log(uppercase(text)); // Output: HELLO, WORLD!
console.log(capitalize(text)); // Output: Hello, world!
console.log(formatDate(date, 'dd/MM/yyyy')); // Output: 09/03/2024
console.log(countCharacters(text)); // Output: 13
```
## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your proposed changes.