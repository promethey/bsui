<p align="center">
  <img src="./public/bsui-logo.png" width="220" />
</p>

<p align="center">
  <a href="https://github.com/promethey/bsui/actions/workflows/ci.yml">
    <img src="https://github.com/promethey/bsui/actions/workflows/ci.yml/badge.svg" alt="CI">
  </a>
  <a href="https://github.com/promethey/bsui/actions/workflows/storybook.yml">
    <img src="https://github.com/promethey/bsui/actions/workflows/storybook.yml/badge.svg" alt="Storybook Deploy">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/promethey/bsui" alt="License">
  </a>
  <a href="https://github.com/promethey/bsui/stargazers">
    <img src="https://img.shields.io/github/stars/promethey/bsui?style=social" alt="GitHub Stars">
  </a>
  <a href="https://promethey.github.io/bsui/">
    <img src="https://img.shields.io/badge/Storybook-Live-FF4785?logo=storybook&logoColor=white" alt="Storybook">
  </a>
</p>

# BSUI (Bootstrap-UI)

Modern Bootstrap component system for React applications.
Build Bootstrap 5 applications with composable React components, utility props, and JSDoc-powered IntelliSense.

| BSUI Version  | Bootstrap Version |
| ------------- | ----------------- |
| 1.X           | 5.1               |
| 1.2 (planned) | 5.2               |

## Featues

- Bootstrap 5 components
- Shared Utility API across all components
- JSDoc-powered IntelliSense
- Storybook documentation
- Zero Bootstrap JavaScript

## Installation

Peer Dependencies:

- React 19+
- Bootstrap 5.1.3

```bash
npm install bsui
```

Import Bootstrap styles in your project:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

## Usage

```jsx
import { Button } from "bsui";

export function Example() {
  return (
    <Button tone="primary" size="lg">
      Primary
    </Button>
  );
}
```

```jsx
<button class="btn btn-primary btn-lg">Primary</button>
```

---

### Prime Architecture

Every public component extends the `Prime` primitive.

Prime provides:

- polymorphic rendering
- utility props
- HTML attributes
- shared API

```jsx
<Prime as="button" m={2} px={3} fw="bold" />

<button class="m-2 px-3 fw-bold" />
```

### Utility Props

Every component is built on top of `Prime`, so all utility props are available everywhere.

```jsx
<Prime d={{ xs: "block", md: "flex" }} mt={3} />

<div class="d-block d-md-flex" mt-3 />

<Button d={{ xs: "block", md: "flex" }} mt={3} />

<button class="btn btn-primary d-block d-md-flex mt-3" />
```

### Documentation

Every public component includes:

- JSDoc descriptions
- Bootstrap documentation links
- Usage examples
- IDE autocomplete and hover help
- Author and since

### External Libraries

- [React Transition Group](https://reactcommunity.org/react-transition-group/) - animations and transitions
- [Embla Carousel](https://www.embla-carousel.com/) - carousel engine
- [Floating UI](https://floating-ui.com/) - dropdowns, tooltips, popovers, and positioning

## Components

BSUI currently provides 30+ Bootstrap-compatible components.

See the complete list:

[COMPONENTS.md](docs/COMPONENTS.md)

# Contributing

Contributions are welcome.

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT © Egor Sedelkov
