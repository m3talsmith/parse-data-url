# Parse data URL string

[![Build Status](https://travis-ci.org/killmenot/parse-data-url.svg?branch=master)](https://travis-ci.org/killmenot/parse-data-url)
[![Dependency Status](https://gemnasium.com/badges/github.com/killmenot/parse-data-url.svg)](https://gemnasium.com/github.com/killmenot/parse-data-url)
[![npm version](https://badge.fury.io/js/parse-data-url.svg)](https://badge.fury.io/js/parse-data-url)

## Install

```
npm install parse-data-url

```


## Example

```javascript
'use strict';

var parseDataUrl = require('parse-data-url');

// Invalid
var parsed = parseDataUrl('data:invalid');
// false

// Valid
var parsed = parseDataUrl('data:image/svg+xml;charset=UTF-8,some-data'); 
// {
//    mediaType: 'image/svg+xml;charset=utf-8',
//    charset: 'utf-8',
//    base64: false,
//    data: 'some-data'
// }

```


## Licence

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


