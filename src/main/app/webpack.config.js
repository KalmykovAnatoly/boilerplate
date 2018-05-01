module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        publicPath: "/",
        contentBase: "./src",
        hot: true,
        port:3000
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', "stage-0"]
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader",
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    }
};