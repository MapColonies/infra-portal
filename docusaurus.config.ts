import path from 'node:path';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { remotePluginGenerator, typedocPluginGenerator, sources } from './remoteFetch';

import { Options } from '@docusaurus/plugin-content-docs';

function injectTypeDocSidebar(items: Awaited<ReturnType<Options['sidebarItemsGenerator']>>) {
  return items.map((item) => {
    if (item.type === 'category' && item.label === 'Packages') {
      item.items = item.items.map((subItem) => {
        if (subItem.type !== 'category' || !subItem.link) {
          return subItem;
        }

        const includedPackage = sources.filter((src) => 'id' in subItem.link && subItem.link.id.includes('/' + src.name + '/'));

        if (includedPackage.length !== 1 || subItem.items.length === 0 || subItem.items[0].type !== 'category') {
          return subItem;
        }
        const typedoc = subItem.items[0];
        typedoc.label = 'Typedoc';

        typedoc.items = require(`./docs/knowledge-base/packages/${includedPackage[0].name}/typedoc/typedoc-sidebar.cjs`);
        return subItem;
      });
    }
    return item;
  });
}

export default async function createConfigAsync() {
  const config: Config = {
    title: 'Infra Portal',
    tagline: 'Beavers are cool',
    favicon: 'img/favicon.ico',
    plugins: [
      ...remotePluginGenerator(),
      ...(await typedocPluginGenerator()),
      // ["@docusaurus/plugin-content-docs", contentDocsOptions],
      require.resolve('docusaurus-lunr-search'),
    ],
    // Set the production url of your site here
    url: 'https://mapcolonies.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: process.env.BASE_URL || '/infra-portal/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'MapColonies', // Usually your GitHub org/user name.
    projectName: 'infra-portal', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    markdown: {
      format: 'detect',
      mermaid: true,
    },

    presets: [
      [
        'classic',
        {
          docs: {
            sidebarItemsGenerator: async ({ defaultSidebarItemsGenerator, ...args }) => {
              return injectTypeDocSidebar(await defaultSidebarItemsGenerator(args));
            },
            sidebarPath: './sidebars.ts',
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/MapColonies/infra-portal/tree/master/',
          },
          blog: {
            showReadingTime: true,
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/MapColonies/infra-portal/tree/master/docs/',
            // Useful options to enforce blogging best practices
            onInlineTags: 'warn',
            onInlineAuthors: 'warn',
            onUntruncatedBlogPosts: 'warn',
          },
          theme: {
            customCss: './src/css/custom.css',
          },
        } satisfies Preset.Options,
      ],
    ],

    themeConfig: {
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Infra Portal',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'knowledgeBaseSidebar',
            position: 'left',
            label: 'Knowledge Base',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'Guides',
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: 'https://github.com/MapColonies/infra-portal',
            label: 'GitHub',
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
                label: 'Knowledge Base',
                to: '/docs/knowledge-base',
              },

              {
                label: 'Guides',
                to: '/docs/guides',
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Infra Portal, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['typescript', 'json', 'bash', 'yaml', 'docker', 'regex', 'sql'],
      },
    } satisfies Preset.ThemeConfig,
    themes: ['@docusaurus/theme-mermaid'],
  };

  return config;
}
