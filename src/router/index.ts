import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

interface RouteMeta extends Record<string | number | symbol, unknown> {
    title: string;
    showInNav: boolean | undefined;
}

const routes: RouteRecordRaw[] = [
    {path: '/', component: () => import('@/views/Home.vue'), meta: {title: '首页', showInNav: true} as RouteMeta},
    {path: '/about', component: () => import('@/views/Snapshots.vue'), meta: {title: '截图', showInNav: true} as RouteMeta},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, _, next) => {
    window.document.title = `FishBai - ${to.meta.title as string || '鱼摆摆祈祷中...'}`;
    next();
});

export default router;