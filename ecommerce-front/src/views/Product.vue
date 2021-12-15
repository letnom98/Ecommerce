<template>
  <div>This will  {{$route.params.id}} page </div>
</template>

<script>
export default {
name: 'Product',
data(){
    return{
        id: this.$route.params.id
    }
}
}
</script>

<style>

</style>