// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hotspotty',
  tagline: 'Your all-in-one tool for building the Helium network',
  url: 'https://docs.hotspotty.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hotspotty',
  projectName: 'documentation',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {

          routeBasePath: '/',
          editUrl: 'https://github.com/hotspotty/documentation/blob/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: process.env.GOOGLE_TAG_MANAGER_ID,
        },
      }),
    ],
  ],
  plugins: [
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: true,
        placeholder: 'Search docs',
        appId: process.env.ALGOLIA_APPLICATION_ID,
      },
      navbar: {
        title: 'Hotspotty',
        logo: {
          alt: 'Hotspotty Logo',
          src: 'img/android-chrome-192x192.png',
        },
        items: [
          {
            href: 'https://app.hotspotty.net',
            label: 'Open app',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/498Rc8khaN',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hotspotty',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCetkq-kgvqD6EAIntIj3glw'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://hotspotty.net/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hotspotty/documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hotspotty, Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
