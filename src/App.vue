<template>
  <div id="app">
    <vue-marquee :content="mContent" speed="speed-3"></vue-marquee>
  </div>
</template>

<script>
  import vueMarquee from './marquee.vue'
  export default {
    name: 'app',
    components: {
      vueMarquee
    },
    data(){
      return{
        mContent:'marqueemarqueemarqueemarquee  ss test this is marquee test '
      }
    }
  }
</script>

<style>
  #app {
    font-size: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
