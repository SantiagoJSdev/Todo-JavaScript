

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [
            { 
     test: /\.html$/i,
     loader: 'html-loader',
     options: {
        sources: false,
         },
        },
        {
            test: /\.css$/i,
            exclude: /style.css$/,
            use: ['style-loader', 'css-loader']

        },
        {
            test: /styles.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],

        },
        {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'file-loader'

        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi app',
            template: './src/index.html',
            filename: './index.html'

        }),
        new MiniCssExtractPlugin({
           
            insert: "#some-element",
          }),
          new CopyPlugin ({
              patterns: [
               {  from : 'src/assets/', to: 'assets/'}
              ]
          }),
    ]
    }


//     entry: './src/index.js',
//      output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
