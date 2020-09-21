<!--
 * @Date: 2020-09-18 11:30:33
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
-->
<template>
  <div>子组件年龄：{{ age }}</div>
  <a-button type="danger" @click="addAge">增加年龄</a-button>
  <div>{{ state.number }}</div>
  <div>子组件爱好：{{ hobby }}</div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from "vue";
interface Props {
  age: number;
}
export default defineComponent({
  props: {
    age: {
      type: Number,
      default: 0
    }
  },
  setup(props: Props) {
    const state = reactive({
      number: props.age
    });
    const addAge = () => {
      state.number += 1;
    };
    // props.age = 23;
    const hobby = inject("hobbys");
    return { props, state, addAge, hobby };
  }
});
</script>
