import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    docs: {
      codePanel: true, // Включает панель с кодом для всех историй
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
