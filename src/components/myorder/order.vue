<template>
	<!-- 我的订单界面 -->
	<div id="order">
		<infonav></infonav>
		<div id="order-mian">
					<!-- 我的订单公共部分 -->
			<div id="ordercontent-1">
				<br>
				<span class="h2">我的订单</span>
				<div class="row h4">
					<br>
					<div class="col-xs-2 col-xs-offset-1 ordernav" @click="obligation($event)">待付款</div>
					<div class="col-xs-2 ordernav" @click="ondelivery($event)">待收货</div>
					<div class="col-xs-2 ordernav" @click="daipingjia($event)">待评价</div>
					<div class="col-xs-2 ordernav" @click="shouhou($event)">售后</div>
					<div class="col-xs-2 ordernav" @click="allorder($event)" style="color:#ff7f50">全部订单</div>
				</div>
			</div>
			<!-- 订单操作 -->
			<div id="ordercontent-2">
				<div style="width:40%;">订单详情</div>
				<div style="width:10%;border-left:2px solid #000;">收货人</div>
				<div style="width:10%;border-left:2px solid #000;">金额</div>
				<div style="width:20%;border-left:2px solid #000;">状态</div>
				<div style="width:20%;border-left:2px solid #000;">操作</div>
			</div>
			<router-view/>
			<!-- <allorder></allorder> -->
		</div>

		
	</div>
</template>
<script>
	import myheader from "../public/header.vue"
	import myfooter from "../public/footer.vue"
	import infonav from "../personinfo/infonav.vue"
	import allorder from "./allorder.vue"
	export default{
		components:{
			myheader,
			myfooter,
			infonav,
			allorder
		},
		methods:{
			allorder:function(e){
				this.$router.push({name:"allorder"})
				$(".ordernav").css("color","#000")
				e.currentTarget.style.color="#ff7f50"
			},
			obligation:function(e){
				this.$router.push({name:"obligation"})
				$(".ordernav").css("color","#000")
				e.currentTarget.style.color="#ff7f50"
			},
			ondelivery:function(e){
				this.$router.push({name:"ondelivery"})
				$(".ordernav").css("color","#000")
				e.currentTarget.style.color="#ff7f50"
			},
			daipingjia:function(e){
				this.$router.push({name:"daipingjia"})
				$(".ordernav").css("color","#000")
				e.currentTarget.style.color="#ff7f50"
			},
			shouhou:function(e){
				this.$router.push({name:"shouhou"})
				$(".ordernav").css("color","#000")
				e.currentTarget.style.color="#ff7f50"
			},

		}
	}
</script>
<style scoped>
	#order{
		width: 100%;
		background: rgb(209,209,209);
	}
	#order-mian{
		width: 60%;
		margin-top: 40px;
		margin-left: 20%;
		background: white;
	}
	/*我的订单公共部分*/
	#ordercontent-1>span{
		margin-left: 1%;
	}
	#ordercontent-1 div{
		text-align: center;
		font-size: 25px;
	}
	/*<!-- 订单操作 -->*/
	#ordercontent-2{

		background: rgb(173,169,167);
		height: 40px;
		line-height: 40px;
	}
	#ordercontent-2 div{
		background: rgb(173,169,167);
		float: left;
		font-size: 22px;
		height: 40px;
		text-align: center;

	}
	/*<!-- 订单详情 -->*/
	#ordercontent-3{
		margin-top: 12px;
	}
</style>