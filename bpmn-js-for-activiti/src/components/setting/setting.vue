<template>
  <div>
    <div class="setting">
      <div v-for="(aSetVal, aSet, idx) in settingGroup" :key="aSet">
        <div>{{ idx }}.{{ aSet }}</div>
        <input v-model="settingGroup[aSet]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    settingGroupName: String,
    settingStyle: Object,
  },
  mounted() {
    this.settingGroup = this.$store.state[this.settingGroupName];
  },
  data() {
    return { settingGroup: {} };
  },
};
</script>
<style></style>
