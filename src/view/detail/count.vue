<template>
    <div class="rightCon">
        <div class="conTit">数据统计</div>
        <div class="conExpain">
            是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的
        </div>
        <div class="buyInfoBox">
            <ul>
                <li>
                    <label>购买数量：</label>
                    <div class="infoBox">
                        <VCounter :vals="countData" @listenChild="showChildMsg"></VCounter>
                        <!-- <ul class="goodsCount">
                            <li @click="">-</li>
                            <li>1</li>
                            <li @click="">+</li>
                        </ul> -->
                    </div>
                </li>
                <li>
                    <label>产品类型：</label>
                    <div class="infoBox">
                        <select class="productSel" v-model="selected" @change="selFun()">
                            <option v-for="item in productType" :value="item.val">{{item.name}}</option>
                        </select>
                    </div>
                </li>
                <li>
                    <label>有效时间：</label>
                    <div class="infoBox">
                        <VRadioBox :radioInfo="radioData" :indexCode="activeIndex" @listenRadioBox="getRadioBox('buyType',$event)"></VRadioBox>    
                    </div>
                </li>
                <li>
                    <label>产品版本：</label>
                    <div class="infoBox">
                        <VCheckBox :checkBoxInfo="checkBoxData" :indexArr="checkIndex" @listenCheckBox="getCheckBox($event)"></VCheckBox>
                    </div>
                </li>
                <li>
                    <label>总价：</label>
                    <div class="infoBox">{{priceData}}</div>
                </li>
            </ul>
        </div>
        <div class="infoBtnBox">
            <a @click="bayGoods">立即购买</a>
        </div>
    </div>
</template>

<script>

import VCounter from '../../components/xingqing/counter'
import VRadioBox from '../../components/xingqing/radioBox'
import VCheckBox from '../../components/xingqing/checkBox'

export default {
    components: {
        VCounter,
        VRadioBox,
        VCheckBox
    },
    data () {
        return {
            selected:11,
            productType:[
                {val:11,name:'入门版'},
                {val:22,name:'普通版'},
                {val:33,name:'精英版'},
                {val:44,name:'豪华版'},
                {val:55,name:'旗舰版'}
            ],
            radioData:[
                {val:111,name:'半年'},
                {val:112,name:'一年'},
                {val:113,name:'两年'},
                {val:114,name:'三年'}
            ],
            checkBoxData:[
                {val:221,name:'客户端'},
                {val:222,name:'代理商版'},
                {val:223,name:'商家版'},
                {val:224,name:'专家版'}
            ],
            activeIndex:1,
            checkIndex:[0,2],
            countData:1,
            priceData:1200

        }
    },
    methods: {
        selFun:function(){
            console.log(this.selected);
        },
        showChildMsg:function(data){
            this.countData = data;
            console.log(data);
        },
        getRadioBox:function(type,data){
            this.activeIndex = data;
            console.log(data);
        },
        getCheckBox:function(data){
            this.checkIndex = data;
            console.log(data);
        },
        bayGoods:function(){
            var info = "数量:"+this.countData+"—类型:"+this.selected+"—有效时间:"+this.activeIndex+"—产品版本:"+this.checkIndex+"—总价:"+this.priceData
            alert(info);
        }
    },
    mounted () {

    }
}
</script>

<style lang="less" scoped>
    .rightCon{
        background:#fff;
        width:100%;
        .conTit{
            height:50px;
            line-height: 50px;
            font-size: 1.8rem;
            padding-left: 20px;
        }
        .conExpain{
            background:#f7fcff;
            color:#999;
            padding:8px 20px;
            line-height: 20px;
        }
        .buyInfoBox{
            padding:20px;
            ul{
                width:500px;
                li{
                    width:100%;
                    height:45px;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    label{
                        width:100px;
                        text-align: right;
                    }
                    .infoBox{
                        width:480px;
                        height:100%;
                        padding-left: 20px;
                        // border:1px solid green;
                        display:flex;
                        justify-content:flex-start;
                        align-items:center;
                        .productSel{
                            width:90px;
                            height:28px;
                            border:1px solid #ccc;
                        }
                    }
                }
            }
        }
        .infoBtnBox{
            padding-left: 125px;
            margin: 20px 0px 30px;
            a{
                display:block;
                width:100px;
                height:35px;
                border-radius: 3px;
                line-height: 35px;
                text-align: center;
                background:#4fc08d;
                cursor: pointer;
                color:#fff;
            }
        }
    }        
</style>
