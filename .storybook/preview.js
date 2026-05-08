import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  tags: ["autodocs"],
  parameters: {
    docs: {
      codePanel: true, // Включает панель с кодом для всех историй
      source: {
        type: "dynamic", // 'dynamic' (re-renders on arg change) or 'code' (static)
        format: true, // Set to false to disable auto-formatting
        language: "jsx",
      },
      toc: true,
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
