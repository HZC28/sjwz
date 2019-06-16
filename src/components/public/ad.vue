<template>
	<!-- 轮播广告组件 -->
	
	<div id="ad">
		<div id="adimg">
			<div id="ad-main" style="position:relative;left: 0%;">
				<img src="../../../static/ad/n1.jpg" alt="1">
				<img src="../../../static/ad/n2.jpg" alt="2">
				<img src="../../../static/ad/n3.jpg" alt="3">
				<img src="../../../static/ad/n4.jpg" alt="4">
			</div>
		</div>
		<div id="adnextlast">
			<span id="adlast" @click="adlast()"><img src="../../../static/tupiao/last.gif" alt=""></span>
			<span id="adnext" @click="adnext()">
				<img src="../../../static/tupiao/next.gif" alt="">
			</span>
		</div>
		<div id="adnum">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		data:function(){
			return{

			}
		},
		methods:{
			adlast:function(){
				let t=document.getElementById("ad-main").style.left
				let t1=parseInt(t)
				if(t1==0){
					t1=-400
				}
				t1+=100
				document.getElementById("ad-main").style.left=t1+"%"
			},
			adnext:function(){
				let t=document.getElementById("ad-main").style.left
				let t1=parseInt(t)
				if(t1==-300){
					t1=100
				}
				t1-=100
				document.getElementById("ad-main").style.left=t1+"%"
			}
		}
	}
</script>
<style>
	#ad{
		position: relative;
		margin-top: 20px;
	}
	#adimg{
		width: 100%;
		overflow: hidden;
		z-index: -1;
	}
	#ad-main{
		width: 400%;
		
	}
	#adimg img{
		width: 25%;
		height: 120px;
		float: left;
		text-align: center;
		z-index: -1;

	}
	#adnextlast{
		position: relative;
		z-index: 2
		}
	#adnext{
		position: absolute;
		top: -90px;
		right: 20px;
	}
	#adlast{
		position: absolute;
		top: -90px;
		left: 20px;
		
	}
	#adnum{
		position: absolute;
		margin-left: 45%;
		margin-top: -40px;
		height: 25px;
		width: 180px;
		top: 120px;
	}
	#adnum div{
		border: 2px solid #000;
		display: inline-block;
		float: left;
		margin-left: 3%;
		width: 20px;
		height: 20px;
		border-radius: 10px;
		background: white;
		color: white;
	}
	#adnum div:hover{
		background: red;
		color: red;
	}
</style>