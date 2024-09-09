import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD ? 'https://www.evonytkrtips.net' : `http://${import.meta.env.MODE}.evonytkrtips.net`,
  devToolbar: {
    enabled: false,
  },
  vite: {
    build: {
      minify: false,
      cssMinify: false,
    },
  },
  experimental: {
    contentLayer: true,
    contentIntellisense: true,
  },
  integrations: [
    starlight({
      title: 'Evony TKR Tips',
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      disable404Route: true,
      pagefind: false,
      social: {
        github: 'https://github.com/lschiere/',
      },
      components: {
        ThemeSelect: './src/components/ThemeSelect.astro',
        PageFrame: './src/components/PageFrame.astro',
        TwoColumnContent: './src/components/TwoColumnContent.astro',
        Sidebar: './src/components/nav.astro',
      },
      customCss: [
        '@spectrum-web-components/styles/theme-dark.css',
        '@spectrum-web-components/styles/theme-light.css',
        '@spectrum-web-components/styles/scale-medium.css',
        '@spectrum-web-components/styles/typography.css',
        '@spectrum-css/tokens/dist/index.css',
        './src/styles/tailwind.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Generals',
          items: [
            { 
              label: 'Details on Specific Generals',
              items: [],
              collapsed: true
            }
          ]
        },
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8360834774752607',
            defer: true,
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'google-adsense-account',
            content: 'ca-pub-8360834774752607',
          },
        },
      ],
      lastUpdated: true,
      pagination: true,
    }), 
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});