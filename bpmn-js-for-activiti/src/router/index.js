import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/mainDrawingBoard'
},
{
    path: '/mainDrawingBoard',
    component: () =>
        import('./../components/panel/mainPanel')
},
{
    path: '/mainProcessView',
    component: () =>
        import('./../components/processview/mainView')
}
]

export default new Router({
    mode: 'hash',
    routes
})