import Vue from 'vue'
import VueRouter from "vue-router"
import Login from "../views/Login"
import Register from "../views/Register"
import HomePage from "../views/HomePage"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/home',
        component: HomePage
    }
]

const router = new VueRouter({
    routes
})

export default router
