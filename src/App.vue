<template>
  <component :is="layout" />
</template>

<script>
import LayoutNoShell from './layouts/layout-no-shell.vue';

export default {
  components: {
    LayoutNoShell
  },
  data() {
    return {
      layout: 'layout-no-shell'
    }
  },
  watch: {
    $route(newVal) {
      // implement layout change here based on your route
      this.layout = 'layout-no-shell';
    }
  }
}
</script>
