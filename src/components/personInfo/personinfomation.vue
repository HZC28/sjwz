<template>
	<!-- 个人信息及修改界面 -->

	<div id="personinfomation">
		<br>
		<div id="personinfomation-1">
			用户名：gg10001
		</div>
		<div id="personinfomation-2">
			昵称：<input type="text" value="jfkafao">
		</div>
		<div id="personinfomation-3">
			添加头像：
			<img src="" alt="img">
		</div>
		<div id="personinfomation-4">
			性别：
			<input type="radio" name="xingbie" value="保密" checked>保密
			<input type="radio" name="xingbie" value="女">女
			<input type="radio" name="xingbie" value="男">男
		</div>
		<div id="personinfomation-5">
			生日：
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
		<div id="personinfomation-6">
			添加邮箱：<span style="color:#ff7f50;">立即验证</span>
		</div>
		<div id="personinfomation-7">
			<button>提交</button>
		</div>
	</div>
</template>
<script>
	
</script>
<style>
	#personinfomation{
		margin-top: 20px;
		background:rgb(251,247,246);
		width: 40%;
		margin-left: 30%;
		height: 600px;
		font-size: 25px;
		min-width: 500px;
	}
	#personinfomation>div{
		margin-left: 25%;
		margin-bottom: 3%;
	}
	#personinfomation-1{
		margin-top: 10%
	}
	#personinfomation-2 input{
		width: 30%;
		text-align: center;
	}
	#personinfomation-7 button{
		width: 25%;
		font-size: 28px;
		margin-top: 5%;
		margin-left: 20%;
	}
</style>