
export default {
  mode: 'spa',
  
  /*
  ** Headers of the page
  */
 head: {
   title: process.env.npm_package_name || '',
   bodyAttr: {
     class: 'has-navbar-fixed-top has-navbar-fixed-bottom'
    },
    script: [
      {
        src: 'https://kit.fontawesome.com/347214cdeb.js'
        
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
      },
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
css: [
  'bootstrap',
  '~assets/styles/main.css',
  '~assets/styles/prep.scss'
],
env: {
  baseUrl: process.env.BASE_URL || 'https://localhost:3000',
},
/*
** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-filters'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    'bootstrap-vue/nuxt',

  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  
}
