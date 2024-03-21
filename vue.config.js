const { defineConfig } = require('@vue/cli-service')
module.exports = {
  configureWebpack:config => {
    config.module.rules.push({
      test:/.worker.js$/,
      use:{ loader: 'worker-loader' }
    })
  },

  outputDir:'/home/www/country_doctor_ui',
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,

    //以上的ip和端口是我们本机的;下面为需要跨域的
    // proxy: {  //配置跨域
    //   '/api': {
    //     target: 'https://testapps-ui.ehealthnow.net',  //这里后台的地址模拟的;应该填写你们真实的后台接口
    //     ws: false,
    //     changOrigin: true,  //允许跨域
    //     pathRewrite: {
    //       '^/api': ''  //请求的时候使用这个api就可以
    //     }
    //   }
    // }
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      ['/prod-api']: {
        target: `http://testapps.ehealthnow.net`,
        // target: `http://localhost:8080`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + '/prod-api']: ''
        }
      }
    },
  }
}


