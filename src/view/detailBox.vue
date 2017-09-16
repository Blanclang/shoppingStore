<template>
    <div class="concentArea">
        <div class="leftNav">
            <!-- <img src="./../assets/images/images/1.png" > -->
            <img :src="productIcon">
            <ul>
                <router-link v-for="(item,index) in navData" :to="{ path: item.path }" :key="index" tag="li" active-class="navActive">
                    {{item.name}}
                </router-link>
                <!-- <li v-for="(item,index) in navData">{{item.name}}</li> -->
                <!-- <li>分工会受到</li>
                <li>123</li>
                <li class="navActive">发发发</li>
                <li>公司的风格</li> -->
            </ul>
        </div>
        <div  class="rightConBox">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <!-- <div class="rightCon">
            <div class="conTit">流量分析</div>
            <div class="conExpain">
                是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的
            </div>
            <div class="buyInfoBox">
                <ul>
                    <li>
                        <label>ds高深的</label>
                    </li>
                </ul>
            </div>
        </div> -->
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            navData: [
                {
                    name: '数据统计',
                    path: 'count',
                    icon: require('./../assets/images/images/1.png'),
                    active: false
                },
                {
                    name: '数据预测',
                    path: 'forecast',
                    active: false
                },
                {
                    name: '流量分析',
                    path: 'analysis',
                    active: false
                },
                {
                    name: '广告发布',
                    path: 'publish',
                    active: false
                }
            ],
            imgMap: {
                '/detail/count': require("./../assets/images/images/1.png"),
                '/detail/forecast': require("./../assets/images/images/2.png"),
                '/detail/analysis': require("./../assets/images/images/3.png"),
                '/detail/publish': require("./../assets/images/images/4.png")
            }
        }
    },
    computed: {
        productIcon () {
            console.log(this.$route.path);
            return this.imgMap[this.$route.path]
        }
    }
}
</script>

<style lang="less" scoped>
    .concentArea{
        display:flex;
        justify-content:space-between;
        .leftNav{
            background:#fff;
            width: 200px;
            text-align: center;
            padding: 20px 0px;
            img{
                width:100px;
                height:100px;
            }
            ul{
                margin-top: 30px;
                li{
                    height:30px;
                    line-height: 30px;
                    text-align: left;
                    padding-left: 20px;
                    cursor: pointer;
                    &:hover{
                        background:#4fc08d;
                        color: #fff;
                    }
                }
                li.navActive{
                    background:#4fc08d;
                    color: #fff;
                }
            }
        }
        .rightConBox{
            background:#fff;
            width:880px;
        }        
    }
</style>
