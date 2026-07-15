# Contributing

Thank you for your interest in contributing to BSUI.

This document describes the development workflow, coding standards, and architectural conventions used throughout the project.

Following these guidelines helps keep the library consistent, maintainable, and predictable for both contributors and users.

## Getting Started

### Install dependencies

```bash
npm install
```

### Start Storybook

```bash
npm run storybook
```

### Run tests

```bash
npm test
```

### Build the library

```bash
npm run build
```

## Repository Structure

```
src/
    components/
    helpers/
    hooks/
    utils/

stories/
tests/
```

Only files inside `src/` are published to npm.

Storybook stories and tests are intentionally excluded from the distributed package.

## Architecture

BSUI follows a consistency-first architecture.

Core principles:

- Composition over inheritance.
- Prime is the foundation of every public component.
- Bootstrap CSS only.
- No Bootstrap JavaScript.
- Shared API across the entire library.
- Rich JSDoc documentation.
- Runtime validation using PropTypes.
- Utility-first styling.

## Development Standards

### Commit Convention

BSUI follows the **Conventional Commits** specification to keep the project history consistent and predictable.

#### Format

```text
<type>: <short description>
```

#### Commit Types

| Type       | Description                                   |
| ---------- | --------------------------------------------- |
| `feat`     | Introduces a new feature.                     |
| `fix`      | Fixes a bug.                                  |
| `docs`     | Documentation changes only.                   |
| `test`     | Adds or updates tests.                        |
| `refactor` | Refactors code without changing behavior.     |
| `perf`     | Improves performance.                         |
| `style`    | Code formatting without logic changes.        |
| `build`    | Changes to the build system or dependencies.  |
| `ci`       | Continuous Integration configuration changes. |
| `chore`    | Project maintenance tasks.                    |
| `revert`   | Reverts a previous commit.                    |

#### Examples

```text
feat: add Toast component
fix: prevent Dropdown from closing on internal click
docs: improve README examples
test: add Button accessibility tests
refactor: simplify spacing resolver
perf: optimize Carousel rendering
build: update webpack configuration
ci: add Storybook deployment workflow
```

#### Guidelines

- Use the imperative mood.
- Keep the summary concise.
- Do not end the summary with a period.
- Prefer summaries under 72 characters.
- Describe **what** changed, not **how**.

#### Breaking Changes

Append `!` after the commit type when introducing a breaking API change.

```text
feat!: replace theme prop with tone
```

### Components

Every public component must follow the same architecture.

#### Requirements

- Define a `BASE_CLASS_NAME` constant.
- Use `Prime` as the root component whenever possible.
- Support `className` and `style`.
- Forward unknown props through `...rest`.
- Validate the public API with `PropTypes`.
- Document every public API using JSDoc.
- Generate CSS classes with `classnames`.
- Prefer Bootstrap classes over custom CSS.
- Never depend on Bootstrap JavaScript.
- Implement behavior entirely in React.
- Add Storybook stories.
- Add Vitest tests.

### Component Template

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

### Component Structure

```
src/
└── components/
    └── Component/
        ├── Component.jsx
        └── index.js
```

### Component Registration

Export every public component from

```
src/components/index.js
```

Example

```js
export { default as Button } from "./Button";
```

Components that are not exported from this file are considered private implementation details.

### Hooks

Custom hooks should encapsulate reusable React logic without introducing UI-specific rendering.

#### Guidelines

- Prefix every hook with `use`.
- Keep a single responsibility.
- Avoid component-specific logic whenever possible.
- Prefer composition over large hooks.
- Expose the smallest possible public API.
- Document the hook with JSDoc.
- Keep side effects isolated inside `useEffect`.
- Return stable values whenever possible.

#### Structure

```
src/hooks/
└── useExample.js
```

### Helpers

Helpers are small, pure functions that simplify common operations.

Helpers should not depend on React, browser APIs, or application state.

#### Guidelines

- Keep helpers pure.
- Never mutate function arguments.
- Avoid side effects.
- Prefer descriptive names.
- Keep helpers framework-independent.
- Document every reusable helper with JSDoc.
- Place related helpers in the same module when appropriate.
- Write unit tests for every helper.

#### Examples

```js
capitalize();
classnames();
prefix();
```

#### Structure

```text
src/helpers/
├── capitalize.js
├── classnames.js
├── prefix.js
└── index.js
```

#### Registration

Every reusable helper must be exported from:

```text
src/helpers/index.js
```

Example:

```js
export { capitalize } from "./capitalize";
export { classnames } from "./classnames";
export { prefix } from "./prefix";
```

Always import helpers through the barrel file:

```js
import { capitalize, classnames, prefix } from "helpers";
```

Avoid importing helpers directly from individual files.

---

### Utils

Utilities contain reusable logic that is more complex than a helper.

Unlike helpers, utilities may transform data, resolve Bootstrap classes, or implement reusable algorithms.

#### Guidelines

- Keep utilities reusable.
- Avoid React-specific code.
- Avoid direct DOM manipulation unless explicitly required.
- Keep each utility focused on a single responsibility.
- Prefer predictable input and output.
- Document every reusable utility with JSDoc.
- Write unit tests for every utility.

#### Examples

```js
spacingResolver();
displayResolver();
borderResolver();
offsetResolver();
```

#### Structure

```text
src/utils/
├── spacingResolver.js
├── displayResolver.js
├── borderResolver.js
├── offsetResolver.js
└── index.js
```

#### Registration

Every reusable utility must be exported from:

```text
src/utils/index.js
```

Example:

```js
export { spacingResolver } from "./spacingResolver";
export { displayResolver } from "./displayResolver";
export { borderResolver } from "./borderResolver";
export { offsetResolver } from "./offsetResolver";
```

Always import utilities through the barrel file:

```js
import {
  spacingResolver,
  displayResolver,
  borderResolver,
  offsetResolver,
} from "utils";
```

Avoid importing utilities directly from individual files.

### Testing

Every public component requires Vitest coverage.

Tests should verify:

- public API
- generated classes
- rendered structure
- accessibility attributes

Avoid testing implementation details.

### Storybook

Every public component requires Storybook documentation.

Stories should include:

- default usage
- common variations
- edge cases
- controlled examples (when applicable)

## Naming Conventions

### Components

```
Button
Modal
Dropdown
```

### Hooks

```
useBodyScrollLock
useEscapePress
```

### Helpers

```
capitalize
prefix
classnames
```

### Utils

```
spacingResolver
displayResolver
```

### Constants

```
BASE_CLASS_NAME
BUTTON_THEMES
```

### Event Handlers

```
handleClick
handleClose
handleSubmit
```

## Pull Requests

Before submitting a pull request, ensure that:

- all tests pass;
- Storybook builds successfully;
- documentation is updated;
- JSDoc reflects the public API;
- the component follows the project architecture.
