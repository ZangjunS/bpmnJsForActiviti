<template>
  <div>
    <div class="fold" v-bind:style="styleObject">
      <div v-show="isShow" class="fold-content">
        <slot></slot>
      </div>
      <div class="fold-ctrl"> 
        <i @click="changeShow" v-bind:class="[iconClass]" v-bind:style="{fontSize:fontSize+'px'}"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fold",
  props: {
    foldDir: String,
    fontSize: Number,
    iconClass: String,
    defaultShow: Boolean 
  },

  data() {
    return {

      styleObject: {
        display: "flex",

        flexDirection: (this.foldDir.startsWith("v") ? "column" : "row")
                      + (this.foldDir.endsWith("r") ? "-reverse"  : "" )
      },
      isShow: this.defaultShow == true
    };
  },
  mounted() {
    console.log(this.iconClass);
    // this.styleObject.justifyContent =
    //   this.foldDir.startsWith("v")  ? "flex-end" : "flex-start";
  },
  methods: {
    changeShow() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

 <style   scoped>
.fold {
}
</style>