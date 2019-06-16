<template>
	<!-- 用户信息界面功能组件 -->
	
	<div id="infonav">
		<div class="innav">
			<span @click="toinfocontent($event)" class="infona-1" style="color:#ff7f50">用户中心</span>
			<span @click="topersoninfomation($event)" class="infona-1">个人信息</span>
			<span @click="tomessage($event)" class="infona-1">消息</span>
			<span @click="tobindcellphone($event)" class="infona-1">账号绑定</span>
			<span @click="toaddress($event)" class="infona-1">收货地址</span>
			<span @click="exit($event)" class="infona-1">退出当前账号</span>
		</div>
		
	</div>
</template>
<script>
	export default{
		methods:{
		toinfocontent:function(e){
			this.$router.push({name:'infoconnect'})
			$(".infona-1").css("color","#000")
			e.currentTarget.style.color="#ff7f50"
		},
		tobindcellphone:function(e){
			this.$emit("listenbindcellphone")
			$(".infona-1").css("color","#000")
			e.currentTarget.style.color="#ff7f50"
		},
		topersoninfomation:function(e){
			this.$router.push({name:'personinfomation'})
			$(".infona-1").css("color","#000")
			e.currentTarget.style.color="#ff7f50"
		},
		tomessage:function(e){
			this.$router.push({name:'message'})
			$(".infona-1").css("color","#000")
			e.currentTarget.style.color="#ff7f50"
		},
		toaddress:function(e){
			this.$router.push({name:'address'})
			$(".infona-1").css("color","#000")
			e.currentTarget.style.color="#ff7f50"
		},
		exit:function(e){
			this.myglobal.user=""
			//alert(this.myglobal.user)
			$(".infona-1").css("color","#000")
			e.currentTarget.style.color="#ff7f50"
		}
		}

	}
</script>
<style>
	#infonav{
		margin-top: 2px;
		width: 100%;
		background: white;
		height: 40px;
		font-size: 22px;
		line-height: 40px;
		text-align: left;
	}
	.innav{
		margin-left: 10%;
	}
	.innav span{
		margin-right: 1%;
	}
</style>