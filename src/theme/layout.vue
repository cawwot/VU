<template>
<div id="app">
  <app-header></app-header>
<section class="main-section section">
<div class="container content">
<category></category>
</div>
</section>
<app-footer></app-footer>
</div>
</template>
<script>
import appheader from './appheader.vue'
import appfooter from './appfooter.vue'
import category from './category.vue'
export default {
  components: {
    'app-header': appheader,
    'app-footer': appfooter,
    'category': category
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
