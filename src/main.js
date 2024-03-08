import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from 'axios';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'; // 导入 Element Plus 的图标组件

const app = createApp(App);

// 使用 Element Plus 的图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 将 Axios 添加到 Vue 实例的原型链上
app.config.globalProperties.$axios = axios;

// 使用 Vue 实例
app.use(store)
   .use(router)
   .use(ElementPlus)
   .mount('#app');
