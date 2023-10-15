// Adapted from Vue router documentation
import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "@/App.vue";
import Home from "@/pages/index.vue";
import Explore from "@/pages/explore.vue";
import Social from "@/pages/social.vue";
import Group from "@/pages/group.vue";
//import Explore from "@/pages/explore.vue";
import VueGoogleMaps from '@fawmi/vue-google-maps'
import secrets from "../secrets.json"

const routes = [
  { path: '/', component: Home },
  { path: '/explore', component: Explore },
  { path: '/social', component: Social },
  { path: '/social/group/:id', component: Group },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(VueGoogleMaps, {
  load: {
      key: secrets.API_KEY
  },
})

app.mount('#app')
