<template>
    <div class="infoCon">
        <ul class="goodsCount">
            <li @click="delCount()">-</li>
            <li>{{count}}</li>
            <li @click="addCount()">+</li>
            <!-- <li @click="sendToFather()">></li> -->
        </ul>
        
    </div>
</template>

<script>
export default {
    // props:['vals'],
    props: {
        vals: {
            type: Number,
            default: 1000
        }
    },
    data () {
        return {
            count:this.vals
        }
    },
    mounted(){
        console.log(this.vals);
    },
    methods: {
        delCount:function(){
            if(this.count == 1){
                this.count==1;
            }else{
                this.count--
                this.$emit("listenChild",this.count);
            }
        },
        addCount:function(){
            if(this.count == 10){
                this.count==10;
            }else{
                this.count++
                this.$emit("listenChild",this.count);
            }
        },
        sendToFather:function(){
            this.$emit("listenChild",'子传父的值');
        }
    }
}
</script>

<style lang="less" scoped>
    .infoCon{
        .goodsCount{
            width:90px;
            border:1px solid #ccc;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            li{
                width:30px;
                height:27px;
                text-align: center;
                border-right:1px solid #ccc;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            li:last-child{
                font-size: 1.8rem;
                cursor:pointer;
                border-right:none;
                &:hover{background:#f2f2f2;}
            }
            li:first-child{
                font-size: 1.8rem;
                cursor:pointer;
                &:hover{background:#f2f2f2;}
            }
        }
    }
    
</style>
