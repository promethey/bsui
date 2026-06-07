<p align="center">
  <img src="./public/bsui-logo.png" width="220" />
  <h1 style={{ margin: "24px 0" }}>Bootstrap-UI</h1>
  <p style={{ margin: "0" }}>
    Modern Bootstrap component system for React applications.
  </p>
</p>

```text
React • Bootstrap 5 • JavaScript • JSDoc • Storybook
```

---

# Features

- React components built on Bootstrap 5
- Fully JSDoc-typed (no TypeScript)
- IntelliSense in VSCode
- Zero compilation overhead
- Built-in runtime prop type and value validation
- Same Bootstrap utility system
- Immediate support for new Bootstrap releases

You write **pure JavaScript**, but still get a typed ecosystem.

# Installation

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

# Usage

```jsx
import { Button } from "bsui";

export function Example() {
  return (
    <Button theme="primary" size="lg">
      Primary
    </Button>;
  );
}
```

# Component Compatibility

- `Stable` — Production-ready API
- `Experimental` — API may change
- `Planned` — Not implemented yet

### Categories

| Category   | Description                                  |
| ---------- | -------------------------------------------- |
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
| Accordion   | Content    | Experimental | 1.0.0 | 5.1.3          |
| Alert       | Feedback   | Experimental | 1.0.0 | 5.1.3          |
| Badge       | Feedback   | Experimental | 1.0.0 | 5.1.3          |
| Breadcrumb  | Navigation | Experimental | 1.0.0 | 5.1.3          |
| Button      | Control    | Experimental | 1.0.0 | 5.1.3          |
| ButtonGroup | Control    | Experimental | 1.0.0 | 5.1.3          |
| Card        | Content    | Experimental | 1.0.0 | 5.1.3          |
| CloseButton | Control    | Experimental | 1.0.0 | 5.1.3          |
| Col         | Layout     | Experimental | 1.0.0 | 5.1.3          |
| Collapse    | Content    | Experimental | 1.0.0 | 5.1.3          |
| Container   | Layout     | Experimental | 1.0.0 | 5.1.3          |
| Control     | Control    | Experimental | 1.0.0 | 5.1.3          |
| Dropdown    | Overlay    | Experimental | 1.0.0 | 5.1.3          |
| ListGroup   | Content    | Experimental | 1.0.0 | 5.1.3          |
| Nav         | Navigation | Experimental | 1.0.0 | 5.1.3          |
| Navbar      | Navigation | Experimental | 1.0.0 | 5.1.3          |
| Placeholder | Feedback   | Experimental | 1.0.0 | 5.1.3          |
| Prime       | Core       | Experimental | 1.0.0 | 5.1.3          |
| Progress    | Feedback   | Experimental | 1.0.0 | 5.1.3          |
| Row         | Layout     | Experimental | 1.0.0 | 5.1.3          |
| Spinner     | Feedback   | Experimental | 1.0.0 | 5.1.3          |

### Quick Example

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "bsui";

function App() {
  return (
    <Dropdown>
      <Dropdown.Toggle>Dropdown button</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default App;
```

# Build

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

# Documentation

Every component is documented in two layers:

- Storybook (interactive usage)
- JSDoc (inline code documentation)

### Storybook

Run locally:

```bash
npm run storybook
```

# Testing

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
