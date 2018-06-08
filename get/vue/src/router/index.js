import Vue from 'vue'
import VueRouter from 'vue-router'
import inpu from '../components/inpu'
import infor from '../components/infor'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
 
                    {
                        path: "/",
                        component: inpu
                    },
                    {
                        path: "/infor",
                        component: infor
                    }

    ]
})