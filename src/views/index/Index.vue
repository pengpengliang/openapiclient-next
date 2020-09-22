<!--
 * @Date: 2020-09-21 14:06:02
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
-->
<template>
  <span>123</span>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Config from "../../common/config";
export default defineComponent({
  setup() {
    onMounted(() => {
      console.log(Config);
    });
    return {};
  }
});
</script>
