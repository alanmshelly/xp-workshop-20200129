module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: './compiledApp.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}