<template>
  <div class="pt-page">
    <app-nav-bar></app-nav-bar>
      <!-- <transition name="router-slide" mode="out-in"> -->
      <transition name="router-slide">
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
/*.router-slide-enter-active {

  transition: all .5s ease;
}
.router-slide-leave-active {
  transition: all .5s cubic-bezier(0, 0, 1, 1);
}
.router-slide-enter{
  transform: translateX(250px);
  opacity: 0;
}
.router-slide-leave-to{
  transform: translateX(-250px);
  opacity: 0;
}*/
.pt-page{
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
}

/*///////*/
.router-slide-enter-active {
  /*-webkit-animation: moveFromRight .6s ease both;*/
  /*transition: all .1s ease both;*/
  -webkit-animation: moveFromRight .6s ease both;
  animation: moveFromRight .6s ease both;
  /*animation-delay: .1s;*/
  opacity: 1;
  
}
.router-slide-leave-active {
  /*-webkit-animation: moveToLeft .6s ease both;*/
  -webkit-animation: moveToLeft .6s ease both;
  animation: moveToLeft .6s ease both;
  opacity: 1;
  /*transition: all .6s ease both;*/
}
.router-slide-enter{
  /*opacity: 0;*/
}
.router-slide-leave-to{
  /*opacity: 0;*/
}
@keyframes moveToLeft {
  from { }
  to { 
      -webkit-transform: translateX(-100%); 
      transform: translateX(-100%);
     }
}
@keyframes moveFromLeft {
  from { -webkit-transform: translateX(-100%); transform: translateX(-100%); }
}
@keyframes moveFromRight {
  from { -webkit-transform: translateX(100%); transform: translateX(100%); }
}



</style>