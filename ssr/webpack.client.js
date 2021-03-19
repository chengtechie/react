const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {

    // Tell webpack root file of our client app
    entry: './src/client/client.js',

    // Where to put the output file generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, config)