import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/theme-chalk/display.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)

app.mount('#app')
