var path = require('path');
var webpack = require('webpack');
var components_dir = path.resolve(__dirname, 'components');
var build_dir = path.resolve(__dirname, 'public');

module.exports = {
    entry: components_dir + '/index.js',
    output: {
        path: build_dir,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: components_dir,
                exclude: /node_modules/
            }
        ]
    }
};