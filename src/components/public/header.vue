<template>
	<!-- 头部组件 -->
	
	<div id="myheader">
		<div class="head text-right">
			<span @click="home($event)" class="myheader-nav" id="myheader-home">首页</span>
			<span v-if="user==''">
				<span @click="tologin($event)" class="myheader-nav">登录</span>
			</span>
			<span v-else>
					<span @click="myinfo($event)" class="myheader-nav">{{user}}</span>
			</span>
			<span @click="secordshop($event)" class="myheader-nav">二手拍</span>
			<span @click="cart($event)" class="myheader-nav">购物车</span>
			<span @click="myorder($event)" class="myheader-nav">我的订单</span>
			<span @click="myhelp($event)" class="myheader-nav">帮助信息</span>
		</div>
		
	</div>
</template>
<script scoped>
	export default{
		data:function(){
			return{
				
			}
		},
		props:["user"],
		methods:{
			home:function(e){
				this.$router.push('/home')
				$(".myheader-nav").css("color","#000")
				e.currentTarget.style.color="#ff7f50"

			},
			tologin:function(e){
				this.$emit("listenlogin")
				$(".myheader-nav").css("color","#000")
				$("#myheader-home").css("color","#ff7f50")
				
			},
			myinfo:function(e){
				this.$router.push('/myinfo')
				$(".myheader-nav").css("color","#000")
				e.currentTarget.style.color="#ff7f50"
			},
			secordshop:function(e){
				this.$router.push('/secordshop')
				$(".myheader-nav").css("color","#000")
				e.currentTarget.style.color="#ff7f50"
			},
			cart:function(e){
				if(this.user==''){
					this.tologin()
					return
				}
				this.$router.push('/cart')
				$(".myheader-nav").css("color","#000")
				e.currentTarget.style.color="#ff7f50"
			},
			myorder:function(e){
				if(this.user==''){
					this.tologin()
					return
				}
				this.$router.push('/order')
				$(".myheader-nav").css("color","#000")
				e.currentTarget.style.color="#ff7f50"
			},
			myhelp:function(){
				$(".myheader-nav").css("color","#000")
				e.currentTarget.style.color="#ff7f50"
			}
		}
	}
</script>
<style>
	#myheader{
		width: 80%;
		margin-left: 10%;
		background: rgb(251,247,246);
		height: 40px;
		font-size: 22px;
		line-height: 40px;
	}
	.head{
		margin-right: 5%
	}
	#myheader-home{
		color:#ff7f50;
	}
</style>