<template>
  <div id="app">
    <div class="content">
      <router-view style=" flex: 1;" @initSetting="initSetting"></router-view>
      <z-fold
        :defaultShow="false"
        :foldDir="'hr'"
        :iconClass="'el-icon-setting'"
        :fontSize="25"
      >
        <div class="buttons" style="width:200px">
          
          <router-link to="/mainProcessView">
            <button class="button">跳转到流程查看器</button>
          </router-link>
          <router-link to="/mainDrawingBoard">
            <button class="button">跳转到流程编辑器</button>
          </router-link>
          <router-link to="/set">
            <button class="button">跳转到set</button>
          </router-link>
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
    },
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
</style>
