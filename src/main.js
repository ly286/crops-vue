import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from 'axios';


// 将 Axios 添加到 Vue 实例的原型链上
const app = createApp(App);
app.config.globalProperties.$axios = axios;

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

