import { createApp } from 'vue'
import './style.css'
import {initRouter} from './router/index'
import App from './App.vue'
import { initStore } from './store'

let app=createApp(App)
initStore(app)
initRouter(app)
app.mount('#app')
