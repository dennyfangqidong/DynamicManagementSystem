module.exports = {
    devServer: {
        port: 3444,
        host: localhost,
        open: true
    },
    css: {
        loaderOptions: {
            sass: {
                // @ - 表示相对路径
                prependData: `@import "./src/assets/scss/_variable.scss"`
            }
        }
    }
}