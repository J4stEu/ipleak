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
    workboxPluginMode: 'GenerateSW',
    name:'J4stEuIPleak',
    manifestPath: '../assets/manifest.json',
    themeColor: '#ffffff',
    msTileColor: '#2b5797',
    appleMobileWebAppCapable: 'yes',
    iconPaths: {
      favicon32: 'assets/icons/favicon-32x32.png',
      favicon16: 'assets/icons/icons/favicon-16x16.png',
      appleTouchIcon: 'assets/icons/icons/apple-touch-icon.png',
      maskIcon: 'assets/icons/icons/safari-pinned-tab.svg',
      msTileImage: 'assets/icons/icons/mstile-150x150.png'
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
      ]
    }
  },
  productionSourceMap: false,
  outputDir: '../static/frontEndEngine',
  assetsDir: '../assets'
};