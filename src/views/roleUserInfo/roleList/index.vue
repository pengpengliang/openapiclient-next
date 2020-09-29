<!--
 * @Date: 2020-09-28 11:07:20
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
-->
<template>
  <div class="roleList">
    <div class="listControl">
      <div class="title">角色列表</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.roleList {
  width: 100%;
  height: 100%;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  .listControl {
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    height: 40px;
    line-height: 40px;
    background-color: #ebf0f5;
    border-bottom: 1px solid #d2d2d2;
    .title {
      color: #a0a0a0;
    }
  }
}
</style>
