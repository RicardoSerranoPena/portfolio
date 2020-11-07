import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const VueScrollTo = require('vue-scrollto')

app.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease",
})
app.use(router)

app.mount('#app')
