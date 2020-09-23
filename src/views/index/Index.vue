<!--
 * @Date: 2020-09-21 14:06:02
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
-->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
        @click="menuSelect"
      >
        <a-sub-menu key="sub1">
          <template v-slot:title>
            <span>
              <user-outlined />
              <span>Navigation One</span>
            </span>
          </template>
          <a-menu-item key="home">Option 1</a-menu-item>
          <a-menu-item key="about">Option 2</a-menu-item>
          <a-menu-item key="3">Option 3</a-menu-item>
          <a-menu-item key="4">Option 4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template v-slot:title>
            <span>
              <user-outlined />
              <span>Navigation Two</span>
            </span>
          </template>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="toggleCollapsed"
        />
        <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          minHeight: '280px'
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons-vue";
import { useRoute, useRouter } from "vue-router";
interface MenuItem {
  key: string;
}
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const menuState = reactive({
      selectedKeys: ["home"],
      collapsed: false,
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"]
    });
    onMounted(() => {
      const routePath: string = route.path.split("/")[1];
      const arr: string[] = [];
      arr.push(routePath);
      menuState.selectedKeys = arr;
    });
    watch(
      () => menuState.openKeys,
      (newValue, oldValue) => {
        menuState.preOpenKeys = oldValue;
      }
    );
    const menuMethod = {
      toggleCollapsed() {
        menuState.collapsed = !menuState.collapsed;
        menuState.openKeys = menuState.collapsed ? [] : menuState.preOpenKeys;
      },
      menuSelect(item: MenuItem) {
        const routePath = route.path.split("/")[1];
        if (item.key !== routePath) {
          router.push({
            path: "/" + item.key
          });
        }
      }
    };
    return { ...toRefs(menuState), ...menuMethod };
  },
  components: {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  }
});
</script>

<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  width: 100%;
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
