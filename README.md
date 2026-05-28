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

| Category     | Description                            |
| ------------ | -------------------------------------- |
| Control      | Interactive form and action components |
| Feedback     | Status and user feedback components    |
| Overlay      | Floating and layered UI elements       |
| Disclosure   | Expandable and collapsible interfaces  |
| Navigation   | Navigation and routing components      |
| Layout       | Grid and layout utilities              |
| Surface      | Content containers and visual wrappers |
| Data Display | Informational and status indicators    |
| Core         | Internal primitive components          |

### Compatibility Matrix

| Component   | Category     | Status       | Ver.  | Bootstrap Ver. |
| ----------- | ------------ | ------------ | ----- | -------------- |
| Accordion   | Disclosure   | Experimental | 1.0.0 | 5.1.3          |
| Alert       | Feedback     | Experimental | 1.0.0 | 5.1.3          |
| Badge       | Data Display | Experimental | 1.0.0 | 5.1.3          |
| Button      | Control      | Experimental | 1.0.0 | 5.1.3          |
| ButtonGroup | Control      | Experimental | 1.0.0 | 5.1.3          |
| Card        | Surface      | Experimental | 1.0.0 | 5.1.3          |
| CloseButton | Control      | Experimental | 1.0.0 | 5.1.3          |
| Col         | Layout       | Experimental | 1.0.0 | 5.1.3          |
| Collapse    | Disclosure   | Experimental | 1.0.0 | 5.1.3          |
| Container   | Layout       | Experimental | 1.0.0 | 5.1.3          |
| Dropdown    | Overlay      | Experimental | 1.0.0 | 5.1.3          |
| Nav         | Navigation   | Experimental | 1.0.0 | 5.1.3          |
| Prime       | Core         | Experimental | 1.0.0 | 5.1.3          |
| Progress    | Feedback     | Experimental | 1.0.0 | 5.1.3          |
| Row         | Layout       | Experimental | 1.0.0 | 5.1.3          |

### Quick Example

```jsx
import { Button, Card } from "bsui";

export function Example() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Project dashboard</Card.Title>
        <Card.Text>
          A scalable UI system built on Bootstrap 5 with modern React
          composition patterns.
        </Card.Text>
        <Button theme="secondary">Open dashboard</Button>
      </Card.Body>
    </Card>
  );
}
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

The library is tested with both Jest and Vitest.

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
npm run test:coverage
```

### Jest

```bash
npm run test:jest
```

```bash
npm run test:jest:watch
```

Vitest is recommended for active development and modern Vite-based workflows.

## License

MIT
