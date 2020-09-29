<!--
 * @Date: 2020-09-28 09:55:32
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
-->
<template>
  <div class="roleUserInfo">
    <div class="infoLeft">
      <RoleList />
    </div>
    <div class="infoRight"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RoleList from "./roleList/index.vue";
export default defineComponent({
  setup() {
    return {};
  },
  components: {
    RoleList
  }
});
</script>

<style lang="less" scoped>
.roleUserInfo {
  width: 100%;
  height: 100%;
  display: flex;
  .infoLeft {
    flex: 1;
  }
  .infoRight {
    flex: 4;
    margin-left: 20px;
  }
}
</style>
