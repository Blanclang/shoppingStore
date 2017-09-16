<template>
    <div class="slideBox">
        <div class="slideImg">
            <a :href="slides[nowIndex].href">
                <!-- <img :src="slides[nowIndex].src"> -->
                <!-- <img src="./../assets/images/slideShow/pic2.jpg">
                <img src="./../assets/images/slideShow/pic3.jpg">
                <img src="./../assets/images/slideShow/pic4.jpg"> -->
                <transition name="slideTrans">
                    <img v-if="isShow" :src="slides[nowIndex].src">
                </transition>
                <transition name="slideTrans-old">
                    <img v-if="!isShow" :src="slides[nowIndex].src">
                </transition>
            </a>
        </div>
        <div class="slideInfo">
            <h3>{{slides[nowIndex].title}}</h3>
            <ul @mouseover="clearSlides" @mouseout="runSlides">
                <li @click="prevFun"> < </li>

                <li v-for="(item,index) in slides" :class="{slideActive:index == nowIndex}" @click="goto(index)" >{{index+1}}</li>

                <li @click="nextFun"> > </li>
            </ul>
        </div>
    </div>
  
</template>

<script>
    export default {
        props: {
            slides: {
                type: Array,
                default: []
            },
            inv: {
                type: Number,
                default: 1000
            }
        },
        // props:['slides','inv'],
        data () {
            return {
                nowIndex: 0,
                isShow: true,
                slidesImg:null
            }
        },
        computed: {
         
        },
        mounted () {

            console.log(this.slides);

            this.runSlides();
        },
        methods: {
            goto:function(i){
                // this.isShow = false
                // setTimeout(() => {
                //     this.isShow = true;
                //     this.nowIndex = i;
                // }, 10)
                this.nowIndex = i;
            },
            prevFun:function(){
                if(this.nowIndex <= 0){
                    this.nowIndex = this.slides.length - 1;
                }else{
                    this.nowIndex--
                }
            },
            nextFun:function(){
                if(this.nowIndex >= this.slides.length - 1){
                    this.nowIndex = 0;
                }else{
                    this.nowIndex++
                }
            },
            runSlides:function(){
                this.slidesImg = setInterval(function(){
                    this.nextFun();
                }.bind(this),this.inv);
            },
            clearSlides:function(){
                clearInterval(this.slidesImg);
            }
        }
        
    }
</script>

<style lang="less" scoped>
    .slideTrans-enter-active {
        transition: all .5s;
    }
    .slideTrans-enter {
        transform: translateX(900px);
    }
    .slideTrans-old-leave-active {
        transition: all .5s;
        transform: translateX(-900px);
    }
    .slideBox{
        width: 100%;
        height:100%;
        position:relative;
        z-index: 1;
        .slideImg{
            width: 100%;
            height:100%;
             white-space:nowrap;
            // align-items:flex-start;
            a{
                img{
                    width: 100%;
                    height:100%;
                }
            }
            
        }
        .slideInfo{
            width:100%;
            height:30px;
            position:absolute;
            left:0px;
            bottom:0px;
            background:rgba(0,0,0,0.6);
            color:#fff;
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:0px 10px;
            h3{}
            ul{
                display:flex;
                justify-content:space-between;
                align-items:center;
                li{
                    width:20px;
                    cursor: pointer;
                    &:hover{color:#ccc;}
                }
                li.slideActive{
                    color:pink;
                    text-decoration: underline;
                }
            }
        }
    }
</style>
