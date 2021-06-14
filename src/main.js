import { createApp } from 'vue'
import App from './App.vue'
// import './index.css'
import router from './config/index'
import naive from 'naive-ui'

const app = createApp(App)
app.use(naive)
app.use(router)
app.mount('#app')
