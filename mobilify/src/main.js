// Adapted from Vue router documentation
import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "@/App.vue";
import Home from "@/pages/index.vue";
import Explore from "@/pages/explore.vue";
import Social from "@/pages/social.vue";
//import Explore from "@/pages/explore.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/explore', component: Explore },
  { path: '/social', component: Social },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')
