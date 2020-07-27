import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import './assets/css/app.css'// app
import 'element-ui/lib/theme-chalk/index.css';
// 以下为bpmn工作流绘图工具的样式
// import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css' // 右边工具栏样式
import './assets/css/panel.css'// 右边工具栏样式
import './assets/css/processing.css'// app
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'




import ElementUI from 'element-ui';


Vue.use(ElementUI);
new Vue({
    router,
    store,  //store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
    data() {
        return { rootValue: "this root" }
    },
    render: h => h(App),
}).$mount('#app')