
import {createRouter, createWebHistory} from 'vue-router'
import StartPage from "../pages/StartPage.vue";
import ChatPage from "../pages/ChatPage.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import ProfilePage from "../pages/ProfilePage.vue";

export const router = new createRouter({
    routes: [
        {
            path: '/chat',
            component: StartPage,
        },
        {
            path: '/chat/:id',
            component: ChatPage,
        },
        {
            path: '/',
            redirect: '/chat',
        },
        {
            path: '/profile',
            component: ProfilePage,
        }
    ],
    history: createWebHistory()
})
