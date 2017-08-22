<template>
    <div>
        <genre-tab></genre-tab>
        <span>Это плеер</span>
        <router-link to="/">Home</router-link>
        <span @click="ahuet()"
              v>lala</span>
    </div>
</template>
<script>
  import GenreTab from './GenreTab.vue'
  import axios from 'axios'

  export default {
    name: 'header',
    data: function () {
      return {
        user: ''
      }
    },
    methods: {
      ahuet () {
        axios.get('/readme.md').then(r => console.log(r.data))
      }
    },
    components: {
      'genre-tab': GenreTab
    }
  }
</script>
<style scoped="player">
    span {
        color: #000;
    }
</style>