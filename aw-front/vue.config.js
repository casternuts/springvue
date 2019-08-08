/*
    webpack 모듈을 덮어 씌울수 있는 부분,
    vue ui 명령어로 생성된 파일임.
    module.exports 형식으로 설정을 변경 가능
*/
//  module.exports = {
//    assetsDir: 'assets'
//  }
//  module.exports = {
//   baseUrl: "./",
//   build: {
//     assetsPublicPath: '/',
//     assetsSubDirectory: 'static'
//   }
// }


const path = require('path');
// @를 src 경로로 치환 한다.
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, './src'));
    },
    devServer: {
        proxy: 'http://localhost:3001'
    },
    assetsDir: "static",
    outputDir: "../src/main/resources/static",
    indexPath: "../static/index.html",



    publicPath: undefined,
    //outputDir: undefined,
    //assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined,
    lintOnSave: false,
}



