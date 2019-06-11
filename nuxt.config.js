const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/element-ui'
    {src:'./plugins/element-ui.js',ssr:true}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
  ],
  proxy: [
    [
      '/api', 
      { 
        target: 'https://www.meituan.com', // api主机
        pathRewrite: { '^/api' : '/' }
      }
    ],
    [
      '/shopapi', 
      { 
        target: 'http://localhost:3000', // api主机
        pathRewrite: { '^/shopapi' : '/assets/api/detailApi' }
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    './assets/css/main.css',
    './assets/css/iconfont.css'
  ],
}
