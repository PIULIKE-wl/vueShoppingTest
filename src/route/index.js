import {  createWebHistory,createRouter } from 'vue-router'
import mainPage from '../components/mainPage.vue'
import shoppingCar from '../components/shoppingcar.vue'
import top from '../components/top.vue'

const history = createWebHistory();

export default createRouter({
    history,
    routes:[
        {
            path:'/top',
            name:'top',
            component:top,
            children:[
                {
                    path:'/mainPage',
                    name:'mainPage',
                    component:mainPage
                },
                {
                    path:'/shoppingCar',
                    name:'shoppingCar',
                    component:shoppingCar
                }
            ]
        }
    ]
})