
const webpack = require('webpack')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const fs = require('fs')
const ejs = require('ejs')
const template = ejs.compile(fs.readFileSync(`${__dirname}/template.ejs`, 'utf-8'))
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const blogPaths = fs.readdirSync('./posts')
const blogNames = blogPaths.map(path => `posts/${path.replace('.md', '')}`)

const paths = [
    '/',
    'about',
    'posts',
    ...blogNames,
];

module.exports = {
    entry: {
        main: './index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/vendor\//, /node_modules\//],
                loader: 'babel',
                query: {
                    // https://github.com/babel/babel-loader#options
                    cacheDirectory: true,
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            /* Blog files */
            {
                test: /posts\/.*md/,
                loader: "blog",
                query: {
                    required: [ 'author', 'category', 'date', 'title'],
                    name: '[name].[ext]'
                }
            },
            /* Style loaders (supports css, sass/scss, less) */
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader", "css-loader"
                )
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader", "css-loader!sass-loader"
                )
            },

            /* Loads image files */
            {
                test: /\.(jpg|png|gif)$/,
                loader: "file?name=/images/[name].[ext]"
            },

            /* Loads font files (eg, from bootstrap, etc) */
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=/fonts/[name].[ext]"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=/fonts/[name].[ext]"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=/fonts/[name].[ext]"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=/fonts/[name].[ext]"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=/fonts/[name].[ext]"
            }
        ]
    },
    output: {
        filename: 'index.js',
        path: 'dist',
        libraryTarget: 'umd'
    },
    plugins: [
        new ExtractTextPlugin('css/bundle.css'),
        new StaticSiteGeneratorPlugin('main', paths, { template }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    devServer: {
        hot: true,
        noInfo: true,
        contentBase: './dist/'
    }
}
