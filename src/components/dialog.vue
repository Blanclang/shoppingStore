<template>
    <div class="popupBox" >
        <div class="popupCover" v-if="isShowAttr"   v-on:click="closePopup()"></div>
        <transition  name="dropAn">
            <div class="popupContent" v-if="isShowAttr" v-on:click.stop="showPopup()">
                <div class="popupTit">
                    <h3>123</h3><span @click.stop="closePopup()">X</span>
                </div>
                <div class="popupCon">
                    <slot>empty</slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props:['isShowAttr','titleText'],
    data () {
        return {
        
        }
    },
    mounted(){
        console.log(this.isShowAttr);
        // console.log(this.titleText);
    },
    methods: {
        closePopup:function(){
            this.$emit('onClose',false)
        },
        showPopup:function(){
            this.isShowAttr = true;
        }
    }
}
</script>

<style lang="less" scoped>
    .dropAn-enter-active {
        transition: all .5s ease;
    }
    .dropAn-leave-active {
        transition: all .5s ease;
    }
    .dropAn-enter {
        transform: translateY(-500px);
    }
    .dropAn-leave-active {
        transform: translateY(-500px);
    }
    .popupBox {
        position: fixed;
        width: 100%;
        // height: 100%;
        // display:none;
    }
    .popupCover{
        background:rgba(0,0,0,0.5);
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .popupContent{
        width: 50%;
        position: fixed;
        max-height: 50%;
        overflow: auto;
        background: #fff;
        top: 20%;
        left: 50%;
        margin-left: -25%;
        z-index: 10;
        border: 2px solid #464068;
        padding: 1%;
        line-height: 1.6;
        .popupTit{
            width:100%;
            height:45px;
            padding-right: 20px;
            cursor:pointer; 
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .popupCon{
            width:100%;
            padding:10px;
        }

    }
</style>
