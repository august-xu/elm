import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import World from '../components/World'
import Login from '../components/Login'
import Home from '../components/Home'
import OrderList from '../components/OrderList'


Vue.use(Router)

export default new Router({

    mode: "history",

    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello,
        },
        {
            path: '/world',
            name: 'World',
            component: World
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children:[
                {
                   path:'order/:userid',
                    component:OrderList

                }
            ]
        }
    ]
})
