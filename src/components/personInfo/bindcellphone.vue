<template>
	<!-- 绑定手机界面 -->
	<div>
		<div id="bindcellphone">
			<h2 style="color:red">绑定手机号</h2>
			<div id="bindcellphone-1">
				请输入手机号：<input type="text">
			</div>
			<div style="font-size:14px;color:red">！！！手机号码必须是11位数字</div>
			<div id="bindcellphone-2">
				请输入验证码：<input type="text">
				<button>获取验证码</button>
			</div>
			<div id="bindcellphone-3">
				<button @click="submit()">提交</button>
				<button @click="cancel()">取消</button>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		methods:{
			submit:function(){
				this.$emit("listenreturnmyinfo")
			},
			cancel:function(){
				this.$emit("listenreturnmyinfo")
			}
		}
	}
</script>
<style>
	#bindcellphone{
		font-size: 20px;
		text-align: center;
	}
	#bindcellphone>div{
		margin-top: 2%;
	}
	#bindcellphone-1 input{
		width: 40%;
	}
	#bindcellphone-2 input{
		width: 20%;
	}
	#bindcellphone-2 button{
		margin-top: 20px;
		color: red;
		font-size: 16px;
	}
	#bindcellphone-3 button{
		width: 30%;
		color: red;
		font-size: 24px;
		margin-top: 5%;
	}
</style>