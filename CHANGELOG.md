# Changelog

All notable changes to BSUI will be documented in this file.

The format is based on Keep a Changelog and Semantic Versioning.

## [Unreleased]

### Added

-

### Changed

-

### Fixed

-

### Removed

-

## [1.2.1] - 2026-08-08

### Changed

- Moved documentation-only dependencies from `dependencies` to `devDependencies` to prevent unnecessary packages from being installed by consumers.
- Updated the documentation Sandbox dependency to `@promethey/bsui@^1.1.2`, allowing it to use the latest compatible BSUI release within the `1.x` version range.

### Fixed

- Reduced the runtime dependency footprint of the published package.
- Fixed the Sandbox dependency configuration to allow newer compatible BSUI versions to be resolved.

## [1.1.3] - 2026-08-08

### ⚠️ Breaking Changes

- Form child components are no longer exported from the package root.
- Direct imports of Form child components are no longer supported and will not be available after this release.

### Added

- Added compound `Form` components for building form interfaces.
- Added documentation for `InputGroup` and `Label`.
- Added an interactive Sandbox example to the documentation landing page.
- Added architecture and API design documentation.

### Changed

- Restructured and cleaned up the Docusaurus documentation.
- Improved the introduction, installation, usage, and architecture documentation.
- Improved README content and developer experience.
- Updated documentation examples to use the `Form` compound component API.
- Removed Bootstrap Icons from the Storybook setup.

### Fixed

- Fixed Form component imports and Storybook documentation.
- Fixed Storybook component tests.
- Fixed the Docusaurus overview page.

### Removed

- Removed direct root-level exports for Form child components.
- Removed automatic npm package publishing from CI/CD.

## [1.1.2] - 2026-08-03

### Added

- Added documentation for `Accordion`, `Check`, `CloseButton`, `Navbar`, `Nav`, and `FloatingLabel` components.
- Added new Storybook component categories with separated `Foundation`, `Form`, `Core`, and `Components` sections.
- Added floating style support for `Dropdown.Menu` properties.
- Added updated homepage layout and styling for documentation.
- Added new navigation and navbar examples in documentation.

### Changed

- Reorganized Storybook component structure and documentation hierarchy.
- Updated README layout, badges, logo size, and project version information.
- Updated repository documentation with Node.js version and compatibility requirements.
- Improved navbar and dropdown stories to match the updated component API.

### Fixed

- Fixed Dropdown floating behavior configuration.
- Fixed Storybook component category ordering and organization.
- Fixed navbar stories with updated dropdown integration.

### Removed

- Removed previous component category grouping structure in Storybook.

## [1.1.1] - 2026-07-29

### Fixed

- Fixed incorrect GitHub Actions badge reference in the npm README.
- Updated package documentation metadata to correctly reflect the current documentation deployment workflow.

## [1.1.0] - 2026-07-29

### Added

- Added Docusaurus-based documentation website.
- Added component documentation pages with API references and live examples.
- Added documentation navigation and structured component guides.
- Added GitHub Pages deployment for documentation and Storybook.
- Added integrated Storybook preview under `/storybook`.

### Changed

- Improved project documentation structure.
- Separated API documentation and interactive component examples:
  - Docusaurus for guides and API references;
  - Storybook for live component previews.

### Fixed

- Improved documentation links and project navigation.

## [1.0.2] - 2026-07-22

### Documentation

- Improved README documentation with various fixes, refinements, and additional details.
- Cleaned up Storybook documentation by removing redundant content and improving the Introduction page.

## [1.0.1] - 2026-07-15

### Fixed

- Updated package references after migration to scoped npm package.
- Fixed npm package metadata.

## [1.0.0] - 2026-07-15

[1.0.0]: https://github.com/promethey/bsui/releases/tag/v1.0.0

### Added

- Utils: bg, border, columns, display, flex, float, font, gutter, offset, opacity, overflow, position, rounded, shadow, sizing, spacing, text;
- Helpers: capitalize, classnames, prefix;
- Hooks: useAutohide, useBodyScrollLock, useEscapePress;
- Layout: Container, Grid, Row, Col;
- Forms: Form, Control, Label, Check, Range, Select, FloatingLabel, InputGroup;
- Navigation: Nav, Navbar, Breadcrumb, Dropdown;
- Feedback: Alert, Badge, Progress, Spinner, Placeholder;
- Content: Accordion, Card, ListGroup;
- Overlay: Modal, Collapse, Carousel, Offcanvas;
- Buttons: Button, ButtonGroup, CloseButton;
- Core: Prime;
- Storybook documentation;
- JSDoc-based IntelliSense system;
- Vitest test suite;
- GitHub Actions;
- GitHub Pages;

### Changed

- Replaced `theme` and `variant` with `tone`;
- Standardized component architecture and public API;
- Unified JSDoc documentation across components;

```

```
