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
        <a-sub-menu v-for="item in navConfig" :key="item.key">
          <template v-slot:title>
            <span>
              <user-outlined />
              <span>{{ item.name }}</span>
            </span>
          </template>
          <a-menu-item v-for="items in item.children" :key="items.key">
            {{ items.name }}
          </a-menu-item>
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
          margin: '24px 20px',
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
import Config from "@/common/config";
interface MenuItem {
  key: string;
}
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const menuState = reactive({
      navConfig: Config.navConfig,
      selectedKeys: [Config.navConfig[0].children[0].key],
      collapsed: false,
      openKeys: [Config.navConfig[0].key],
      preOpenKeys: [Config.navConfig[0].key]
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
