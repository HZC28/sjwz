<template>
	<!-- 搜索组件 -->
	<div id="search">
		<input type="text" id="search-content">
		<button id="search-1">搜索</button>
		<div class="search-2">
			<span>ipoone</span>
			<span>huawei</span>
			<span>vivo</span>
			<span>oppo</span>
			<span>小米</span>
			<span>三星</span>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			
		}
	}
</script>
<style>
	#search{
		margin-top: 1%;
		width: 100%;
		text-align: center;
	}
	#search-content{
		background: rgb(251,247,246);
		height: 38px;
		width: 25%;
		margin-right: 8px;
		
	}
	#search-1{
		display: inline-block;
		background: red;
		height: 38px;
		width: 40px;
		width: 5%;
	}
	.search-2 span{
		margin-left: 1%;
		font-size: 20px;
	}
	.search-2{
		margin-top:0px;
	}
</style>