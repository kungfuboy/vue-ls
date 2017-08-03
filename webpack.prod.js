const config = require('./webpack.base')

config.resolve.alias = {
    vue$: 'vue/dist/vue.min'
}

module.exports = config;