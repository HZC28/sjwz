<template>
	<!-- 注册界面 -->
	<div id="register">
		<div id="register-content">
			<div id="register-content-1">新用户注册</div><hr>
			<div id="register-content-2">手机号码：<input type="text"></div>
			<div id="register-content-3">
				验&nbsp&nbsp证&nbsp&nbsp码：
				<input type="text"><br>
				<button>发送验证码</button>
			</div>
			<div id="register-content-4">
				密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码：
				<input type="password"><br>
				<span>!!!密码必须是字母，数字，符号其中两种
				</span>
			</div>
			<div id="register-content-5">
				确定&nbsp密码：
				<input type="password"><br>
				<span>!!!两次密码不一致
				</span>
			</div>
			<button id="register-content-6">立即注册</button>
		</div>
	</div>
</template>
<script>
import myheader from "../public/header.vue"
import myfooter from "../public/footer.vue"
	export default{
		components:{
			myfooter,
			myheader
		}
	}
</script>
<style>
	*{
		margin:0px;
		padding: 0px;
	}
	#register{
		width: 100%;
		position: relative;
	}
	#register-content{
		width: 60%;
		text-align: center;
		background: rgb(209,209,209);
		margin-left: 20%;
		font-size: 30px;
		height: 600px;
	}
	#register-content input{
		width: 20%;
		height: 25px;
		position: relative;
		top: -5px;
	}
	#register-content-1{
		position: relative;
		text-align: left;
		top: 12px;
		left: 10px;
		color: red;
		font-size: 35px;
	}
	#register-content-2{
		margin-top: 7%;
	}
	#register-content-3{
		margin-top: 4%;
	}
	#register-content-3 button{
		font-size: 22px;
	}
	#register-content-4{
		margin-top: 1%;
	}
	#register-content-5{
		margin-top: 1%;
	}
	#register-content-5 span{
		font-size: 18px;
		color: red;
	}
	#register-content-4 span{
		font-size: 18px;
		color: red;
	}
	#register-content-6{
		margin-top: 3%;
		font-size: 30px;
		color: red;
		width: 20%;
		height: 40px;
	}
</style>