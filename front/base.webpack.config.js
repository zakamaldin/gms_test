const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }
        ]
    },
    // output: {
    //     path: path.join(__dirname, "dist"),
    //     filename: "app.bundle.js"
    // },
    // optimization: {
    //     minimize: false
    // },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: path.resolve( __dirname, 'public/index.html' ),
    //         filename: 'index.html'
    //     })
    // ]
}