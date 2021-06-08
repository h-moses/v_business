import Vue from 'vue'
import VueRouter from "vue-router"
import Login from "../views/Login"
import Register from "../views/Register"
import HomePage from "../views/HomePage"
import Main from "../views/business/Main"
import Notice from "../views/business/Notice"
import Order from "../views/business/Order"
import Settings from "../views/business/Settings"

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
        component: HomePage,
        children: [
            {
                path: 'main',
                component: Main
            },
            {
                path: 'notice',
                component: Notice
            },
            {
                path: 'order',
                component: Order
            },
            {
                path: 'settings',
                component: Settings
            },
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
