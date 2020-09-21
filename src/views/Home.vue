<!--
 * @Date: 2020-09-15 16:52:51
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
-->
<template>
  <h3>vue3响应式系统和methods</h3>
  <div>年龄:{{ myAge }}</div>
  <div>明年的年龄:{{ mylastAge }}</div>
  <a-button @click="AgeAdd">年龄+1</a-button>
  <a-button type="primary" @click="ageReduce">年龄-1</a-button>
  <div>姓名:{{ myName }}</div>
  <div>
    爱好:
    <div v-for="(hoppy, index) in hoppys" :key="index">{{ hoppy }}</div>
  </div>
  <div>来自 {{ state1.from }}</div>
  <Age :age="myAge" />
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  toRefs,
  reactive,
  watchEffect,
  watch,
  computed,
  provide
} from "vue";
import Age from "@/components/age.vue";
export default defineComponent({
  name: "Home",
  setup() {
    const myAge = ref(18);
    const myName = "liangzhanpeng";
    const state = reactive({
      hoppys: ["game"],
      count: 0
    });
    const state1 = reactive({
      from: "gz"
    });
    const mylastAge = computed(() => {
      // console.log(myAge, "myAge");
      return myAge.value + 1;
    });
    const methods = {
      AgeAdd() {
        myAge.value += 1;
      }
    };
    const ageReduce = () => {
      state.count -= 1;
    };
    watch(
      [myAge, () => state.count],
      ([newAge, newCount], [preAge, preCount]) => {
        console.log(newAge, preAge);
        console.log(newCount, preCount);
      }
    );
    watch(
      () => state.count,
      (count, prevCount) => {
        console.log(count, prevCount);
      }
    );
    watch(myAge, (count, prevCount) => {
      console.log(count, prevCount);
    });
    watchEffect(() => {
      // watch 副作用函数 首次加载会触发,当值发生变化也会触发
      // console.log("年龄:" + myAge.value);
      // console.log("爱好:" + state.hoppys);
    });
    provide("hobbys", state.hoppys);
    return {
      myAge,
      mylastAge,
      ...methods,
      ageReduce,
      myName,
      ...toRefs(state),
      state1
    };
  },
  components: {
    Age
  }
});
</script>
