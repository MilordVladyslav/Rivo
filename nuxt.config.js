import axios from 'axios'

module.exports = {
  /*
  ** Headers of the page
  */  
  head: {
    title: 'Rivo agency web site developers company',
    link: [
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon/apple-touch-icon.png'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon-32x32.png'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon-16x16.png'},
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'},
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
    script: [
      { src: 'https://threejs.org/build/three.min.js', defer: true },
      { src: 'https://threejs.org/examples/js/loaders/OBJLoader.js', defer: true },
      { src: 'https://cdn.plrjs.com/player/dz34kdb2325ak/305sz0pg3df8.js', defer: true },
    ],
    css: ['nuxt-sass-resources-loader', {
        resources: 'assets/main.sass',
    }],
    meta: [
      { 
        property: 'og:image', content: '/favicon/logo_og.png',
        name: "viewport", content: "width=device-width, initial-scale=1.0"
      },
    ]
  },
  plugins: [
    { src: '~/plugins/vuelidate.js', ssr: false },
    { src: '~/plugins/vue-js-modal.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false },
    { src: '~/plugins/vue-number-animation.js', ssr: false },
    { src: '~/plugins/scrollmagic.js', ssr: false },
    { src: '~/plugins/threejs.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: false },
    { src: '~/plugins/vue-meta.js', ssr: false },
    { src: '~/plugins/lazyload.js', ssr: false },
  ],
  loading: { color: 'red' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['scrollmagic'],
    styleResources: {
      sass: './assets/style/main.sass'
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    },
  }, 
}


