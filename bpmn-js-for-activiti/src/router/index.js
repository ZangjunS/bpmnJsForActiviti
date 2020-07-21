import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/main'
},
// {
//     path: '/app',
//     component: () =>
//         import('./../App')
// },
{
    path: '/fold',
    component: () =>
        import('./../components/foldtest')
},
{
    path: '/main',
    component: () =>
        import('./../components/main')
},
{
    path: '/modelList',
    component: () =>
        import('./../components/modelList')
},
{
    path: '/panel',
    component: () =>
        import('./../components/panel/panel')
},
 
]

export default new Router({
    mode: 'hash',
    routes
})