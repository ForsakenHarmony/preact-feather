# Preact Feather Icons

[![npm](https://img.shields.io/npm/v/preact-feather.svg)](https://www.npmjs.com/package/preact-feather)

## Simply beautiful SVG icons as Preact components.

Designed by [colebemis](https://github.com/colebemis/) on a 24x24 grid with an emphasis on functionality, consistency and simplicity.

### Installation

    npm install preact-feather --save

### Usage

```javascript
import { Camera } from 'preact-feather';

class MyClass extends Component {
  render() {
    return <Camera />
  }
}
````

If you can't use ES6 imports, it's possible to include icons from the compiled folder `./dist`.

```js
var Camera = require('preact-feather/dist/icons/camera');

var MyComponent = () => {
  return (
    <Camera />
  );
};
```

You can also include the whole icon pack:

```javascript
import * as Icon from 'preact-feather';

class MyClass extends Component {
  render() {
    return <Icon.Camera />
  }
}
```

Icons can be configured with inline props:

```js
<Icon.AlertCircle color="red" size={48} />
```
