import Vue from 'vue'
import VueRouter from 'vue-router'
import mainCom from './mainCom'
import formTemplate from './formTemplate'
import submitPopup from './submitPopup' 

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path:'/',
            name:'mainCom',
            component:mainCom
        },
        {
            path:'/formTemplate', 
            name:'formTemplate',
            component:formTemplate
        },
        {
            path:'/submitPopup',
            name:'submitPopup',
            component:submitPopup
        }
    ]
})