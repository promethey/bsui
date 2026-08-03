<br>
<p align="center">
  <img src="./public/bsui-logo.png" width="200" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/promethey/bsui" alt="License">
  <img src="https://img.shields.io/badge/node-24-339933?logo=node.js">
  <img src="https://img.shields.io/badge/react-19-61DAFB?logo=react">
  <img src="https://img.shields.io/badge/bootstrap-5.1.3-7952B3?logo=bootstrap">
  <img src="https://img.shields.io/npm/v/@promethey/bsui.svg" alt="npm">
  <img src="https://github.com/promethey/bsui/actions/workflows/ci.yml/badge.svg" alt="CI">
  <img src="https://github.com/promethey/bsui/actions/workflows/deploy-docs.yml/badge.svg" alt="Documentation Deploy">
  <img src="https://img.shields.io/badge/Storybook-Live-FF4785?logo=storybook&logoColor=white" alt="Storybook">
</p>

<div align="center">

# BSUI

Modern Bootstrap component system for React applications. Build Bootstrap 5 applications with composable React components, utility props, and JSDoc-powered IntelliSense.

</div>

## Features

- React components built with Bootstrap 5.
- Consistent component APIs across the library.
- Bootstrap utility classes through component props.
- JSDoc-powered IntelliSense without TypeScript.
- Fully documented components with interactive examples.
- No dependency on Bootstrap JavaScript.

## Installation

Requirements:

- React 19+
- Bootstrap 5.1.3

```bash
npm i @promethey/bsui
```

Import Bootstrap styles in your project:

```bash
npm i bootstrap
```

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

### Usage

```jsx
import { Button } from "@promethey/bsui";

export function Example() {
  return (
    <Button tone="primary" size="lg">
      Hello BSUI
    </Button>
  );
}

/**
 * <button class="btn btn-primary btn-lg">
 *    Hello BSUI
 * </button>
 */
```

## Prime Architecture

Every public component is built on top of the `Prime` primitive.

Prime provides:

- polymorphic rendering
- utility props
- HTML attributes
- shared API

```jsx
<Prime as="button" m={2} px={3} fw="bold" />

// <button class="m-2 px-3 fw-bold" />
```

## Utility Props

Every component is built on top of `Prime`, so all utility props are available everywhere.

```jsx
<Prime d={{ xs: "block", md: "flex" }} mt={3} />

// <div class="d-block d-md-flex" mt-3 />
```

```jsx
<Button d={{ xs: "block", md: "flex" }} mt={3} />

// <button class="btn btn-primary d-block d-md-flex mt-3" />
```

## Type Safety without TypeScript

Write React components with strong editor support without adding TypeScript to your project.

BSUI combines JSDoc annotations and PropTypes to provide:

- Autocomplete and IntelliSense
- Inline API documentation
- Development-time type hints
- Runtime prop validation
- No additional TypeScript tooling required

## Why tone?

BSUI uses the `tone` prop to control the visual appearance of components.

Unlike `variant`, the name **tone** is shorter, easier to type, and better reflects the semantic purpose of the prop.

```jsx
<Button tone="primary" />

// <button class="btn btn-primary" />
```

```jsx
<Alert tone="danger" />

// <div class="alert alert-danger" />
```

The same API is shared across all components, providing a predictable and consistent developer experience.

## External Libraries

- [React Transition Group](https://reactcommunity.org/react-transition-group/) - animations and transitions
- [Embla Carousel](https://www.embla-carousel.com/) - carousel engine
- [Floating UI](https://floating-ui.com/) - dropdowns, tooltips, popovers, and positioning

## Components

BSUI currently provides 30+ Bootstrap-compatible components.

See the full component list and compatibility matrix in
[Components](COMPONENTS.md).

## Contributing

Contributions are welcome!

Before opening a pull request, please read the
[Contributing Guide](CONTRIBUTING.md).

## License

MIT © Egor Sedelkov
