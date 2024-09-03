import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD ? 'https://www.evonytkrtips.net' : "http://${import.meta.env.MODE}.evonytkrtips.net",
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
    contentLayer: true
  },
  integrations: [
    starlight({
      title: 'Evony TKR Tips',
      disable404Route: true,
      pagefind: false,
      social: {
        github: 'https://github.com/lschiere/',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
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
  ],
});
