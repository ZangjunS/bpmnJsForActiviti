import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/main'
}, 
{
    path: '/main',
    component: () =>
        import('./../components/main')
}

]

export default new Router({
    mode: 'hash',
    routes
})