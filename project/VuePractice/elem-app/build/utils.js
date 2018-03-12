'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('../package.json')


var print = function () {
  try {
    throw new Error();
  } catch (e) {
    var eStackArray = e.stack.split("\n");
    if (eStackArray.length > 2) console.error(eStackArray[2]);
    if (arguments.length > 0) console.warn(arguments[0]);
  }
}


exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    config.build.assetsSubDirectory :
    config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  var postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }


  // =========
  // SASS 配置
  // =========

  function resolve(dir) {
    return path.join(__dirname, '..', dir);;
  }
  // generate loader string to be used with extract text plugin

  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader];
    /*     let select = {
          'sass': function () {
            let mixin = resolve('src/common/scss/mixin/mixin.scss');
            print(mixin);
            return {
              loader: 'sass-resources-loader',
              options: {
                // it need a absolute path
                resources: [mixin]
              }
            }
          }
        }
        if (select[loader] && (!loaderOptions)) {
          loaders.push(select[loader]());
        } */

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    // print(loaders);

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  // scss: generateLoaders(['css', 'sass?data=@import "~assets/scss/color";'])
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {
      indentedSyntax: true
    }),
    scss: generateLoaders('sass', {
      includePaths: [resolve('src/common/scss/mixin/mixin.scss')],
      sourceMap: true,
      resources: [resolve('src/common/scss/mixin/mixin.scss')]
    }),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

exports.createNotifierCallback = function () {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') {
      return
    }
    const error = errors[0]

    const filename = error.file.split('!').pop()
    notifier.notify({
      title: pkg.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
