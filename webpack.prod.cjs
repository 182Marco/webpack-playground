// node method -> don't have to install
// dependeciy but you should always require it
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.ts',  // telling where entering our app and sturt budling
    mode: 'production',
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        }
    },
    module: { // explain what to do if you match reg-ex
        rules: [
            {
                test: /\.tsx?$/,//$ -> it must come at the end | "?"" after x makes it optional
                use: 'ts-loader',
                exclude: /node_modules/, // dipendecy we have in packaje.json
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),  // resolve method to intall 
        // a path that it's not gona be hardcoded -> you can run it from a diffrent
        // directory -> it's still gona work -> 2 params inside the current dirname
        // which it self should be inside the dist dir
        publicPath: '/dist'
    },
    plugins: [ new CleanWebpackPlugin()] // clean up the dist each time you re-build
};