<template>
	<div id="shopfirst">
		<span style="font-size:28px">耳机专卖区</span>
		<div id="sf-1" class="row">
			<div v-for="item in items">
				<div class="sf-2" @click="toshopdetail()">
					<img :src="item.img" alt="img">
					<span>{{item.name}}</span><br>
					<span>价格：{{item.price}}</span>
				</div>
			</div>
		</div>
		<div id="sfnextlast">
			<span id="sflast"><img src="../../../static/tupiao/last.gif" alt=""></span>
			<span id="sfnext">
				<img src="../../../static/tupiao/next.gif" alt="">
			</span>
		</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				items:[
					{name:'vivo',img:'../../../static/erji/e2.jpg',price:30},
					{name:'vivo',img:'../../../static/erji/e3.jpg',price:30},
					{name:'vivo',img:'../../../static/erji/e4.jpg',price:30},
					{name:'vivo',img:'../../../static/erji/e5.jpg',price:30}
				]
			}
		},
		methods:{
			toshopdetail:function(){
				this.$router.push('/shopdetail')
			}
		}
	}
</script>
<style>
	#shopfirst{
		margin-top: 20px;
		text-align: center;
	}
	#sf-1{
		
		width: 60%;
		margin-left: 20%;
		height: 280px;
	}
	.sf-2{
		background: rgb(251,247,246);
		border: 1px solid #000;
		height: 220px;
		width: 24%;
		float: left;
		margin-right: 1%;
	}
	.sf-2 img{
		width: 100%;
		height: 80%;
		
	}
	#sfnextlast{
		position: relative;
		}
	#sfnext{
		position: absolute;
		top: -200px;
		right: 21%;
	}
	#sflast{
		position: absolute;
		top: -200px;
		left: 21%;
		
	}
</style>