<template>
  <Layout>
    <template #menu>
      <Menu :items="menuMock" />
    </template>

    <router-view />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const menuMock = [
  {
    name: 'route1',
    path: 'route/1',
  },
  {
    name: 'route2',
    path: 'route/2',
  },
  {
    name: 'route3',
    path: 'route/3',
  },
];

export default defineComponent({
  name: 'App',

  setup() {
    return {
      menuMock,
    };
  },
});
</script>

<style lang="stylus">
@import "~/src/stylus/_stylebase.styl";
</style>
