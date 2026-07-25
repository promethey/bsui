// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BSUI",
  tagline: "Modern Bootstrap component system for React applications",
  favicon: "img/bsui-favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://promethey.github.io",
  baseUrl: "/bsui/",

  organizationName: "promethey", // Usually your GitHub org/user name.
  projectName: "bsui", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "BSUI",
        logo: {
          alt: "BSUI Logo",
          src: "img/bsui-logo.png",
        },
        items: [
          {
            to: "/docs/getting-started/introduction",
            label: "Getting Started",
            position: "left",
          },
          {
            to: "/docs/components/button",
            label: "Components",
            position: "left",
          },
          {
            href: "https://promethey.github.io/bsui/storybook",
            label: "Storybook",
            position: "left",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/promethey/bsui",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.npmjs.com/package/@promethey/bsui",
            label: "npm",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/getting-started/introduction",
              },
              {
                label: "Components",
                to: "/docs/components/button",
              },
              {
                label: "Storybook",
                href: "https://promethey.github.io/bsui/storybook",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub Discussions",
                href: "https://github.com/promethey/bsui/discussions",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/promethey/bsui",
              },
              {
                label: "npm",
                href: "https://www.npmjs.com/package/@promethey/bsui",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Egor Sedelkov`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
