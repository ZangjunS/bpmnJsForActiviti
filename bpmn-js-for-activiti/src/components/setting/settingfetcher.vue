<template>
  <div class="settingfetcher"></div>
</template>

<script>
export default {
  props: {
    settingGroupName: String,
  },
  mounted() {
    var newSettings = {};
    for (var aSet in this.$store.state[this.settingGroupName]) {
      var aSetVal = this.$route.query[aSet];
      newSettings[aSet] = aSetVal;
    }
    // console.log(newSettings);
    // console.log(this.$route)
    this.$store.commit(this.settingGroupName, newSettings);
  },
  data() {
    return {};
  },
};
</script>

<style></style>
