# API Generation

Docit provides a simple syntax to handle auto API parsing.

> Currently only support React Typescript API Tables. Functions and Interface support might not work as you expected.

### Syntax

```md
[Props](../components/Button.tsx)
```

Inside Docit, it will check the text name to be `Props` and resolve your component path using [resolve](https://www.npmjs.com/package/resolve)

For Example

```jsx
import React from "react";
import styled from "styled-components";

enum Length {
  /**
   * Large
   */
  Large = 5,
  /**
   * 中
   */
  Medium = 3,
  /**
   * 小
   */
  Small = 1,
}

interface ButtonProps extends HTMLButtonElement {
  /**
   * 一种颜色
   * @default red
   */
  color?: string;
  length: Length;
}

export const StyledButton = styled.button`
  z-index: 9999;
`;

const Button: React.FC<ButtonProps> = () => {
  return <StyledButton>1</StyledButton>;
};

Button.defaultProps = {
  color: "green",
  length: Length.Large,
};

export { Button };
```

The API table will look like:

[Props](../components/ApiTest.tsx)

You will notice `StyledButton` get exported, but the api table does not appear, thats because the type parser got nothing from parsing it.

---

since Docit using `resolve`, you can actually parsing some third party types like

```md
[Props](antd-mobile/es/index.d.ts)
```
