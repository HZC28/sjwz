<template>
<!-- 我的订单中的全部订单 -->

	<div id="allorder">
		
		<!-- 订单详情 -->
		<div id="allorder-3"  v-for="item in items">
			<div id="allorder-3-num">
				<span style="margin-left:8%">{{item.time}}</span>
				<span style="float:right;margin-right:8%">订单号:{{item.number}}</span>
			</div>
			<div id="allorder-3-main">
				<div style="width:40%;border-left:2px solid #000;">
					<img :src="item.img" alt="1" class="allorder-img">
					<span style="margin-left:10%">{{item.name}}</span>
				</div>
				<div style="width:10%;border-left:2px solid #000;">{{item.people}}</div>
				<div style="width:10%;border-left:2px solid #000;">{{item.price}}</div>
				<div style="width:20%;border-left:2px solid #000;">{{item.status}}</div>
				<div style="width:20%;border-left:2px solid #000;">
					<span v-for="w in item.what" id="allorder-dowhat">{{w}}</span>
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
					// {name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:'2019年5月13日',number:"ak127232"},
					// {name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					// {name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					// {name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					// {name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					// {name:'vivo',img:'',people:'黄先生',price:2200,status:'已收货',dowhat:'删除',time:"2019年5月13日",number:"ak127232"}
				]
			}
		},
		created:function(){
			console.log(this.items)
			var self=this
			$.ajax({
		    type: "GET",
			url: "../../../static/data/g.json",
		    success: function(data) {
		    	console.log(data)
		        self.items=data.items
		    }
			});
		},
	}
</script>
<style>
	#allorder{
		/*width: 60%;
		margin-top: 40px;
		margin-left: 20%;
		background: white;*/
		margin-top: 20px;
	}
	
	#allorder-3-num{
		clear: left;
		background: rgb(173,169,167);
		height: 40px;
		line-height: 40px;
		font-size: 20px;
		color: white;
	}
	#allorder-3-main div{
		float: left;
		background: rgb(251,247,246);
		font-size: 22px;
		text-align: center;
		height: 120px;
		margin-bottom: 10px;
		line-height: 120px;

	}
	.allorder-img{
		width: 40%;
		height: 80%;
	}
	#allorder-dowhat{
		color: red;
		display: block;
		width: 100%;
		height: 20px;
		margin-bottom: 10px;
		line-height: 100px;
	}
</style>