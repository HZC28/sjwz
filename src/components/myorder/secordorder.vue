<template>
	<!-- 我的二手拍订单界面 -->
	<div id="secordorder">
		<infonav></infonav>
		<secordordercontent></secordordercontent>
	</div>
</template>
<script>
	import myheader from "../public/header.vue"
	import myfooter from "../public/footer.vue"
	import infonav from "../personinfo/infonav.vue"
	import secordordercontent from "./secordordercontent.vue"
	export default{
		components:{
			myheader,
			myfooter,
			infonav,
			secordordercontent
		}
	}
</script>
<style>
	#secordorder{
		width: 100%;
		background: rgb(209,209,209);
	}
</style>