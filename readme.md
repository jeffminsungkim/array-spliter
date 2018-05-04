<p align="center">
  <img align="center" src="https://i.imgur.com/eQL4hmE.png" title="array-spliter" alt="logo"/>
</p>

<p align="center">
  <a href="https://travis-ci.org/jeffminsungkim/array-spliter">
  <img src="https://travis-ci.org/jeffminsungkim/array-spliter.svg?branch=master" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/array-spliter">
  <img src="https://img.shields.io/node/v/array-spliter.svg?label=works%20on%20node" alt="Node Version"></a>
  <a href="https://github.com/facebook/jest">
  <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Jest"></a>
  <a href="https://github.com/prettier/prettier">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Prettier"></a>
  <a href="https://www.npmjs.com/package/array-spliter">
  <img src="https://img.shields.io/npm/dt/array-spliter.svg" alt="Downloads"></a>
  <a href="https://github.com/jeffminsungkim/hologo/blob/master/license">
  <img src="https://img.shields.io/github/license/jeffminsungkim/hologo.svg" alt="License"></a>
</p>

> Easy to get an array of strings [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) at each point where the separator occurs in the given string

## Install

```
$ npm install array-spliter
```

## Usage

```js
const arraySpliter = require('array-spliter');

arraySpliter('abcd', '');
//=> [a, b, c, d]

arraySpliter('a,b,c,d', ',');
//=> [a, b, c, d]

arraySpliter('a@b@c@d', '@');
//=> [a, b, c, d]

arraySpliter('a:b,c#d', ['#', ',', ':']);
//=> [a, b, c, d]

arraySpliter('a,b|c#d', ['|', ',', '#']);
//=> [a, b, c, d]
```

## License

MIT © [JeffMinsungKim](https://jeffminsungkim.com)
