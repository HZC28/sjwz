<template>
	<!-- 忘记密码界面 -->
	<div id="forgetpassword">
		<div id="forgetpassword-content">
			<div id="forgetpassword-content-1">忘记密码</div><hr>
			<div id="forgetpassword-content-2">手机号码：<input type="text"></div>
			<div id="forgetpassword-content-3">
				验&nbsp&nbsp证&nbsp&nbsp码：
				<input type="text"><br>
				<button>发送验证码</button>
			</div>
			<div id="forgetpassword-content-4">
				密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码：
				<input type="password"><br>
				<span>!!!密码必须是字母，数字，符号其中两种
				</span>
			</div>
			<div id="forgetpassword-content-5">
				确定&nbsp密码：
				<input type="password"><br>
				<span>!!!两次密码不一致
				</span>
			</div>
			<button id="forgetpassword-content-6">确定修改</button>
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
	#forgetpassword{
		width: 100%;
		position: relative;
	}
	#forgetpassword-content{
		width: 60%;
		text-align: center;
		background: rgb(209,209,209);
		margin-left: 20%;
		font-size: 30px;
		height: 600px;
		min-width: 800px;
	}
	#forgetpassword-content input{
		width: 20%;
		height: 25px;
		position: relative;
		top: -5px;
	}
	#forgetpassword-content-1{
		position: relative;
		text-align: left;
		font-size: 30px;
		top: 12px;
		left: 10px;
	}
	#forgetpassword-content-2{
		margin-top: 7%;
	}
	#forgetpassword-content-3{
		margin-top: 4%;
	}
	#forgetpassword-content-3 button{
		font-size: 22px;
	}
	#forgetpassword-content-4{
		margin-top: 1%;
	}
	#forgetpassword-content-5{
		margin-top: 1%;
	}
	#forgetpassword-content-5 span{
		font-size: 18px;
		color: red;
	}
	#forgetpassword-content-4 span{
		font-size: 18px;
		color: red;
	}
	#forgetpassword-content-6{
		margin-top: 3%;
		font-size: 30px;
		width: 20%;
		height: 40px;
	}
</style>