<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['2']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
        <template v-for="item in MENU" :key="item.key">
          <template v-if="!item.children">
            <a-menu-item :key="item.key">
              <router-link :to="item.link">
                <component :is="item.icon"></component>
                <span>{{ item.title }}</span>
              </router-link>
            </a-menu-item>
          </template>
          <template v-else>
            <sub-menu :menu-info="item" :key="item.key" />
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { MENU } from './menu';
import SubMenu from './SubMenu.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    SubMenu,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    return {
      collapsed: ref<boolean>(false),
      MENU,
    };
  },
});
</script>
<style lang="less" scoped>
.layout {
  height: 100vh;
}
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
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.layout-header {
  background: #fff;
  padding: 0;
}
.layout-content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
}
</style>
