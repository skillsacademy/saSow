
    // dependencies
    var webpack = require('webpack');
    var path = require('path');   
    var merge = require('webpack-merge');
    var ExtractTextPlugin = require("extract-text-webpack-plugin");

    // npm variables 

        //package.json = 
        // scripts": {
        //    "test": "echo \"Error: no test specified\" && exit 1",
        //    "prod": "webpack --p",
        //    "dev": "webpack-dev-server --port 3000 --hot --inline"
        //  },

    // OR

        // package.json = 
        // scripts": {
        //    "test": "echo \"Error: no test specified\" && exit 1",
        //    "prod": "SET NODE_ENV=prod&webpack --p",
        //    "dev": "webpack-dev-server --port 3000 --hot --inline"
        //  },

    var npmRunScript = process.env.npm_lifecycle_event;   // npm run dev === 'dev'


    // paths
    var paths = {
        src:path.resolve(__dirname, 'www/assets/js/myreact'),
        bundleOutput:path.resolve(__dirname, 'www/dist'),
        sass: path.resolve(__dirname, 'www/assets/sass'),
        devServer:path.resolve(__dirname, 'www')
    };


    // switch jsxLoaders depending on dev or prod mode
    var jsxLoaders = {
        test : /\.jsx?/,
        include : paths.src,
        exclude: /(node_modules|bower_components)/
    }
    var scssLoaders;

    if(npmRunScript === 'prod'){
        jsxLoaders.loader= 'babel';
        jsxLoaders.query = {
            cacheDirectory: true, //important for performance
            plugins: ["transform-regenerator"],
            presets: ["react", "es2015"]
        }   

        scssLoaders = { 
            test: /\.scss$/, 
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') 
        }

    }else{
        jsxLoaders.loaders = ['react-hot', 'babel'];

        scssLoaders = {
          test: /\.scss$/,
          loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
        }        
    }


    var config = {
        entry: {
            //'styles':  paths.sass + '/global.scss' , - creates global styles...
            'app': paths.src + '/index.jsx'
        },        
        output: {
            path: paths.bundleOutput,        
            publicPath:'/dist/', // Alias path to access javascript files from html page: /dist/bundle.js
            filename: '/bundle.js'
        },
        resolve: {
            root: [paths.src]
        }, 

        module : {
            loaders : [
                jsxLoaders,
                scssLoaders
            ]
        },
        plugins:[
            new ExtractTextPlugin('bundle.css', {
                allChunks: true // if true - ensures that the css for each component is bundled into one file, not separate files.
            })  
        ]
    };

    if(npmRunScript === 'dev') {

        config = merge(config, {
            //devtool: 'inline-eval-cheap-source-map', // optimize dev mode            
            devtool:'cheap-module-source-map',
            devServer: {
                contentBase: paths.devServer, 
                historyApiFallback: true,
                hot: true,
                inline: true,
                progress: true,
                stats: 'errors-only',
                host: process.env.HOST,
                port: process.env.PORT
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin()
            ]
        });

    }else{
        config = merge(config, {
            devTool:'cheap-module-source-map',
            plugins: [
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.DefinePlugin({
                    'process.env': {
                        'NODE_ENV': JSON.stringify('production')
                    }
                }),  
                new webpack.DefinePlugin({
                    '__DEVTOOLS__': false
                }),    
                new webpack.optimize.UglifyJsPlugin({
                    compressor: {
                        warnings: false
                    }
                })          
            ]
        });  

    }

    module.exports = config;