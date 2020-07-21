var path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_moduels/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env', 'stage-1']
                }
            }
        }]
    }
}