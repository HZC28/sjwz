<template>
	<!-- 点击二手拍的二手界面 -->
	<div id="secordshop">
		<search id="search"></search>
		<ad id="ad"></ad>
		<shopsecord id="shopsecord"></shopsecord>
	</div>
</template>
<script>
import myheader from "../public/header.vue"
import myfooter from "../public/footer.vue"
import search from "../public/search.vue"
import ad from "../public/ad.vue"
import shopsecord from "../public/shopsecord.vue"

export default{
		components:{
			myheader,
			myfooter,
			search,
			ad,
			shopsecord
		}
	}
</script>
<style>
	#secordshop{
		width: 100%;
		background: rgb(209,209,209);
	}
	#shopsecord{
		width: 60%;
		margin-top: 40px;
		margin-left: 20%;
		background: rgb(251,247,246);
		text-align: center;
		min-width: 800px;
	}
	#ad{
		width: 60%;
		margin-top: 20px;
		height: 120px;
		background: rgb(251,247,246);
		margin-left: 20%;
		position: relative;
		min-width: 800px;
	}
</style>