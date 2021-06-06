import { createApp } from 'vue'
import App from './App.vue'
// import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import router from './config/index'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
