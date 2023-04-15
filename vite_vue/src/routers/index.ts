import {createRouter, createWebHashHistory, RouteRecordRaw, } from 'vue-router';
import { App } from 'vue';
import { getCookie } from '@/configs/cookie';

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        name: '/',
        component: () => import('@/pages/homePage.vue')
    },
    {
        path: '/homePage',
        name: 'homePage',
        component: () => import('@/pages/homePage.vue')
    },
    {
        path: '/createArticle',
        name: 'createArticle',
        component: () => import('@/pages/createArticle.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default function initRouter(app: App<Element>):void {
    app.use(router)
}