<template>
  <div>
    <app-nav-bar></app-nav-bar>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer-nav></app-footer-nav>
  </div>
</template>

<script>
import NavBar from './main/NavBar.vue';

import FooterNav from './main/FooterNav.vue';
  export default {
    components: {
      'app-nav-bar': NavBar,
      'app-footer-nav': FooterNav
    },
    data () {
      return {
       
      }
    }
}
</script>


<style scoped>


</style>