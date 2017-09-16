<template>
    <div class="selBoxSty">
        <ul>
            <li v-for="(item,index) in radioInfo" :class="{selActive:indexCo == index+1}" :code="item.val" @click="selData(index)">{{item.name}}</li>
            <!-- <li class="selActive">半年</li>
            <li>一年</li>
            <li>三年</li> -->
        </ul>
    </div>
</template>

<script>
export default {
    props:['radioInfo','indexCode'],
    // props: {
    //     radioInfo: {
    //         type: Array,
    //         default: []
    //     }
    // },
    data () {
        return {
            indexCo:this.indexCode
        }
    },
    mounted(){
        // console.log(this.radioInfo);
    },
    methods: {
        selData:function(i){
            this.$emit('listenRadioBox',this.radioInfo[i])
            console.log(i+1);
            this.indexCo = i+1;
            // console.log(this.radioInfo[i]);
        }
    }
}
</script>

<style lang="less" scoped>
    .selBoxSty{
        width: 100%;
        ul{
            display:flex;
            justify-content:flex-start;
            li{
                padding:3px 10px;
                margin-right: 6px;
                border:1px solid #ccc;
                border-radius: 4px;
                cursor: pointer;
                &:hover{
                    background:#f2f2f2;
                }
            }
            li.selActive{
                background:#4fc08d;
                border:1px solid #4fc08d;
                color:#fff;
            }

        }
    }
    
</style>
