<!--
 * @Date: 2020-09-21 14:07:47
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
-->
<template>
  <a-form layout="inline" :model="formInline" @submit="handleSubmit">
    <a-form-item>
      <a-input v-model:value="formInline.user" placeholder="Username">
        <template v-slot:prefix>
          <UserOutlined style="color:rgba(0,0,0,.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-model:value="formInline.password"
        type="password"
        placeholder="Password"
      >
        <template v-slot:prefix>
          <LockOutlined style="color:rgba(0,0,0,.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formInline.user === '' || formInline.password === ''"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, toRaw } from "vue";
import router from "@/router";
import Axios from "axios";
import Config from "@/common/config";
import { encode } from "@/common/util";
interface Res {
  ReturnCode: number;
}
export default defineComponent({
  setup() {
    const formInline = reactive({
      user: "",
      password: ""
    });
    const handleSubmit = () => {
      const data = toRaw(formInline);
      Axios({
        url:
          Config.gatewayUrl +
          "/backendaccount/login?username=" +
          data.user +
          "&password=" +
          encode(data.password),
        method: "post",
        headers: { "content-type": "application/x-www-form-urlencoded" }
      }).then(result => {
        if (result.data.ReturnCode === 0) {
          router.push({
            name: "Home"
          });
        }
      });
    };

    return { formInline, handleSubmit };
  },
  components: {
    UserOutlined,
    LockOutlined
  }
});
</script>
