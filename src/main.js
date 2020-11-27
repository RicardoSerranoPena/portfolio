import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)
library.add(fas)

const app = createApp(App)
const VueScrollTo = require('vue-scrollto')

app.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease",
})
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
