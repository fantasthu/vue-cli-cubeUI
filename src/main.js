import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './cube-ui'
import 'amfe-flexible'
import apiInsetall from './network/apiInstall'
import install from './install'

Vue.config.productionTip = false
Vue.use(apiInsetall)
Vue.use(install)
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
