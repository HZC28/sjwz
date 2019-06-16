<template>
	<!-- 评价组件 -->
	<div id="appraise">
		<div v-for="i in 9">
			<div id="appraise-1">
				<div id="appraise-2">
					<br>
					<img src="" alt="img"><div>用户名</div>
				</div>
				<div id="appraise-3">评价等级</div>
				<div id='appraise-4'>评价内容......................................................................</div>
			</div>
		</div>
	</div>
</template>
<script>
	
</script>
<style>
	#appraise-1{
		border: 1px solid #000;
		width: 100%;
		height: 150px;
		position: relative;
	}
	#appraise-2{
		font-size: 25px;
				
	}
	#appraise-1 img{
		width: 50px;
		height: 50px;
		float: left;
		margin-left: 10%;
		margin-right: 2%;
	}

	#appraise-3{
		position:relative;
		width: 100px;
		margin-right: 1%;
		top: -40%;
		right: -80%;
		font-size: 22px;
		color: red;
	}
	#appraise-4{
		text-align: center;
		font-size: 22px;
	}
</style>