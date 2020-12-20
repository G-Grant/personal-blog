import * as VueRouter from 'vue-router';

import Home from './pages/Home';
import Tag from './pages/Tag';
import About from './pages/About';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/tag',
        component: Tag,
    },
    {
        path: '/about',
        component: About,
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;
