<template>
  <div>
    <processViewer></processViewer>
    <z-fold
      :defaultShow="false"
      :foldDir="'v'"
      :iconClass="'el-icon-setting'"
      :fontSize="25"
    >
      <settingfetcher :settingGroupName="'mainProcessViewer'"></settingfetcher>
      <setting :settingGroupName="'mainProcessViewer'"></setting>
    </z-fold>
  </div>
</template>

<script>
import processViewer from "@/components/processview/processViewer";
import zFold from "@/slot/folds/z-fold";
import setting from "@/components/setting/setting";
import settingfetcher from "@/components/setting/settingfetcher";
export default {
  components: { processViewer, zFold, setting, settingfetcher },
  data() {
    return {};
  },
};
</script>

<style></style>
