<template>
  <div>
    <app-nav-bar></app-nav-bar>
      <transition name="router-slide" mode="out-in">
      <!-- <transition name="router-slide"> -->
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
/*.router-slide-enter-active, .router-slide-leave-active {
  transition: opacity .3s ease;
}
.router-slide-enter, .router-slide-leave-to{
  opacity: 0;
}*/
.router-slide-enter-active {

  transition: all .5s ease;
}
.router-slide-leave-active {
  /*transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
  transition: all .5s cubic-bezier(0, 0, 1, 1);
}
.router-slide-enter{
  transform: translateX(250px);
  opacity: 0;
}
.router-slide-leave-to{
  transform: translateX(-250px);
  opacity: 0;
}



</style>