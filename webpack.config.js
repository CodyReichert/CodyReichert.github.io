
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const fs = require('fs')
const ejs = require('ejs')
const template = ejs.compile(fs.readFileSync(`${__dirname}/template.ejs`, 'utf-8'))

const blogPaths = fs.readdirSync('./posts')
const blogNames = blogPaths.map(path => `posts/${path.replace('.md', '')}`)

const paths = [
    '/',
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

        ]
    },
    output: {
        filename: 'index.js',
        path: 'dist',
        libraryTarget: 'umd'
    },

    plugins: [
        new StaticSiteGeneratorPlugin('main', paths, { template })
    ]
}
