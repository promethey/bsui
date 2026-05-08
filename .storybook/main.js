import { fileURLToPath } from "url";
import path from "path";

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  docs: {
    defaultName: "Documentation",
    docsMode: false,
  },
  stories: [
    "../src/**/*.mdx",
    "../docs/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: "@storybook/react-webpack5",
  webpackFinal: async (config) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "../src/components"),
      utils: path.resolve(__dirname, "../src/utils"),
      helpers: path.resolve(__dirname, "../src/helpers"),
      constants: path.resolve(__dirname, "../src/constants"),
      core: path.resolve(__dirname, "../src/core"),
    };
    return config;
  },
};

export default config;
