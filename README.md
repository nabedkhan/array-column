# array-column

> array column returns the values from a single object property from an array of objects

## Install

### Install with [npm](npmjs.org):

```bash
npm i array-column
```

## Usage

```js
const arrayColumn = require("array-column");

const persons = [
  { name: "Nabed", age: 25 },
  { name: "Shuvo", age: 24 },
  { name: "Akib", age: 23 },
];

arrayColumn(persons, "name"); // => [ 'Nabed', 'Shuvo', 'Akib' ]
```

## Author

**Nabed Khan**

- [github/nabedkhan](https://github.com/nabedkhan)

## License

Copyright (c) 2022
Released under the MIT license
