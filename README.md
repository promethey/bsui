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

## Installation

```bash
npm install bsui
```

### Styling

Import Bootstrap styles in your project:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

### Peer Dependencies

- react >= 18
- react-dom >= 18
- bootstrap >= 5.1.3

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

BSUI brings Bootstrap's design system to React with a modern architecture, rich documentation, runtime validation, and a consistent developer experience.

### Prime Architecture

All components are built on top of a single primitive: `<Prime />`.

Features:

- Polymorphic rendering via as
- Bootstrap utility props
- Native HTML attributes forwarding
- Consistent API across the library

```jsx
<Prime as="button" m={2} px={3} fw="bold" />
```

### Bootstrap Utility Props

Generate Bootstrap utility classes directly from React props.

```jsx
<Prime d="flex" flex="center" mt={3} />
```

Responsive values are supported:

```jsx
<Prime d={{ xs: "block", md: "flex" }} />
```

### Rich Documentation

Every public component includes:

- JSDoc descriptions
- Usage examples
- Bootstrap documentation links
- IDE autocomplete and hover help

### Runtime Validation

Public APIs are validated with PropTypes, providing runtime checks even after the application is built.

### Built on Proven Libraries

- React Transition Group — animations and transitions
- Embla Carousel — carousel engine
- Floating UI — dropdown, tooltips, popovers, and positioning

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

| Component   | Category   | Status       | Ver.  | Bootstrap Ver. |
| ----------- | ---------- | ------------ | ----- | -------------- |
| Accordion   | Content    | Stable       | 1.0.0 | 5.1.3          |
| Alert       | Feedback   | Stable       | 1.0.0 | 5.1.3          |
| Badge       | Feedback   | Stable       | 1.0.0 | 5.1.3          |
| Breadcrumb  | Navigation | Stable       | 1.0.0 | 5.1.3          |
| Button      | Control    | Stable       | 1.0.0 | 5.1.3          |
| ButtonGroup | Control    | Stable       | 1.0.0 | 5.1.3          |
| Card        | Content    | Stable       | 1.0.0 | 5.1.3          |
| Carousel    | Content    | Experimental | 1.0.0 | 5.1.3          |
| Check       | Form       | Stable       | 1.0.0 | 5.1.3          |
| CloseButton | Control    | Stable       | 1.0.0 | 5.1.3          |
| Col         | Layout     | Experimental | 1.0.0 | 5.1.3          |
| Collapse    | Content    | Stable       | 1.0.0 | 5.1.3          |
| Container   | Layout     | Stable       | 1.0.0 | 5.1.3          |
| Control     | Form       | Stable       | 1.0.0 | 5.1.3          |
| Dropdown    | Overlay    | Experimental | 1.0.0 | 5.1.3          |
| InputGroup  | Form       | Stable       | 1.0.0 | 5.1.3          |
| Label       | Form       | Stable       | 1.0.0 | 5.1.3          |
| ListGroup   | Content    | Stable       | 1.0.0 | 5.1.3          |
| Modal       | Content    | Stable       | 1.0.0 | 5.1.3          |
| Nav         | Navigation | Stable       | 1.0.0 | 5.1.3          |
| Navbar      | Navigation | Stable       | 1.0.0 | 5.1.3          |
| Placeholder | Feedback   | Stable       | 1.0.0 | 5.1.3          |
| Prime       | Core       | Stable       | 1.0.0 | 5.1.3          |
| Progress    | Feedback   | Stable       | 1.0.0 | 5.1.3          |
| Range       | Form       | Stable       | 1.0.0 | 5.1.3          |
| Row         | Layout     | Stable       | 1.0.0 | 5.1.3          |
| Select      | Form       | Stable       | 1.0.0 | 5.1.3          |
| Spinner     | Feedback   | Stable       | 1.0.0 | 5.1.3          |

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

Create a tarball for local npm testing:

```bash
npm pack
```

Install in another project:

```bash
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

### Vitest

```bash
npm run test
```

```bash
npm run test:watch
```

```bash
npm run test:ui
```

```bash
npm run test:coverage
```

## License

MIT © Egor Sedelkov
