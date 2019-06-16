<template>
	<!-- 聊天消息界面 -->
	<div id="message">
		<!-- 主体部分 -->
		<div id="message-main">
			<!-- 左边联系人部分 -->
			<div id="message-main-left">
				<div id="message-main-left-1">
					<div>用户名</div>
					<input type="text" placeholder="搜索联系人">
				</div>
				<div id="message-main-left-2" v-for="i in 12">
					<div>
						<img src="" alt="头像">
					</div>
					<span>客服{{i}}</span>
				</div>
			</div>
			<!-- 右边消息发送消息部分 -->
			<div id="message-main-right">
				<div id="message-main-right-1">
					<div>
						<img src="" alt="头像">
					</div>
					客服
				</div>
				<div id="message-main-right-2">2</div>
				<div id="message-main-right-3">
					<img src="../../../static/tupiao/相片.gif" alt="">
					<img src="../../../static/tupiao/表情.gif" alt="">
					<img src="../../../static/tupiao/爱心.gif" alt=""><br>
					<div>
						<input type="text">
						<button>发送</button>
					</div>
					
				</div>
			</div>
		</div>
		<myfooter></myfooter>
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
	#message{
		width: 100%;
		background: rgb(209,209,209);
		min-width: 1100px;
	}
	#message-main{
		margin-top: 20px;
		background:rgb(251,247,246);
		width: 50%;
		margin-left: 25%;
		height: 600px;
		font-size: 25px;
		min-width: 500px;
	}

		/*左边联系人部分*/
	#message-main-left{
		width: 30%;
		height: 100%;
		float: left;
		border-right: 1px solid #000;
		overflow: auto
	}
	#message-main-left-1{
		width:100%;
		text-align: center;
		background: red;
	}
	#message-main-left-1 input{
		width: 90%;
		text-align: center;
		font-size: 22px;
		margin-bottom: 10px;
	}
	#message-main-left-2{
		width: 100%;
		height: 60px;
		background: rgb(195,250,247);
		line-height: 60px;
		border: 1px solid #000;
	}
	#message-main-left-2>div{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid #000;
		font-size: 22px;
		float: left;
		margin-left: 10%;
		margin-right: 5%;
		margin-top: 5px;
	}
	/*右边消息发送消息部分*/
	#message-main-right{
		border-left: 2px solid #000;
		width: 70%;
		height: 100%;
		margin-left: 30%;
	}
	#message-main-right-1{
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #000;
		line-height: 60px;
	}
	#message-main-right-2{
		width: 100%;
		height: 60%;
		border-top: 2px solid #000;
		border-bottom: 2px solid #000;
	}
	#message-main-right-3{
		width: 100%;
		height: 30%;
		border-top: 1px solid #000;
	}

	#message-main-right-1 div{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid #000;
		font-size: 22px;
		float: left;
		margin-left: 3%;
		margin-right: 2%;
		margin-top: 5px;
	}
	#message-main-right-3{
		position: relative;
	}
	#message-main-right-3 div{
		position: absolute;
		right: 20px;
		bottom:10px;
	}
</style>