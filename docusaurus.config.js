// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hotspotty',
  tagline: 'Your all-in-one tool for building the Helium network',
  url: 'https://hotspotty.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hotspotty', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.


  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {

          routeBasePath: '/',
          editUrl: 'https://github.com/hotspotty/documentation',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
