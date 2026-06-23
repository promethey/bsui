# Component Development Guide

All components in the library must follow the same architecture and conventions.

## Rules

- Define a `BASE_CLASS_NAME` constant.
- Support `className` and `style` props.
- Use `Prime` as the root component.
- Forward all non-component-specific props to `Prime` via `...rest`.
- Export components through `index.js`.
- Validate public props with `PropTypes`.
- Document public API using JSDoc.
- Use `classnames` (`cn`) for class generation.
- Prefer Bootstrap classes for styling.
- Do not depend on Bootstrap JavaScript.
- Component behavior must be implemented in React.
- Add Vitest tests for every public component.
- Add Storybook stories for every public component.

## Base Template

```jsx
import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "";

const propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Component description.
 *
 * @component
 *
 * @typedef {object} ComponentOwnProps
 *
 * @typedef {import("../Prime/Prime").PrimeProps & ComponentOwnProps} ComponentProps
 *
 * @param {ComponentProps} props
 * @return {React.JSX.Element}
 */
function Component(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export default Component;
```

## Project Structure

Source code, tests, and stories are intentionally separated.

Files located outside `src` are not included in the package build.

```text
src/
└── components/
    └── CustomComponent/
        ├── CustomComponent.jsx
        └── index.js

tests/
└── components/
    └── CustomComponent.test.jsx

stories/
└── CustomComponent.stories.jsx
```
