import { createRouter, createWebHistory } from "vue-router";

const router = createRouter ({
  history: createWebHistory(),
  routes: [
        {
            path: '/',
            name: 'Home',
            redirect: '패스'
        },
        {
            path: '/',
            name: 'Home',
            component: '컴포넌트명'
        }
    ]
});

export default router;