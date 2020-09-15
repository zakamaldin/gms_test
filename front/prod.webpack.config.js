const path = require("path");
const { merge } = require('webpack-merge');
const base = require('./base.webpack.config.js');
module.exports = merge(base, {
    mode: 'production',
    output: {
        path: path.join(__dirname, "..", "back", "static", "js"),
        filename: "app.bundle.js"
    },
});