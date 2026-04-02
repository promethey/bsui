import React from "react";
import { capitalize } from "utils/capitalize";

/**
 * Creates a static subcomponent variant (dot-notation API).
 *
 * @template P
 * @param {Object} variantProps - Props to be permanently applied to the variant.
 * @param {string} displayName - Variant display name (e.g. "Primary").
 * @param {React.ComponentType<P>} BaseComponent - Base component (Button, Alert, etc).
 * @returns {React.ForwardRefExoticComponent<P>} Static variant component
 */
export function createStaticVariant(variantProps, displayName, BaseComponent) {
  const Variant = React.forwardRef((props, ref) => {
    return <BaseComponent {...variantProps} {...props} ref={ref} />;
  });

  Variant.displayName = displayName;

  return Variant;
}

/**
 * Defines theme-based static variants on a component.
 *
 * @example
 * defineThemeVariants(Button, ["primary", "danger"]) // craete Button.Primary, Button.Danger
 *
 * @param {React.ComponentType<any>} Component - Base component
 * @param {Array<string>} themes - List of theme names
 * @param {string} [propName="theme"] - Prop name used for theme
 */
export function defineThemeVariants(Component, themes, propName = "theme") {
  themes.forEach((theme) => {
    const name = capitalize(theme);

    Component[name] = createStaticVariant(
      { [propName]: theme },
      name,
      Component,
    );
  });
}

/**
 * Attaches static preset variants to a component.
 *
 * @example
 * attachStaticVariants(Button, {
 *   Outline: { outline: true },
 *   Link: { as: "a" }
 * });
 *
 * @param {React.ComponentType<any>} Component - Base component
 * @param {Record<string, Object>} variants - Variant map
 */
export function attachStaticVariants(Component, variants) {
  Object.entries(variants).forEach(([name, props]) => {
    Component[name] = createStaticVariant(props, name, Component);
  });
}
