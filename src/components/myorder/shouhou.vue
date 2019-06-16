<template>
<!-- 我的订单中的售后订单 -->

	<div id="shouhou">
		
		<!-- 订单详情 -->
		<div id="shouhou-3"  v-for="item in items">
			<div id="shouhou-3-num">
				<span style="margin-left:8%">{{item.time}}</span>
				<span style="float:right;margin-right:8%">订单号:{{item.number}}</span>
			</div>
			<div id="shouhou-3-main">
				<div style="width:40%;border-left:2px solid #000;">
					<img :src="item.img" alt="1" class="shouhou-img">
					<span style="margin-left:10%">{{item.name}}</span>
				</div>
				<div style="width:10%;border-left:2px solid #000;">{{item.people}}</div>
				<div style="width:10%;border-left:2px solid #000;">{{item.price}}</div>
				<div style="width:20%;border-left:2px solid #000;">{{item.status}}</div>
				<div style="width:20%;border-left:2px solid #000;color:red;">
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
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'售后',dowhat:'删除',time:'2019年5月13日',number:"ak127232"},
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'售后',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'售后',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'售后',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'售后',dowhat:'删除',time:"2019年5月13日",number:"ak127232"},
					{name:'vivo',img:'',people:'黄先生',price:2200,status:'售后',dowhat:'删除',time:"2019年5月13日",number:"ak127232"}
				]
			}
		},
		created:function(){
			console.log(this.items)
			var self=this
			$.ajax({
		    type: "GET",
			url: "../../../static/data/f.json",
		    success: function(data) {
		    	console.log(data)
		        self.items=data.items
		    }
			});
		},
	}
</script>
<style>
	#shouhou{
		/*width: 60%;
		margin-top: 40px;
		margin-left: 20%;
		background: white;*/
		margin-top: 20px;
	}
	
	#shouhou-3-num{
		clear: left;
		background: rgb(173,169,167);
		height: 40px;
		line-height: 40px;
		font-size: 20px;
		color: white;
	}
	#shouhou-3-main div{
		float: left;
		background: rgb(251,247,246);
		font-size: 22px;
		text-align: center;
		height: 120px;
		margin-bottom: 10px;
		line-height: 120px;

	}
	.shouhou-img{
		width: 40%;
		height: 80%;
	}
</style>