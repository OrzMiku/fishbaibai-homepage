import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: () => import('@/views/Home.vue'), meta: {title: '首页'}},
        {path: '/about', component: () => import('@/views/About.vue'), meta: {title: '关于'}},
    ]
});

router.beforeEach((to, _, next) => {
    window.document.title = `FishBai - ${to.meta.title as string || '鱼摆摆祈祷中...'}`;
    next();
});

export default router;