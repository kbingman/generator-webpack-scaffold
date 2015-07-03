module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname,
        filename: 'public/js/app.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    }
};
