var path = require('path');
module.exports = {
    devtool: 'source-map',

    entry: './src/playing-card/playing-card.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: /src/,
                exclude: /(node_modules|dist)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    externals: {
        'styled-components': 'commonjs styled-components',
        'react': 'commonjs react'
    }
};
