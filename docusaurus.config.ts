import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_URL = 'https://docs.trainvent.com';
const GITHUB_ORG_URL = 'https://github.com/trainvent';
const MAIN_SITE_URL = 'https://www.trainvent.com';

const config: Config = {
  title: 'Trainvent Docs',
  tagline: 'Build guides and resources for Trainvent projects',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: SITE_URL,
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {label: 'English'},
      de: {label: 'Deutsch'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'de'],
        docsRouteBasePath: '/',
        indexBlog: false,
        searchBarShortcutHint: true,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Trainvent',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'All Documents', position: 'left', activeBaseRegex: '^/(de/?)?$'},
        {
          type: 'docSidebar',
          sidebarId: 'raspberryPi',
          label: 'Raspberry Pi',
          position: 'left',
        },
        {type: 'localeDropdown', position: 'right'},
        {
          href: GITHUB_ORG_URL,
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {label: 'trainvent.com', href: MAIN_SITE_URL},
        {label: 'GitHub', href: GITHUB_ORG_URL},
      ],
      copyright: `© ${new Date().getFullYear()} Trainvent`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'ini'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
