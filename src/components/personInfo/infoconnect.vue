<template>
	<!-- 用户界面主要内容组件 -->
	<div id="infoconnect">
		<!-- 我的钱包 -->
		<div id="info1" class="info4">
			<br>
			<span class="h2">我的钱包</span>
			<div class="row h4">
				<br>
				<div class="col-xs-3">余额:0.00</div>
				<div class="col-xs-3">银行卡:2张</div>
				<div class="col-xs-3">红包:0</div>
				<div class="col-xs-3">优惠卷:0</div>
			</div>
			
		</div>
		<!-- 我的订单 -->
		<div id="info2" class="info4">
			<br>
			<span class="h2">我的订单</span>
			<div class="row h4">
				<br>
				<div class="col-xs-2 col-xs-offset-1">待付款</div>
				<div class="col-xs-2 ">待收货</div>
				<div class="col-xs-2">待评价</div>
				<div class="col-xs-2">售后</div>
				<div class="col-xs-2">全部订单</div>
			</div>
			
		</div>
		<!-- 二手拍 -->
		<div id="info3" class="info4">
			<br>
			<span class="h2">二手拍</span>
			<div class="row h4">
				<div class="col-xs-4">发布</div>
				<div class="col-xs-4">已发布</div>
				<div class="col-xs-4">已取消</div>
				<br><br>
				<div class="col-xs-4">交易成功</div>
				<div class="col-xs-4">未收货</div>
				<div class="col-xs-4">全部订单</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style>
	#infoconnect{
		width: 80%;
		margin-left: 10%;
	}
	.info4{
		margin-top: 20px;
		background:rgb(251,247,246);
		height: 120px;
	}
	/*我的钱包*/
	#info1>span{
		margin-left: 1%;
	}
	#info1 div{
		text-align: center;
	}
	/*我的订单*/
	#info2>span{
		margin-left: 1%;
	}
	#info2 div{
		text-align: center;
	}
	/*<!-- 二手拍 -->*/
	#info3{
		height: 150px;
	}
	#info3>span{
		margin-left: 1%;
	}
	#info3 div{
		text-align: center;
	}
</style>