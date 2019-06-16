<template>
	<!-- 入口页面 -->
	
	<div id="home">
		<search id="search"></search>
		<ad id="ad"></ad>
		<shopfirst id="shopfirst"></shopfirst>
		<shopsecord id="shopsecord" v-bind:scrolltobottom="this.scrollnum"></shopsecord>
	</div>
</template>
<script>
import myheader from "./public/header.vue"
import myfooter from "./public/footer.vue"
import search from "./public/search.vue"
import ad from "./public/ad.vue"
import shopfirst from "./public/shop-first.vue"
import shopsecord from "./public/shopsecord.vue"


export default{
	data:function(){
		return{
			scrollnum:0
		}
	},
	mounted:function(){
		window.addEventListener('scroll', this.scroll)
	},
	components:{
		myheader,
		myfooter,
		search,
		ad,
		shopfirst,
		shopsecord
	},
	methods:{
		scroll:function(){
			let scroll_top = 0;
		    if (document.documentElement && document.documentElement.scrollTop) {
		        scroll_top = document.documentElement.scrollTop;
		    }
		    else if (document.body) {
		        scroll_top = document.body.scrollTop;
		    }
		    let h=document.getElementById("home").scrollHeight
		    let n=parseInt(h)-parseInt(scroll_top)
		    this.scrollnum=n
		    //alert(n)
		    //alert(scroll_top)
		}
	}
}
</script>
<style scoped>
	*{
		margin:0px;
		padding: 0px;
	}
	#home{
		width: 100%;
		background: rgb(209,209,209);
		min-width: 1100px;
	}

	#shopsecord{
		width: 60%;
		margin-top: 0px;
		margin-left: 20%;
		background: rgb(251,247,246);
		text-align: center;
	}
	#ad{
		width: 60%;
		height: 120px;
		background: rgb(251,247,246);
		margin-left: 20%;
	}

</style>