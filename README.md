# nunjucks-more-relative
![Build Status](https://travis-ci.org/shaochuancs/nunjucks-more-relative.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/shaochuancs/nunjucks-more-relative/badge.svg?branch=master)](https://coveralls.io/github/shaochuancs/nunjucks-more-relative?branch=master)

nunjucks plugin to correct relative path. Normally, when include another template, nunjucks will take the filename parameter as absolute path, unless it starts with "./" or "../". However, this may not be what you expect.
Take the following code as an example:
```
{% include "subfolder/sample.html" %}
```
The above code will try to find sample.html in &lt;project root&gt;/subfolder/sample.html, while it makes more sense to search ./subfolder/sample.html

## Installation
```sh
$ npm install nunjucks-more-relative
```

## Usage
```js
var nunjucks = require('nunjucks');
var moreRelative = require('nunjucks-more-relative');
moreRelative(nunjucks);
```

## License
(The MIT License)

Copyright (c) 2016 Chuan Shao &lt;shaochuancs@gmail.com&gt;