<template>
<div id="app">
  <app-header></app-header>
<section class="main-section section">
<div class="container content">
  <router-view></router-view>
</div>
</section>
<app-footer></app-footer>
</div>
</template>
<script>
import appheader from './appheader.vue'
import appfooter from './appfooter.vue'
export default {
  components: {
    'app-header': appheader,
    'app-footer': appfooter
  }
}
</script>
<style lang="scss">
$primary: #287ab1;
@import "~bulma";

.columns {
  flex-wrap: wrap;
}
</style>
