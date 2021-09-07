const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:9060/",
                changeOrigin: true,
                ws: false,
                pathRewrite: {'^/api': '/'}
            }
        },
        host: '0.0.0.0',
        open: false
    },
    configureWebpack: config => {
        config.plugins.push(new CompressionWebpackPlugin(
            {
                algorithm: 'gzip',
                filename: '[path].gz[query]',
                test: /\.js$|\.html$|\.json$|\.css/,
                threshold: 4096,
                minRatio: 0.8,
                deleteOriginalAssets: false
            }
        ))
    }
}