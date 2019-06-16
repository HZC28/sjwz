<template>
	<!-- 添加二手拍卖物品 -->
	<div id="addsecord">
		<infonav></infonav>
		<div id="addsecord-main">
			<br>
			<span id="addsecord-main-0">添加拍卖物品</span>
			<div id="addsecord-main-1">
				产&nbsp&nbsp品&nbsp名：<input type="text">
			</div>
			<div id="addsecord-main-2">
				描&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp述：<input type="text">
			</div>
			<div id="addsecord-main-3">
				价&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp格：<input type="text">
			</div>
			<div id="addsecord-main-4">
				成&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp色：
				<input type="radio" name="chengse" value="九成新" checked>九成新&nbsp&nbsp&nbsp
				<input type="radio" name="chengse" value="八成新">八成新&nbsp&nbsp&nbsp
				<br>
				<input type="radio" name="chengse" value="七成新">七成新&nbsp&nbsp&nbsp
				<input type="radio" name="chengse" value="六成新">六成新&nbsp&nbsp&nbsp
				<input type="radio" name="chengse" value="可用">可用

			</div>
			<div id="addsecord-main-5">
				购买日期：
				<select>
					<option value="">1999</option>
					<option value="">1998</option>
					<option value="">1996</option>
					<option value="">1997</option>
				</select>年
				<select>
					<option v-for="i in 12">{{i}}</option>
				</select>月
				<select>
					<option v-for="i in 30">{{i}}</option>
				</select>日
			</div>
			<div id="addsecord-main-6">
				上传图片：<input type="text">
				<button>上传</button>
			</div>
			<div id="addsecord-main-7">
				备&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp注：<input type="text">
			</div>
			<div id="addsecord-main-8">
				<button>确认发布</button>
			</div>
		</div>
	</div>
</template>
<script>
	import myheader from "../public/header.vue"
	import myfooter from "../public/footer.vue"
	import infonav from "../personinfo/infonav.vue"
	export default{
		components:{
			myheader,
			myfooter,
			infonav,
		}
	}
</script>
<style>
	#addsecord{
		width: 100%;
		background: rgb(209,209,209);
		min-width: 1100px;
	}
	#addsecord-main{
		margin-top: 20px;
		background:rgb(251,247,246);
		width: 40%;
		margin-left: 30%;
		height: 600px;
		font-size: 25px;
		min-width: 500px;
	}

	#addsecord-main div{
		margin-top: 2%;
		margin-left: 20%;
	}
	#addsecord-main-1 input{
		width: 50%;
		height: 35px;
	}
	#addsecord-main-2 input{
		width: 50%;
		height: 35px;
	}
	#addsecord-main-3 input{
		width: 50%;
		height: 35px;
	}
	#addsecord-main-7 input{
		width: 50%;
		height: 35px;
	}
	#addsecord-main-0{
		color: red;
		margin-left: 35%;
		font-size: 35px;
	}
	#addsecord-main-6 input{
		width: 25%;
		margin-right: 3%;
	}
	#addsecord-main-6 button{
		height: 35px;
		font-size: 22px;
	}
	#addsecord-main-4 input{
		margin-bottom: 3%;

	}
	#addsecord-main-8 button{
		width: 30%;
		font-size: 30px;
		margin-top: 30px;
		margin-left: 25%;
		color: red;
	}
</style>