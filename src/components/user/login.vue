<template>
	<!-- 登录界面 -->
	<div>
		<div id="login">
			<h1>用户登录</h1>
			<button id="login-cancel" @click="logincancel()">×</button>
			<div id="login-1" style="margin-top:30px">
				用户名：<input type="text" id="user">
			</div>
			<div id="login-2" style="margin-top:30px">
				密&nbsp&nbsp&nbsp码：<input type="text">
			</div>
			<div style="font-size:14px;color:red">！！！用户名或密码错误</div>
			<div id="login-3" style="margin-top:0px;">
				<button @click="loginemit()">登录</button>
				<span>忘记密码</span>
				<span>新用户注册</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			loginemit:function(){
				// let user=document.getElementById('user').value
				// this.$emit("listenloginsuccess",user)
				$.ajax({
			    type: "GET",
				url: "denglu?user=a1009&password=123",
			    success: function(data) {
			    	console.log(data)
			    }
				});
			},
			logincancel:function(){
				this.$emit("listenloginsuccess")
			},

		}
	}
</script>
<style>
	#login{
		font-size: 22px;
		text-align: center;
		position: relative;
	}
	#login>div{
		margin-top: 2%;
	}
	#login-1{
		margin-top: 5%;
	}
	#login input{
		width: 40%;
	}
	#login-3{
		margin-top: 100px;
	}
	#login-3 span{
		font-size: 16px;
		margin-left: 20px;
		color: red;
	}
	#login-3 button{
		width: 30%;
		color: red;
		font-size: 24px;
		margin-top: 5%;
	}
	#login-cancel{
		position: absolute;
		top: -10px;
		right:10px;
		width: 25px;
		height: 25px;
		font-size: 18px;
		text-align: center;
		background: red;
	}
	#login-cancel:hover{
		font-size: 22px
	}
</style>