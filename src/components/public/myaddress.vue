<template>
	<div id="myaddress1">
		<div id="myaddress-header">我的收货地址</div>
		<div id="myaddress-add" @click="myaddressadd()">+添加收货地址</div>
		<div id="myaddress-main" v-for="i in 7" @click="choiceaddress()">
			<div id="myaddress-main-1">
				<span id="myaddress-main-1-name">
					名字
					<span id="myaddress-main-1-name-1">默认</span>
				</span>
				<div id="myaddress-main-1-phone">联系电话：1234324253</div>
			</div>
			<div id="myaddress-main-2">
				<div id="myaddress-main-2-1">所属地区：广东广州</div>
				<span id="myaddress-main-2-2">详细地址：广东金融学院2324号街A座302</span>
				<div id="myaddress-main-2-3">编辑</div>
			</div> 
		</div>
		<!-- 中间层 -->
			<div id="myaddress-mask" style="display:none"></div>
			<!-- 添加新的收货地址界面 -->
			<div id="myaddress-addaddress" style="display:none">
				<addaddress v-on:listenreturn="returnmyaddress()"></addaddress>
			</div>
	</div>
</template>
<script>
import addaddress from "../personinfo/addaddress.vue"

	export default{
		data:function(){
			return{
				shortaddress:'广东广州'
			}
		},
		components:{
			addaddress
		},
		methods:{
			choiceaddress:function(){
				this.$emit("listenreturn",this.shortaddress)
			},
			returnmyaddress:function(){
				document.getElementById('myaddress-mask').style.display="none"
				document.getElementById('myaddress-addaddress').style.display="none"
			},
			myaddressadd:function(){
				document.getElementById('myaddress-mask').style.display="block"
				document.getElementById('myaddress-addaddress').style.display="block"
			}
		}
	}
</script>
<style>
	#myaddress1{
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	#myaddress-header{
		font-size: 25px;
		color: red;
		display: inline-block;
		margin-left: 30%;
	}
	#myaddress-add{
		display: inline-block;
		float: right;
		font-size: 18px;
		margin-top: 8px;
		}
	#myaddress-main{
		font-size: 18px;
		background: rgb(251,247,246);
		width: 96%;
		margin-left: 2%;
		margin-top: 3px;
	}
	#myaddress-main-1-phone{
		float: right;

	}
	#myaddress-main-2-3{
		float: right;
		color:#ff7f50;
		margin-right: 10px;
	}
	#myaddress-main-1-name-1{
		font-size: 14px;
		color: red;
	}
	#myaddress-mask{
		background: rgba(251,247,246,0.5);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
	}
	/*收货地址界面*/
	#myaddress-addaddress{
		background:rgb(209,209,209);
		position: fixed;
		width: 34%;
		height: 400px;
		top: 24%;
		left: 35%;
		min-width: 300px;
	}
</style>