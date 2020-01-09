
import Vue from 'vue';
import Router from 'vue-router';

import Products from '../../Components/Products';
import App from '../../Components/App';
import Hello from '../../Components/Hello';


Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'homepage',
            component: App,
        },
        {
            path:'/products',
            name:'products',
            component: Products,

        },
        {
            path:'/hello',
            name:'hello',
            component:Hello,

        }
    ]
})