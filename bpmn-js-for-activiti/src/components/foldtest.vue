<template>
  <div>
    <z-fold :defaultShow="true" :foldDir="'vr'" :iconClass="'el-icon-delete-solid'" :fontSize="50">
      <div>hahaha</div>
      <div>hhhhhhhhh2</div>
    </z-fold>
  </div>
</template>

<script>
import zFold from "@/slot/folds/z-fold";
export default {
  components: { zFold }
};
</script>

 <style   scoped>
</style>