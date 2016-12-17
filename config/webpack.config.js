/**
 * from https://github.com/marcoturi/ionic2-boilerplate
 */

const webpackConfig = require('../node_modules/@ionic/app-scripts/config/webpack.config');
const webpack = require('webpack');
const nodeEnv = JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development');

/**
 * Plugin: DefinePlugin
 * Description: Define free variables.
 * Useful for having development builds with debug logging or adding global constants.
 *
 * Environment helpers
 *
 * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
 */

webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': nodeEnv
        }
    })
);