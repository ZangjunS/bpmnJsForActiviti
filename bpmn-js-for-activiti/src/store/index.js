import Vue from "vue";
import Vuex from "vuex";

//挂载Vuex
Vue.use(Vuex);
var mainPanel = {
  "listInUrl": "",
  "modelInUrlTpl": "helloVueX",
  "modelOutUrlTpl": "bybyVueX",
};
var mainProcessViewer = {
  "listInUrl": "",
  "modelInUrlTpl": "helloVueX",
  // "modelOutUrlTpl": "bybyVueX",
};
var name = "hello Vue";

var settingCentre = new Map();
settingCentre.set("mainPanel", mainPanel);
settingCentre.set("name", name);
settingCentre.set("mainProcessViewer", mainProcessViewer);
var vuexParam = { state: {}, mutations: {} };
settingCentre.forEach((sVal, sName) => {
  vuexParam.state[sName] = sVal;
  vuexParam.mutations[sName] = (state, newSetting) => {
    // this is a merge function 
    console.log(newSetting);
    state[sName] = newSetting;
  };
});
// console.log(vuexParam);
//创建VueX对象
const store = new Vuex.Store(vuexParam);
// console.log(store);
export default store;
