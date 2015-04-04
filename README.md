# then-del

Promise-based files/folders deleting.

## Installation

```sh
npm i then-del -S
```

## Usage

```js
var del = require('then-del');

del([
  'must/',
  'be/**/*.js',
  'deleted.html'
])
.then(function () {
  // Files/folders were removed.
});
```

## License

MIT licensed.
