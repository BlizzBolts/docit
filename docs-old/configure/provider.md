
# Provider

If you need a `Provider` to wrap the document up. You can provider a `providePath` via config file.


## Example

```js
// docit.config.js
import { resolve } from 'path'

export default {
  providerPath: resolve(__dirname, '../../Provder/index.jsx')
}
```


```jsx
// Provider/index.jsx

import React from "react";
import { ThemeProvider } from "../src/theme/Provider";

const Provider = (props) => {
  const { children } = props;
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
```