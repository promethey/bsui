// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([{
  files: ["**/*.{js,mjs,cjs,jsx}"],
  plugins: { js },
  extends: ["js/recommended"],
  languageOptions: { globals: globals.browser },
}, pluginReact.configs.flat.recommended, {
  files: ["**/*.{js,jsx}"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/display-name": "off",
    "no-unused-vars": "off",
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-constructed-context-values": "off",
    "react/react-in-jsx-scope": "off",
  },
}, {
  ignores: [
    "node_modules/**",
    "dist/**",
    "build/**",
    "**/*.config.js",
    "**/*.test.js",
    "**/*.stories.jsx",
    "src/tests/**",
  ],
}, ...storybook.configs["flat/recommended"]]);
