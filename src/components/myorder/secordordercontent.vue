<template>
<!-- 我的二手拍订单中的全部订单 -->

	<div id="secolrdordercontent">
		<!-- 我的二手拍订单公共部分 -->
		<div id="secolrdordercontent-1">
			<br>
			<span class="h2">二手拍</span>
			<div class="row h4">
				<br>
				<div class="col-xs-2 col-xs-offset-1">未成交</div>
				<div class="col-xs-2 ">交易成功</div>
				<div class="col-xs-2">已取消</div>
				<div class="col-xs-2">售后处理</div>
				<div class="col-xs-2">全部订单</div>
			</div>
		</div>
		<!-- 二手拍订单操作 -->
		<div id="secolrdordercontent-2">
			<div style="width:40%;">订单详情</div>
			<div style="width:10%;border-left:2px solid #000;">收货人</div>
			<div style="width:10%;border-left:2px solid #000;">金额</div>
			<div style="width:20%;border-left:2px solid #000;">状态</div>
			<div style="width:20%;border-left:2px solid #000;">操作</div>
		</div>
		<!-- 二手拍订单详情 -->
		<div id="secolrdordercontent-3"  v-for="item in items">
			<div id="secolrdordercontent-3-num">
				<span style="margin-left:8%">{{item.time}}</span>
				<span style="float:right;margin-right:8%">订单号:{{item.number}}</span>
			</div>
			<div id="secolrdordercontent-3-main">
				<div style="width:40%;border-left:2px solid #000;">
					<img :src="item.img" alt="1" class="secolrdordercontent-img">
					<span style="margin-left:6%">{{item.name}}&nbsp&nbsp九成新</span>

				</div>
				<div style="width:10%;border-left:2px solid #000;">{{item.people}}</div>
				<div style="width:10%;border-left:2px solid #000;">{{item.price}}</div>
				<div style="width:20%;border-left:2px solid #000;">{{item.status}}</div>
				<div style="width:20%;border-left:2px solid #000;">
					{{item.dowhat}}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				items:[
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:'2019年5月13日',number:"ak127232"},
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:"2019年5月13日",number:"ak127232"}
				]
			}
		}
	}
</script>
<style>
	#secolrdordercontent{
		width: 60%;
		margin-top: 40px;
		margin-left: 20%;
		background: white;
	}
	/*我的二手拍订单公共部分*/
	#secolrdordercontent-1>span{
		margin-left: 1%;
	}
	#secolrdordercontent-1 div{
		text-align: center;
		font-size: 25px;
	}
	/*<!-- 二手拍订单操作 -->*/
	#secolrdordercontent-2{
		background: rgb(173,169,167);
		height: 40px;
		line-height: 40px;
	}
	#secolrdordercontent-2 div{
		background: rgb(173,169,167);
		float: left;
		font-size: 22px;
		height: 40px;
		text-align: center;

	}
	/*<!-- 二手拍订单详情 -->*/
	#secolrdordercontent-3{
		margin-top: 12px;
	}
	#secolrdordercontent-3-num{
		clear: left;
		background: rgb(173,169,167);
		height: 40px;
		line-height: 40px;
		font-size: 20px;
		color: white;
	}
	#secolrdordercontent-3-main div{
		float: left;
		background: rgb(251,247,246);
		font-size: 22px;
		text-align: center;
		height: 120px;
		margin-bottom: 10px;
		line-height: 120px;

	}
	.secolrdordercontent-img{
		width: 40%;
		height: 80%;
	}
</style>