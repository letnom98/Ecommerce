<template>
  <div>
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
export default {
  components:{
    Header,
  }
}
</script>

<style lang='scss'>

:root{
  min-height: 100vh;
}

body{
  padding: 0px;
  margin: 0px;
  height: 100vh;
}
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Nova Round', cursive;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
