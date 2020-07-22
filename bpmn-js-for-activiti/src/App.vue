<template>
  <div id="app">
    <div class="content">
      <router-view style=" flex: 1;" @initSetting="initSetting"></router-view>
      <z-fold :defaultShow="false" :foldDir="'hr'" :iconClass="'el-icon-setting'" :fontSize="25">
        <div class="buttons" style="width:200px">
          系统标识
          <el-input v-model="sysSetting.sysFlag" style="width:200px"></el-input>方法标识
          <el-input v-model="sysSetting.sysMethod" style="width:200px"></el-input>导入接口
          <el-input v-model="sysSetting.sysParamInUrl" style="width:200px"></el-input>导出接口
          <el-input v-model="sysSetting.sysParamOutUrl" style="width:200px"></el-input>
        </div>
      </z-fold>
    </div>
  </div>
</template>
<script>
import zFold from "@/slot/folds/z-fold";
export default {
  name: "app",
  // components: {Main},
  components: { zFold },
  data() {
    return { rootValue: "im root", sysSetting: {} };
  },
  methods: {
    initSetting(setting) {
      this.sysSetting = setting;
    }
  }
};
</script>


 <style   scoped>
#app {
  height: 100vh;
  width: 100vw;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  display: flex;
  justify-content: flex-start;
}
body {
  margin: 0;
}
</style>
