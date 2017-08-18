<template>
    <div>
        <span>Это плеер</span>
        <router-link to="/">Home</router-link>
    </div>
</template>
<script>
  export default {
    name: 'header',
    data: function () {
      return {
        user: ''
      }
    }
  }
</script>
<style scoped="player">
    span {
        color: #000;
    }
</style>