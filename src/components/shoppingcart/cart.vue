<template>
	<!-- 购物车页面 -->
	<div id="cart">
		<div id="cart-main">
		
			<!-- 已加入购物车 -->
			<div id="cart-1"
				<span class="h3" style="">共两件宝贝</span>
				<span class="h3" id="cart-1-1" @click="manage()">管理</span>
				<!-- 点击管理后对购物车的商品进行删除 -->
				<div id="cart-3"  style="display:none">
					<div id="cartselect3" class="cartselect" @click="selectalldelete($event)" ></div>
					<span id="cart-3-span1">全选</span>
					<button id="cart-3-bu1">全部删除</button>
				</div>
				<div id="cart-shop" v-for="(item,index) in items">
					<div id="cart-shop-1">
						<span id="cartspan1" class="h3">{{item.shopname}}</span>

						<!-- 商品是否被选中 -->
						<div class="cartselect" id="cartselect1" @click="selectshop($event,index)" v-if="item.select">✔</div>
						<div class="cartselect" id="cartselect1" @click="selectshop($event,index)" v-else=""></div>
						<!-- 商品是否被选中 -->

						<img :src="item.img" alt="img">
						<!-- 商品名称，描述 -->
						<span id="cartshopname">{{item.detail}}</span>
						<!-- 商品规格 -->
						<button id="cartshopsp">{{item.guige}}</button>
						<button id="cartdelete">删除</button>
						<span id="cartprice">价格:{{item.price*item.num}}</span>
						<!-- 商品数量的加减 -->
						<div id="cart-shop-2">
							<div id="cartlast" @click="cartsubtract(index)">-</div>
							<input type="text" v-model="item.num" id="cartnum">
							<div id="cartnext" @click="cartadd(index)">+</div>
						</div>
						<!-- 商品数量的加减 -->
					</div>	
				</div>
			</div>
			<!-- 已加入购物车 -->

			<!-- 结算块 -->
		<div id="cart-2">
			<div id="cartselect2" class="cartselect" @click="selectall($event)"></div>
			<span id="cart-2-span1">全选</span>
			<span id="cart-2-span2">共计{{this.totalprice}}元</span>
			<button id="cart-2-bu1">去结算</button>
		</div>

			<!-- 推荐商品 -->
		<div>
			<shopsecord  id="cart-4"></shopsecord>
		</div>
		<!-- 推荐商品 -->
		</div>

	</div>
</template>
<script>
	import myheader from "../public/header.vue"
	import myfooter from "../public/footer.vue"
	import shopsecord from "../public/shopsecord.vue"
	export default{
		data:function(){
			return{
				items:[
					
				],
				num:1,
				totalprice:0,
				r:[
					{num:1}
				]
			}
		},
		created:function(){
			var self=this
			$.ajax({
		    type: "GET",
			url: "../../../static/data/cart.json",
		    success: function(data) {
		    	//console.log(data)
		        self.items=data.items
		    }
			});
			
		},
		updated:function(){
			this.$nextTick(function(){
				this.changetotalprice()
			})
		},
		components:{
			myheader,
			myfooter,
			shopsecord
		},
		methods:{
			cartadd:function(i){
				this.items[i].num++;
				this.changetotalprice()
			},
			//数量减一
			cartsubtract:function(i){
				if(this.items[i].num==1){
					return
				}
				this.items[i].num--
				this.changetotalprice()
			},
			selectshop:function(e,i){
				let current=e.currentTarget.innerHTML
				if(current==""){
					//e.currentTarget.innerHTML="✔"
					this.items[i].select=true
				}else{
					//e.currentTarget.innerHTML=""
					this.items[i].select=false
					
				}
				this.changetotalprice()
			},
			selectall:function(e){
				let current=e.currentTarget.innerHTML
				if(current==""){
					e.currentTarget.innerHTML="✔"
					//$(".cartselect").text("✔")
					$("#cart-2-span1").text("取消全选")
					for(var i=0;i<this.items.length;i++){
						this.items[i].select=true
					}
				}else{
					e.currentTarget.innerHTML=""
					//$(".cartselect").text("")
					$("#cart-2-span1").text("全选")
					for(var i=0;i<this.items.length;i++){
						this.items[i].select=false
					}
				}
				this.changetotalprice()
			},
			manage:function(){
				let flag=document.getElementById("cart-3").style.display
				if(flag=="block"){
					document.getElementById("cart-3").style.display="none"
				}else{
					document.getElementById("cart-3").style.display="block"
				}
				
			},
			selectalldelete:function(e){
				let current=e.currentTarget.innerHTML
				if(current==""){
					e.currentTarget.innerHTML="✔"
					//$(".cartselect").text("✔")
					$("#cart-3-span1").text("取消全选")
					for(var i=0;i<this.items.length;i++){
						this.items[i].select=true
					}
				}else{
					e.currentTarget.innerHTML=""
					//$(".cartselect").text("")
					$("#cart-3-span1").text("全选")
					for(var i=0;i<this.items.length;i++){
						this.items[i].select=false
					}
				}
				this.changetotalprice()
			},
			changetotalprice:function(){
				this.totalprice=0
				for(var i=0;i<this.items.length;i++){
					if(this.items[i].select){
						this.totalprice+=this.items[i].price*this.items[i].num
					}	
					}
			}
		}
	}
</script>
<style scoped>
	/*整个页面*/
	#cart{
		background: rgb(209,209,209);
		position: relative;
	}
	/*主要内容*/
	#cart-main{
		margin-top: 20px;
		margin-left: 20%;
		width: 60%;
	}
	/*商品详情，价格等*/
	#cart-shop-1{
		background: rgb(251,247,246);
		margin-top: 10px;
		height: 220px;
		position: relative;
		min-width: 800px;
	}
	#cart-1-1{
		float: right;
		position: relative;
		top: -19px;
		color: #ff7f50;
		right: 2%;
	}
	#cart-shop-2{
		height: 20px;
		margin-left: 30%;
	}
/*点击选中✔*/
	.cartselect{
		width: 40px;
		height: 40px;
		border: 1px solid #000;
		text-align: center;
		line-height: 40px;
		font-size: 22px;
		border-radius: 20px;
	}
	#cartspan1{
		position: absolute;
		top: -7%;
		left: 1%;
	}
	#cartselect1{
		position: absolute;
		top: 45%;
		left: 7%;
	}
	#cart-shop-1 img{
		position: absolute;
		width: 13%;
		height: 80%;
		top:10%;
		left: 24%;
		text-align: center;
		line-height: 100px;
	}
	/*商品详情描述*/
	#cartshopname{
		position: absolute;
		top:20%;
		left: 55%;
		font-size: 18px;
		color: red;
		text-align: center;
	}
	/*商品规格*/
	#cartshopsp{
		position: absolute;
		top:55%;
		left: 58%;
		/*width: 18%;*/
		font-size: 18px;
	}
	#cartdelete{
		position: absolute;
		top:55%;
		left: 82%;
		width: 8%;
		color: red;
		font-size: 18px;
	}
	#cartprice{
		position: absolute;
		top:75%;
		left: 60%;
		font-size: 22px;
	}
	/*商品数量的加减*/
	#cart-shop-2{
		position: absolute;
		top:78%;
		left: 50%;
	}
	#cartlast{
		float: left;
		width: 20px;
		height: 20px;
		text-align: center;
		border: 1px solid #000;
		border-radius:3px 0px 0px 3px;
	}
	#cartnum{
		float: left;
		height: 20px;
		width: 30px;
		text-align: center;
	}
	#cartnext{
		display: inline-block;
		border: 1px solid #000;
		height: 20px;
		width: 20px;
		text-align: center;
		border-radius:0px 3px 3px 0px;
	}
	/*商品数量的加减*/

	/*<!-- 结算块 -->*/
	#cart-2{
		background: #afeeee;
		position: fixed;
		bottom:0px;
		width: 60%;
		height: 55px;
		line-height: 55px;
		min-width: 800px;
		left: 20%;
	}
	#cartselect2{
		float: left;
		position: absolute;
		top: 7px;
		left: 7%;
	}
	#cart-2-span1{
		font-size: 22px;
		position: absolute;
		left: 13%;
	}
	#cart-2-span2{
		font-size: 22px;
		position: absolute;
		left: 40%;
	}
	#cart-2-bu1{
		width: 100px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 22px;
		color: white;
		background: red;
		position: absolute;
		top:7px;
		right: 5%;
	}
	/*<!-- 结算块 -->*/

	/*点击管理后对购物车的商品进行删除*/
	#cart-3{
		background: #afeeee;
		position: relative;
		bottom:0px;
		width: 100%;
		height: 55px;
		line-height: 55px;
		min-width: 800px;
	}
	#cartselect3{
		float: left;
		position: absolute;
		top: 7px;
		left: 7%;
	}
	#cart-3-span1{
		font-size: 22px;
		position: absolute;
		left: 13%;
	}
	#cart-3-bu1{
		width: 120px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 22px;
		color: white;
		background: red;
		position: absolute;
		top:7px;
		right: 5%;
	}
/*点击管理后对购物车的商品进行删除*/

/*推荐商品*/
	#cart-4{
		margin-top:20px;
		width: 60%;
		margin-left: 20%;
		text-align: center;
	}
</style>