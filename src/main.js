import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight, faChevronDown, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faFacebook, faWhatsapp, faHtml5, faCss3Alt, faVuejs, faWix, faPhp} from '@fortawesome/free-brands-svg-icons'

library.add(faEye) //regular
library.add(faAngleRight, faChevronDown, faTimes, faBars) //solid
library.add(faGithub, faLinkedin, faFacebook, faWhatsapp, faHtml5, faCss3Alt, faVuejs, faWix, faPhp) //brands

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
