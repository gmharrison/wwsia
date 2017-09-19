//require our dependencies
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    //the base directory (absolute path) for resolving the entry option
    context: path.resolve(__dirname, 'wwsia/static'),
    //the entry point we created earlier. Note that './' means
    //your current directory. You don't have to specify the extension  now,
    //because you will specify extensions later in the `resolve` section
    entry: './js/index.js',

    output: {
        //where you want your compiled bundle to be stored
        path: path.resolve('./wwsia/static/webpack_bundles/'),
        //naming convention webpack should use for your files
        filename: '[name]-[hash].js',
        // publicPath: '/static/'
    },
    plugins: [
        //tells webpack where to store data about your webpack_bundles.
        new BundleTracker({filename: './webpack-stats.json'}),
        //makes jQuery available in every module
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin("[name].scss"),
        new WebpackCleanupPlugin(),
        extractSass,
        // new CopyWebpackPlugin([ { from: './portfolio/static/img/', to: './img/'}])
    ],

    module: {
        loaders: [
            //a regexp that tells webpack use the following loaders on all
            //.js and .jsx files
            {test: /\.jsx?$/,
                //we definitely don't want babel to transpile all the files in
                //node_modules. That would take a long time.
                include: path.resolve(__dirname, 'wwsia/static'),
                exclude: /node_modules/,
                //use the babel loader
                loader: 'babel-loader',
                query: {
                    //specify that we will be dealing with React code
                    presets: ['react']
                }
            },
            {
              test: /\.scss$/,
              use: extractSass.extract({
                    use: [{
                        loader: "css-loader?url=false"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader",

                })
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.svg$/, loader: 'babel-loader?presets[]=es2015,presets[]=react!svg-react-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                {
                  loader: 'file-loader',
                  options: {
                    query: {
                      name:'webpack_bundles/img/[name].[ext]'
                    }
                  }
                },
                {
                  loader: 'image-webpack-loader',
                  options: {
                    query: {
                      mozjpeg: {
                        progressive: true,
                      },
                      gifsicle: {
                        interlaced: true,
                      },
                      optipng: {
                        optimizationLevel: 7,
                      },
                        name:'/img/[name].[ext]'
                    }
                  }
                }],
            }
        ]
    },

    resolve: {
        //tells webpack where to look for modules
        modules: ["./node_modules"],
        alias:{
          Img: path.resolve( __dirname, './wwsia/static/webpack_bundles/img/' )
        },
        //extensions that should be used to resolve modules
        extensions: ['.js', '.jsx', '.png']
    }
}