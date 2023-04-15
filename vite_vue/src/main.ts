import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import loadMarkdownEditer from './markdown';
import initRouter from './routers';
import { initPinia } from '@/store/index'
const root = createApp(App);
loadMarkdownEditer(root);
initRouter(root);
initPinia(root);
root.mount('#app');
