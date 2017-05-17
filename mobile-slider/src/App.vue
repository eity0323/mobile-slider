<template>
  <div id="app" class="wrap">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,
html {
    width: 100%;
    height: auto;
    
}
#app{
  height: 100vh;
  display:flex;
  flex-direction:column;
}

</style>
