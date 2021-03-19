const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const config = {

    // Inform webpack that we build a bundle for nodeJS
    // NOT for browser!!
    target: 'node',

    // Tell webpack root file of our server app
    entry: './src/index.js',

    // Where to put the output file generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)