<p align="center">
  <img src="./public/bsui-logo.png" width="220" />
</p>

<p align="center">
  <a href="https://github.com/promethey/bsui/actions/workflows/ci.yml"><img src="https://github.com/promethey/bsui/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://github.com/promethey/bsui/actions/workflows/storybook.yml"><img src="https://github.com/promethey/bsui/actions/workflows/storybook.yml/badge.svg" alt="Storybook Deploy"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/promethey/bsui" alt="License"></a>
  <a href="https://github.com/promethey/bsui/stargazers"><img src="https://img.shields.io/github/stars/promethey/bsui?style=social" alt="GitHub Stars"></a>
  <a href="https://promethey.github.io/bsui/"><img src="https://img.shields.io/badge/Storybook-Live-FF4785?logo=storybook&logoColor=white" alt="Storybook"></a>
</p>

# BSUI (Bootstrap-UI)

Modern Bootstrap component system for React applications.

| BSUI Version | Bootstrap Version | Status  |
| ------------ | ----------------- | ------- |
| 1.X.X        | 5.1.X             | Latest  |
| 2.X.X        | 5.2.X             | Planned |

## Installation

```bash
npm install bsui
```

### Styling

Import Bootstrap styles in your project:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

### Requirements

- React 19+
- Bootstrap 5.1.3

## Usage

```jsx
import { Button } from "bsui";

export function Example() {
  return (
    <Button tone="primary" size="lg">
      Primary
    </Button>;
  );
}
```

---

## Why BSUI?

BSUI brings Bootstrap design system to React with a modern architecture, rich documentation, runtime validation, and a consistent developer experience.

### Prime Architecture

All components are built on top of a single primitive: `<Prime />`.

Features:

- Polymorphic rendering via as
- Bootstrap utility props
- Native HTML attributes forwarding
- Consistent API across the library

```jsx
<Prime as="button" m={2} px={3} fw="bold" />

<button class="m-2 px-3 fw-bold" />
```

### Bootstrap Utility Props

Every component is built on top of `Prime`, so all utility props are available everywhere.

```jsx
<Prime d={{ xs: "block", md: "flex" }} mt={3} />

// is equivalent to

<Button d={{ xs: "block", md: "flex" }} mt={3} />
<Card d={{ xs: "block", md: "flex" }} mt={3} />
<Modal d={{ xs: "block", md: "flex" }} mt={3} />
```

### Rich Documentation

```jsx
/**
 * Displays small contextual labels,
 * counters, or status indicators.
 *
 * @component
 *
 * @example
 * <Badge bg="secondary">New</Badge>
 *
 * @example
 * <Badge bg="primary" text="light">Primary</Badge>
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/badge/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} BadgeOwnProps
 *
 * @typedef {BadgeOwnProps & PrimeProps} BadgeProps
 *
 * @param {BadgeProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
```

Every public component includes:

- JSDoc descriptions
- Usage examples
- Bootstrap documentation links
- IDE autocomplete and hover help
- Author and version

### Runtime Validation

Public APIs are validated with PropTypes, providing runtime checks even after the application is built.

### Built on Proven Libraries

- [React Transition Group](https://reactcommunity.org/react-transition-group/) — animations and transitions
- [Embla Carousel](https://www.embla-carousel.com/) — carousel engine
- [Floating UI](https://floating-ui.com/) — dropdowns, tooltips, popovers, and positioning

### Storybook & Testing

Every public component includes:

- Storybook documentation
- Vitest tests
- Usage examples

### No Bootstrap JavaScript

BSUI uses Bootstrap styles only. All interactive behavior is implemented in React.

### Contributor Friendly

The project follows a consistent architecture based on:

- Prime foundation
- Shared utility system
- JSDoc standards
- Storybook stories
- Vitest coverage

## Component Compatibility

- `Stable` — Production-ready API
- `Experimental` — API may change
- `Planned` — Not implemented yet

### Categories

| Category   | Description                                  |
| ---------- | -------------------------------------------- |
| Form       | Form controls and data input components      |
| Control    | Interactive form and action components       |
| Feedback   | Status and user feedback components          |
| Navigation | Navigation and routing components            |
| Layout     | Grid and layout utilities                    |
| Overlay    | Floating, layered, and temporary UI elements |
| Content    | Content organization and presentation        |
| Core       | Internal primitive components                |

### Compatibility Matrix

| Component   | Category   | Status  |
| ----------- | ---------- | ------- |
| Accordion   | Content    | Stable  |
| Alert       | Feedback   | Stable  |
| Badge       | Feedback   | Stable  |
| Breadcrumb  | Navigation | Stable  |
| Button      | Control    | Stable  |
| ButtonGroup | Control    | Stable  |
| Card        | Content    | Stable  |
| Carousel    | Content    | Stable  |
| Check       | Form       | Stable  |
| CloseButton | Control    | Stable  |
| Col         | Layout     | Stable  |
| Collapse    | Content    | Stable  |
| Container   | Layout     | Stable  |
| Control     | Form       | Stable  |
| Dropdown    | Overlay    | Stable  |
| InputGroup  | Form       | Stable  |
| Label       | Form       | Stable  |
| ListGroup   | Content    | Stable  |
| Modal       | Overlay    | Stable  |
| Nav         | Navigation | Stable  |
| Navbar      | Navigation | Stable  |
| Offcanvas   | Overlay    | Stable  |
| Pagination  | Navigation | Stable  |
| Placeholder | Feedback   | Stable  |
| Prime       | Core       | Stable  |
| Progress    | Feedback   | Stable  |
| Range       | Form       | Stable  |
| Row         | Layout     | Stable  |
| Select      | Form       | Stable  |
| Spinner     | Feedback   | Stable  |
| Toast       | Feedback   | Planned |

## Build

This library uses Webpack for runtime bundling and TypeScript (declaration emit only) for type generation from JSDoc.

### Install dependencies

```bash
npm install
```

### Build library (production bundle)

```bash
npm run build
```

### Generate TypeScript definitions (JSDoc → .d.ts)

Generates type definitions for IDE IntelliSense and autocomplete:

```bash
npm run types
```

### Local package testing

Install in another project:

```bash
npm pack
npm install bsui-1.0.0.tgz
```

## Documentation

Every component is documented in two layers:

- Storybook (interactive usage)
- JSDoc (inline code documentation)

### Storybook

Run locally:

```bash
npm run storybook
```

## Testing

The library is tested with Vitest.

Covered areas:

- Components
- Utility resolvers
- Internal helpers

```bash
npm run test
```

## License

MIT © Egor Sedelkov
