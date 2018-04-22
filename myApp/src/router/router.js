import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from '../page/index/index'

const root = Vue.component('root',{
    template:'<router-view name="view"></router-view>'
})

export default new Router ({
    routes:[
        {
            path:'/',
            name:'index',
            component:Index
        }
    ]
})