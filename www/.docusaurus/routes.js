import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/bsui/__docusaurus/debug',
    component: ComponentCreator('/bsui/__docusaurus/debug', '63c'),
    exact: true
  },
  {
    path: '/bsui/__docusaurus/debug/config',
    component: ComponentCreator('/bsui/__docusaurus/debug/config', '241'),
    exact: true
  },
  {
    path: '/bsui/__docusaurus/debug/content',
    component: ComponentCreator('/bsui/__docusaurus/debug/content', '81b'),
    exact: true
  },
  {
    path: '/bsui/__docusaurus/debug/globalData',
    component: ComponentCreator('/bsui/__docusaurus/debug/globalData', '73b'),
    exact: true
  },
  {
    path: '/bsui/__docusaurus/debug/metadata',
    component: ComponentCreator('/bsui/__docusaurus/debug/metadata', 'efd'),
    exact: true
  },
  {
    path: '/bsui/__docusaurus/debug/registry',
    component: ComponentCreator('/bsui/__docusaurus/debug/registry', 'be9'),
    exact: true
  },
  {
    path: '/bsui/__docusaurus/debug/routes',
    component: ComponentCreator('/bsui/__docusaurus/debug/routes', '060'),
    exact: true
  },
  {
    path: '/bsui/blog',
    component: ComponentCreator('/bsui/blog', '0e0'),
    exact: true
  },
  {
    path: '/bsui/blog/archive',
    component: ComponentCreator('/bsui/blog/archive', '26b'),
    exact: true
  },
  {
    path: '/bsui/blog/authors',
    component: ComponentCreator('/bsui/blog/authors', 'e4a'),
    exact: true
  },
  {
    path: '/bsui/blog/authors/promethey',
    component: ComponentCreator('/bsui/blog/authors/promethey', '470'),
    exact: true
  },
  {
    path: '/bsui/blog/release-v1-0-0',
    component: ComponentCreator('/bsui/blog/release-v1-0-0', '506'),
    exact: true
  },
  {
    path: '/bsui/blog/release-v1-0-1',
    component: ComponentCreator('/bsui/blog/release-v1-0-1', '55d'),
    exact: true
  },
  {
    path: '/bsui/blog/release-v1-0-2',
    component: ComponentCreator('/bsui/blog/release-v1-0-2', '7fc'),
    exact: true
  },
  {
    path: '/bsui/blog/release-v1-1-0',
    component: ComponentCreator('/bsui/blog/release-v1-1-0', 'b29'),
    exact: true
  },
  {
    path: '/bsui/blog/release-v1-1-1',
    component: ComponentCreator('/bsui/blog/release-v1-1-1', '944'),
    exact: true
  },
  {
    path: '/bsui/blog/release-v1-1-2',
    component: ComponentCreator('/bsui/blog/release-v1-1-2', 'baa'),
    exact: true
  },
  {
    path: '/bsui/blog/tags',
    component: ComponentCreator('/bsui/blog/tags', '8bb'),
    exact: true
  },
  {
    path: '/bsui/blog/tags/bsui',
    component: ComponentCreator('/bsui/blog/tags/bsui', '655'),
    exact: true
  },
  {
    path: '/bsui/blog/tags/patch',
    component: ComponentCreator('/bsui/blog/tags/patch', '709'),
    exact: true
  },
  {
    path: '/bsui/blog/tags/react',
    component: ComponentCreator('/bsui/blog/tags/react', '851'),
    exact: true
  },
  {
    path: '/bsui/blog/tags/release',
    component: ComponentCreator('/bsui/blog/tags/release', '774'),
    exact: true
  },
  {
    path: '/bsui/docs',
    component: ComponentCreator('/bsui/docs', 'a98'),
    routes: [
      {
        path: '/bsui/docs',
        component: ComponentCreator('/bsui/docs', 'c0c'),
        routes: [
          {
            path: '/bsui/docs',
            component: ComponentCreator('/bsui/docs', 'dcd'),
            routes: [
              {
                path: '/bsui/docs/components/accordion',
                component: ComponentCreator('/bsui/docs/components/accordion', '3d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/alert',
                component: ComponentCreator('/bsui/docs/components/alert', 'e2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/badge',
                component: ComponentCreator('/bsui/docs/components/badge', '7c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/breadcrumb',
                component: ComponentCreator('/bsui/docs/components/breadcrumb', '53f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/button',
                component: ComponentCreator('/bsui/docs/components/button', '715'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/button-group',
                component: ComponentCreator('/bsui/docs/components/button-group', '673'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/card',
                component: ComponentCreator('/bsui/docs/components/card', '3cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/close_button',
                component: ComponentCreator('/bsui/docs/components/close_button', '5dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/collapse',
                component: ComponentCreator('/bsui/docs/components/collapse', 'e24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/list-group',
                component: ComponentCreator('/bsui/docs/components/list-group', '336'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/nav',
                component: ComponentCreator('/bsui/docs/components/nav', '01f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/navbar',
                component: ComponentCreator('/bsui/docs/components/navbar', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/progress',
                component: ComponentCreator('/bsui/docs/components/progress', 'b5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/components/spinner',
                component: ComponentCreator('/bsui/docs/components/spinner', '7ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/forms/check',
                component: ComponentCreator('/bsui/docs/forms/check', 'dd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/forms/controls',
                component: ComponentCreator('/bsui/docs/forms/controls', '5ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/forms/floating-labels',
                component: ComponentCreator('/bsui/docs/forms/floating-labels', '5c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bsui/docs/getting-started/introduction',
                component: ComponentCreator('/bsui/docs/getting-started/introduction', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/bsui/',
    component: ComponentCreator('/bsui/', '095'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
