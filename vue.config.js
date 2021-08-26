const path = require('path')

module.exports = {
    publicPath: './',
    lintOnSave: false,
    devServer:{
    before: require('./src/mock/index.js')
    }
}