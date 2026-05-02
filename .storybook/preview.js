import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    docs: {
      codePanel: true, // Включает панель с кодом для всех историй
      source: {
        type: "dynamic", // 'dynamic' (re-renders on arg change) or 'code' (static)
        format: true, // Set to false to disable auto-formatting
        language: "jsx",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
