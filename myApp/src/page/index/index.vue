<template>
    <div>
        <div class="shopWarp" :key="index" v-for="(merchant,index) in merChants">
            <div class="imgWarp">
                <img class="shopImg" src="./images/shop.png"  />
            </div>
            <div class="textWarp">
                <div class="firstWarp">
                    <h1>{{merchant.name}}</h1>
                    <div class="first">
                        <div class="firstleft">
                            <Start :score="score" style="display:inline-block"/>
                            <span style="margin-left:8px">{{merchant.score}}</span>
                            <span style="margin-left:10px">月售{{merchant.sellCount}}</span>
                        </div>
                        <div class="firstRight">
                            <span>{{merchant.time}}分</span> | 
                            <span>{{merchant.distance}}km</span>
                        </div>
                        
                    </div>
                </div>
                <ul class="seocond">
                    <li>起送 ￥15</li>
                    <li>｜ 配送 ￥5</li>
                    <li>｜ 人均 ￥18</li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import Start from '../../components/start/start'
import { merchantList } from '../../api/api'
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
    components:{Start},
    data(){
        return {
            score:3.5,
            sellCount:780,
            time:40,
            distance:4.1
        }
    },
    computed:{
        ...mapState([
            "merChants",
            "name"
        ]),
    },
    methods:{
        ...mapMutations([
            'getMerchantList'
        ]),
        ...mapActions([
            '_GETMECHANTLIST'
        ]),
    },
    mounted(){
        this.$store.dispatch('_GETMECHANTLIST');
    }
}
</script>

<style scoped>
body {
    font-size: 12px;
}
h1 {
    margin: 0;
    font-size: 28px;
}
.shopWarp {
    display: flex;
}
.shopImg {
    display: inline-block;
    width: 200px;
    height: 200px;
    text-align: left;
}
.imgWarp {
    width: 30%;
    
}
.textWarp {
    width: 70%;
}
.first {
    margin-top: 10px;
    display: flex;
    justify-content:space-between;
}
.seocond {
    padding-left: 0;
    margin: 0;
    margin-top: 10px;
    width: 400px;
    display: flex;
}
.seocond li {
    list-style: none;
}
</style>