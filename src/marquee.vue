<template>
  <div class="marqueeIn" ref="out" v-if="show">
    <div class="marqueeIn_" :class="run ? speed : 'static'">
      <span v-html="content" class="marquee" ref="in"></span>
      <span v-html="content" class="marquee" v-if="run"></span>
    </div>
    <div class="closeImg" @click="close">
      <img src="./closeBtn.png" width="12px" height="12px" class="closeBtn">
    </div>
  </div>
</template>
<style>
  .marqueeIn{
    font-size: 0;
    width: 100%;
    height: 24px;
    line-height: 24px;
    background-color: #ffe9db;
    overflow: hidden;
    color: #FF894A;
    position: relative;
  }
  .marqueeIn_{
    display: inline-block;
    white-space: nowrap;
    font-size: 0;
    /*position: absolute;*/
    /*left: 20px;*/
    /*animation: marquee 5s linear infinite;*/
  }
  .speed-1{
    animation: marquee 5s linear infinite;
  }
  .speed-2{
    animation: marquee 10s linear infinite;
  }
  .speed-3{
    animation: marquee 15s linear infinite;
  }
  .speed-4{
    animation: marquee 20s linear infinite;
  }
  .speed-5{
    animation: marquee 25s linear infinite;
  }
  .closeImg{
    position: absolute;
    right: 0;
    /*left:0;*/
    top:0;
    width: 24px;
    height: 24px;
    background-color: #ffe9db;
    z-index: 9999;
  }
  .closeBtn{
    position: absolute;
    top:7px;
    right:7px;
  }
  .marquee{
    font-size: 11px;
    display: inline-block;
    white-space: nowrap;
    padding-right: 200px;
  }
  .static{
    position: absolute;
    left: 20px;
    top: 0;
  }
  .static span{
    padding-left: 0;
    text-align: left;
  }
  @-webkit-keyframes marquee {
    0%  { -webkit-transform: translateX(0); }
    100% { -webkit-transform: translateX(-50%); }
  }
  @keyframes marquee {
    0%  { transform: translateX(0); }
    100% { transform: translateX(-50%);}
  }
</style>
<script>
//  let speedObj = {
//    'speed-1': 5,
//    'speed-2': 10,
//    'speed-3': 15,
//    'speed-4': 20,
//    'speed-5': 25,
//  }
  export default {
    name: 'VueMarquee',
    data (){
      return{
        run: false,
        pWidth: '',
        show: true
      }
    },
    props: {
      content: {
        default: "暂无内容",
        type: String
      },
      speed: {
        default: 'speed-2',
        type: String
      },
      showtwo: {
        default: false
      }
    },
    methods: {
      close() {
        this.show=false
      }
    },
    mounted(){
      this.$nextTick(() => {
        let out = this.$refs.out.clientWidth-44;
        let _in = this.$refs.in.clientWidth-200;
        this.run=_in>out?true:false;
//        if (_in>out) {
//          setTimeout(() => {
//            this.run = true
//          },1000)
//        }
//        setTimeout(() => {
//          alert()
//          this.$refs.in.className='marquee marquee_hsaNoPaddingLeft'
//          this.$refs.in_.className='marquee marquee_hsaNoPaddingLeft'
//        },speedObj[this.speed]*1000)
      })
    }
  }
</script>
