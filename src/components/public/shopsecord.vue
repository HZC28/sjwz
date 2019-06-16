<template>
	<!-- 商品主体 -->
	<div id="shopsecord">
			<div v-for="item in items">
				<div class="ss-1" @click="toshopdetail()">
					<img :src="item.img" alt="img"><br>
					<span>{{item.name}}</span><br>
					<span>鍘熶环:{{item.yuanjia}}</span><br>
					<span>鐜颁环锛歿{item.xianjia}}</span><br>
				</div>
		</div>
	
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				items:[
					{name:'vivo',img:'../../../static/phone/big/s1.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s2.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s3.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s4.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s5.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s6.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s7.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s8.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s9.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s10.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s11.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s12.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s13.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s14.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s15.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s16.jpg',yuanjia:22200,xianjia:12000},
					{name:'vivo',img:'../../../static/phone/big/s17.jpg',yuanjia:22200,xianjia:12000},
				]
			}
		},
		methods:{
			toshopdetail:function(){
				this.$router.push({name:'shopdetail'})
			},
			addshopping:function(){
				var self=this
				$.ajax({
			    type: "GET",
				url: "../../../static/data/shop.json",
			    success: function(data) {
			    	//console.log(data)
			        let additems=data.items
			        for(let i=0;i<additems.length;i++){
			        	self.items.push(additems[i])
			        }
			    }
				});
			}
		},
		props:{
			scrolltobottom:{
				default:0,
				required:true
			}
		},
		watch:{
			scrolltobottom:function(){
				//alert(val)
				if(this.scrolltobottom<900){
					//console.log(this.scrolltobottom)
					this.addshopping()
				}
			}
		}
	}
</script>
<style>
	#shopsecord{
		text-align: center;
	}
	.ss-1{
		background: rgb(251,247,246);
		height: 230px;
		margin-bottom: 2%;
		border: 1px solid #000;
		width: 19%;
		margin-right: 1%;
		float: left;
		min-width: 150px;
	}
	.ss-1  img{
		width: 100%;
		height: 60%;
		margin-top: 10px;
	}
</style>