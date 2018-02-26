<template>
  <div id="app">
    <vue-marquee :content="mContent" speed="speed-3"></vue-marquee>
    <h2>表土amm</h2>
    <h2>表土amm</h2>
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
        mContent:'this is marquee test this is marquee test this is marquee test this is marquee test '
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
