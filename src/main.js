import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from "./route/index.js";
import axios from 'axios'


createApp(App).use(store).use(ElementPlus).use(router,axios).mount('#app')

// createApp(App).mount('#app')
