import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './config/router.js'

// createApp(App).mount('#app')
const app = Vue.createApp({})
app.use(router)
app.mount('#app')