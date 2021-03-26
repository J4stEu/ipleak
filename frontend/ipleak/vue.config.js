module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'J4stEuIPleak'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/conf.scss";'
      }
    }
  },
  pwa: {
    name:'J4stEuIPleak',
    manifestPath: '../assets/manifest.json',
    themeColor: '#ffffff',
    msTileColor: '#2b5797',
    appleMobileWebAppCapable: 'yes',
    iconPaths: {
      favicon32: 'static/frontendEngine/icons/favicon-32x32.png',
      favicon16: 'static/frontendEngine/icons/favicon-16x16.png',
      appleTouchIcon: 'static/frontendEngine/icons/apple-touch-icon.png',
      maskIcon: 'static/frontendEngine/icons/safari-pinned-tab.svg',
      msTileImage: 'static/frontendEngine/icons/mstile-150x150.png'
    },
    manifestOptions: {
      icons:[
        {
          'src': 'icons/android-chrome-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
        },
        {
          'src': 'icons/android-chrome-256x256.png',
          'sizes': '192x192',
          'type': 'image/png',
        },
        {
          'src': 'icons/apple-touch-icon.png',
          'sizes': '180x180',
          'type': 'image/png',
        },
        {
          'src': 'icons/favicon-16x16.png',
          'sizes': '16x16',
          'type': 'image/png',
        },
        {
          'src': 'icons/favicon-32x32.png',
          'sizes': '32x32',
          'type': 'image/png',
        },
        {
          'src': 'icons/mstile-150x150.png',
          'sizes': '150x150',
          'type': 'image/png',
        },
      ],
      'start_url': '/',

    }
  },
  productionSourceMap: false,
  outputDir: '../static/frontendEngine',
  assetsDir: '../assets'
};