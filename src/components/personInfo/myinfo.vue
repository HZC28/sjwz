<template>
	<!-- 用户信息界面 -->
	
	<div id="myinfo">
		<infonav  v-on:listenbindcellphone="bindcellphone()"></infonav>
		<!-- 用户中心 -->
		<!-- <infoconnect></infoconnect> -->
		<!-- 个人信息 -->
		<router-view/>
		<!-- <personinfomation></personinfomation> -->
		<div id="myinfo-mask" style="display:none"></div>
		<div>
			<bindcellphone id="myinfo-bindcellphone" style="display:none" v-on:listenreturnmyinfo="returnmyinfo()"></bindcellphone>
		</div>
	</div>
</template>
<script>
	import myheader from "../public/header.vue"
	import myfooter from "../public/footer.vue"
	import infonav from "./infonav.vue"
	import infoconnect from "./infoconnect.vue"
	import bindcellphone from "./bindcellphone.vue"
	import personinfomation from "./personinfomation.vue"
	export default{
		data:function(){
			return{
				user:this.myglobal.user
			}
		},
		components:{
			myheader,
			myfooter,
			infonav,
			infoconnect,
			bindcellphone,
			personinfomation
		},
		methods:{
			bindcellphone:function(){
				document.getElementById('myinfo-bindcellphone').style.display="block"
				document.getElementById('myinfo-mask').style.display="block"
			},
			returnmyinfo:function(){
				document.getElementById('myinfo-bindcellphone').style.display="none"
				document.getElementById('myinfo-mask').style.display="none"
			}
		}
	}
</script>
<style>
	#myinfo{
		width: 100%;
		background: rgb(209,209,209);
		min-width: 1100px;
	}
	#myinfo-mask{
		background: rgba(251,247,246,0.7);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
	}
	#myinfo-bindcellphone{
		background:rgb(209,209,209);
		position: fixed;
		width: 30%;
		height: 300px;
		top: 25%;
		left: 35%;
		min-width: 300px;
	}
</style>