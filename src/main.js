import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import VeeValidate from 'vee-validate';
import messages from './components/global/message'
import '@/assets/css/font-awesome.css'
import VueI18n from 'vue-i18n'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(VeeValidate)

const i18n = new VueI18n({
  locale: 'ru', // set locale
  messages: messages, // set locale messages
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
