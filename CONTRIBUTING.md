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
  /**
   * Inline styles applied
   * to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional class names applied
   * to the root element
   */
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
 * @see {@link link_documentation}
 *
 * @example
 * <Component />
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ComponentOwnProps
 *
 * @typedef {PrimeProps & ComponentOwnProps} ComponentProps
 * @param {ComponentProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Lastname Firstname [github_username] <john_doe@gmail.com>
 * @since 1.0.0
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

## Component Registration

To include a component in the package build, it must be exported from the components entry point.

Add the component export to:

```
src/components/index.js;
```

Example:

```js
export { default as CustomComponent } from "./CustomComponent";
```

Components that are not exported from `src/components/index.js` will not be available through the public library API and cannot be imported by consumers of the library.
