<template>
    <div class="concentArea">
        <div class="areaLeft">
            <div class="leftNavBox">
                <div class="navTit">全部产品</div>
                <div class="navCon">
                    <h3>PC产品</h3>
                    <ul>
                        <li><a href="#">数据统计</a></li>
                        <li><a href="#">流量分析<span>hot</span></a></li>
                        <li><a href="#">广告发布</a></li>
                    </ul>
                </div>
                <div class="navCon">
                    <h3>手机应用类</h3>
                    <ul>
                        <li><a href="#">91助手</a></li>
                        <li><a href="#">产品助手<span>hot</span></a></li>
                        <li><a href="#">智能地图</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="areaRight">
            <div class="bannerBox"> 
                <slideShow :slides="slidesData" :inv="invTime"></slideShow>
            </div> 
            <div class="mkBox">
                <ul>
                    <li v-for="item in ">
                        <img src="../assets/images/images/1.png"/>
                        <div class="moCon">
                            <h3>开放产品</h3>
                            <p>开放产品是一款开放产品</p>
                            <router-link :to="{path: 'detail/count'}">立即购买</router-link>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/images/images/3.png"/>
                        <div class="moCon">
                            <h3>品牌营销</h3>
                            <p>品牌营销帮助你的产品更好地找到定位</p>
                            <router-link :to="{path: 'detail/forecast'}">立即购买</router-link>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/images/images/2.png"/>
                        <div class="moCon">
                            <h3>使命必达</h3>
                            <p>使命必达快速迭代永远保持最前端的速度</p>
                            <router-link :to="{path: 'detail/analysis'}">立即购买</router-link>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/images/images/4.png"/>
                        <div class="moCon">
                            <h3>勇攀高峰</h3>
                            <p>帮你勇闯高峰，到达事业的顶峰</p>
                            <router-link :to="{path: 'detail/publish'}">立即购买</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import slideShow from './../components/slideShow.vue'
    export default {
        components:{
            slideShow
        },
        name: 'hello',
        data () {
            return {
                invTime: 2000,
                slidesData: [
                    {
                      src: require('../assets/images/slideShow/pic1.jpg'),
                      title: 'xxx1',
                      href: 'detail/analysis'
                    },
                    {
                      src: require('../assets/images/slideShow/pic2.jpg'),
                      title: 'xxx2',
                      href: 'detail/count'
                    },
                    {
                      src: require('../assets/images/slideShow/pic3.jpg'),
                      title: 'xxx3',
                      href: 'http://xxx.xxx.com'
                    },
                    {
                      src: require('../assets/images/slideShow/pic4.jpg'),
                      title: 'xxx4',
                      href: 'detail/forecast'
                    }
                ]
            }
        },
        mounted(){
            this.submitFun();
        },
        methods:{
            submitFun:function(){
                // axios.get('https://bird.ioliu.cn/joke/rand?type=text', {})
                // .then(function (response) {
                //     console.log(11111);
                //     console.log(response);

                // })
                // .catch(function (error) {
                //     console.log(error);
                // });
                console.log('test');
                this.$ajax({
                    method: 'post',
                    url: 'https://bird.ioliu.cn/joke/rand?type=text',
                    data: {
                        name: 'wise',
                        info: 'wrong'
                    }
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .concentArea{
        display:flex;
        justify-content:space-between;
        .areaLeft{
            width: 280px;
            .leftNavBox{
                .navTit{
                    padding:7px 12px;
                    background:#4fc08d;
                    color:#fff;
                }
                .navCon{
                    background:#fff;
                    border-bottom:1px solid #ccc;
                    padding-bottom: 10px;
                    h3{
                        padding:10px 12px;
                        font-weight: bold;
                    }
                    ul{
                        li{
                            a{
                                display:block;
                                padding:2px 12px;
                                span{
                                    color:red;
                                    padding-left: 10px;
                                }
                                &:hover{color:#757575;}
                            }

                        }
                    }
                }
            }
        }
        .areaRight{
            width: 800px;
            .bannerBox{
                width:100%;
                height:480px;
                background:#ccc;
            }
            .mkBox{
                width:100%;
                ul{
                    width:100%;
                    margin: 20px 0px;
                    overflow:hidden;
                    li{
                        float:left;
                        width:391px;
                        height:150px;
                        margin-bottom: 18px;
                        margin-right: 18px;
                        background:#fff;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        padding-left: 10px;
                        img{
                            width:100px;
                            height:100px;
                        }
                        .moCon{
                            width:260px;
                            height:100%;
                            padding-top: 20px;
                            h3{
                                font-size: 18px;
                                font-weight: bold;
                            }
                            p{
                                padding: 10px 0px;
                                margin-bottom: 10px;
                            }
                            a{
                                background:#4fc08d;
                                color:#fff;
                                border:none;
                                padding:7px 15px;
                            }
                        }
                    }
                    li:nth-child(2n){
                        margin-right: 0px;
                    }
                }
            }
        }
    }

</style>
