import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import loadMarkdownEditer from './markdown';

const root = createApp(App);
loadMarkdownEditer(root);
root.mount('#app')
