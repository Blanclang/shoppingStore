<template>
	<header>
		<div class="topSty">
			<router-link :to="{path: '/'}">
	          	<img src="./../../assets/images/logo.png">
	        </router-link>
			<div class="loginBox">
				<span @click="loginFun">登录</span>
				<span>注册</span>
				<span>关于</span>
			</div>
		</div>
		<VDialog :isShowAttr="buyShow" :titleText="titInfo" @onClose="closeFun">
			<div class="pupopCore">
                <p><input type="text" placeholder="用户名" /></p>
				<p><input type="text" placeholder="密码" /></p>
            </div>
            <div class="popupFoot">
                <button>取消</button>
                <button>确定</button>
            </div>
		</VDialog>
	</header>	
</template>

<script>
	import VDialog from "./../../components/dialog"
	export default{
		data(){
			return{
				buyShow:false,
				titInfo:'登录'
			}
		},
		mounted(){
			
		},
		computed:{

		},
		methods:{
			loginFun:function(){
				this.buyShow = true;
			},
			closeFun:function(){
				this.buyShow = false;
			}
		},
		components:{
			VDialog
		}
	}
</script>
<style lang="less" scoped>
	header{background: #363636;width: 100%;height:90px;}
	.topSty{
		width:1100px;
		height:100%;
		margin:0 auto;
		display:flex;
		justify-content:space-between;
		align-items:center;
		img{
			width:65px;
			height:60px;
		}
		.loginBox{
			color:#b2b2b2;
			span{
				padding: 0px 8px;
				border-right:1px solid #b2b2b2;
				cursor:pointer;
				&:hover{
					color:#ccc;
				}
			}
			span:last-child{
				border-right:none;
			}
		}
	}
	.pupopCore{
        padding:10px 0px;
    }
    .popupFoot{
        width:100%;
        height:40px;
        padding-right: 20px;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        button{
            cursor: pointer;
            padding:6px 20px;
            margin:0px 5px;
            background:#FF4081;
            border:none;
            color:#fff;
        }
    }
</style>