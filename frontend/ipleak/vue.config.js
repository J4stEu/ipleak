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
    //publicPath: '/',
    //productionSourceMap: false,
    //outputDir: '../../backend/frontendEngine',
    //assetsDir: '../../backend/assets'
  };