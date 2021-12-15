<template>
  <div class="home">
    <section class="banner">banner</section>
    <section class="categorias">categorias</section>
    <section class="mais-pedidos">produtos mais comprados</section>
    <section class="cultura">Nossa cultura</section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang='scss' scoped>
  .home{
    // display: flex;
    // flex-flow: column nowrap;
    // align-content: center;
    height: calc(100vh - 50px);

    section{
      height: 400px;
      width: 100vw;
      border-top: 2px solid #c5c5c5;
    }
  }
</style>
