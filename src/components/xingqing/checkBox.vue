<template>
    <div class="selBoxSty">
        <ul>

            <li v-for="(item,index) in checkBoxInfo" :class="{selActive:indexArr.indexOf(index) != -1}" @click="selCheckBox(index)">{{item.name}}</li>

        </ul>
    </div>
</template>

<script>
export default {
    props:['checkBoxInfo','indexArr'],
    data () {
        return {
            // selIndex:[]
        }
    },
    mounted(){
        // console.log(this.checkBoxInfo);
        // console.log(this.indexArr);
    },
    methods: {
        selCheckBox:function(i){
            if(this.indexArr.indexOf(i) == -1){
                this.indexArr.push(i);
            }else{
                this.indexArr.splice(this.indexArr.indexOf(i),1);
            }
            this.$emit('listenCheckBox',this.indexArr);
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
