module.exports = {
  pwa: {
    manifestOptions: {
      manifest_version: 1,
      name: 'ui-library-starter-2',
      version: '0.1',
      short_name: 'ui-library-starter-2',
      start_url: '/?utm_source=homescreen',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#ffffff',
      icons: [
        {
          src: './favicon.svg',
          sizes: '16x16',
          type: 'image/x-icon',
        },
      ],
    },
  },
};
