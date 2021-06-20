import Vue from 'vue'
import VueRouter from "vue-router"
import Login from "../views/Login"
import Register from "../views/Register"
import HomePage from "../views/HomePage"
import Main from "../views/business/Main"
import Notice from "../views/business/Notice"
import Settings from "../views/business/Settings"
import AmendPwd from "../views/business/settings/AmendPwd"
import About from "../views/business/settings/About"
import Goods from "../views/business/index/Goods"
import AddGoods from "../views/business/index/AddGoods"
import StoreSales from "../views/business/index/StoreSales"
import BusinessData from "../views/business/index/BusinessData"
import InventoryManagement from "../views/business/index/InventoryManagement"
import Shop from "../views/business/index/Shop"
import OrderManagement from "../views/business/index/OrderManagement"

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
        redirect: '/home/main',
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
                path: 'settings',
                component: Settings,
            },
        ]
    },
    {
        path: '/amendPwd',
        component: AmendPwd
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/goods',
        component: Goods
    },
    {
        path: '/goods/add',
        component: AddGoods
    },
    {
        path: '/store/sales',
        component: StoreSales
    },
    {
        path: '/business/data',
        component: BusinessData
    },
    {
        path: '/store',
        component: InventoryManagement
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/order',
        component: OrderManagement
    }
]

const router = new VueRouter({
    routes
})

export default router
