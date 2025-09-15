import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Student from './components/Student.vue'
import Admin from './components/Admin.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/student', component: Student},
        {path: '/admin', component: Admin}
    ]
})

const app = createApp(App)

app.use(router);

app.mount('#app')
