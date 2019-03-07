const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'public'),
        publicPath:'/build/',
        filename: 'build/bundle.js'
    },

    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_module/
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000,
        compress: true
    }
    
}

module.exports = config;