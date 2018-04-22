<template>
  <div class="start">
        <span class="start-item" v-for="itemClass in itemClasses" :class="itemClass"></span>
  </div>
</template>

<script>
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';
export default {
    
  data(){
      return{

      } 
  },
  props:{
      score:{
          type:Number
      }
  },
  computed:{
      itemClasses(){
          let result = [];
          let score = Math.floor(this.score*2)/2;
          let hasDecimal = score % 1 !== 0;
          let integer = Math.floor(score);
          for (let i=0;i<integer;i++){
              result.push(CLS_ON)
          }
          if (hasDecimal) {
              result.push(CLS_HALF);
          }
          if (result.length < 5) {
              result.push(CLS_OFF)
          }

          return result;
      }
  }
}
</script>

<style scoped>
.start{
    width: 100px;
}
.start-item {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-left: 5px;
}
.on {
    background: url('../../../static/star24_on@3x.png');
    background-size: 15px 15px;
}
.half {
    background: url('../../../static/star36_half@2x.png');
    background-size: 15px 15px;
}
.off {
    background: url('../../../static/star24_off@3x.png');
    background-size: 15px 15px;
}
</style>


