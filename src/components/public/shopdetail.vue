<template>
	<div>
	<!-- 商品详情页面 -->
	<div id="shopdetail">
		<div id="shopdetail-main">
			<div id="shopdetail-nav">
				<span style="margin-left:30px;">首页></span>
				<span>手机></span>
				<span>vivo</span>
				<span style="float:right;margin-right:30px;">联系客服</span>
			</div>
			<!-- 商品基本信息 -->
			<div id="shopdetail-content">
				<!-- 图片部分 -->
				<div id="shopdetail-1">
					<img :src="this.bigimgsrc" alt="img" id="bigimg">
					<div>
						<span><&nbsp</span>
						<div id="smallimg">
							<div>
								<img :src="img" alt="img" class="smallimg-1" v-for="img in items.imgs" @click="clickimg($event)">
							</div>
							
							<!-- <img src="" alt="img">
							<img src="" alt="img">
							<img src="" alt="img">
							<img src="" alt="img"> -->
						</div>
						<span>&nbsp></span>
					</div>
				</div>
				<!-- 描述部分 -->
				<div id="shopdetail-2">
					<br>
					<div>
						<!-- 品牌名 -->
						<div id="shopdetail-2-1">{{this.items.name}}</div>
						<!-- 商品详情 -->
						<span id="shopdetail-2-2">{{this.items.detail}}</span>
					</div>
					
					<div>
						<span id="shopdetail-2-3">赠送物品:</span>
						<span id="shopdetail-2-4">。。。。。</span>
					</div>
					<div>
						<span id="shopdetail-2-5">原价：2000元</span><br>
						<span id="shopdetail-2-6">现价:1800元</span>
					</div>
					<div>
						
						<span id="shopdetail-2-7">配送至:</span>
						<button id="shopdetail-2-bu1" @click="choiceaddress()">{{shortaddress}}</button>
					</div>
					<!-- 选择颜色 -->
					<div>
						<div id="shopdetail-2-8">选择颜色:</div>
						<div>
							<button class="shopdetail-2-bu-1" @click="choicecolor($event)" v-for="color in this.items.colors">{{color}}</button>
							<!-- <button class="shopdetail-2-bu-1" @click="choicecolor($event)">金色</button>
							<button class="shopdetail-2-bu-1" @click="choicecolor($event)">蓝色</button>
							<button class="shopdetail-2-bu-1" @click="choicecolor($event)">金黄</button> -->
						</div>
					</div>
					<div>
						<div id="shopdetail-2-9">增值服务:</div>
						<div>
							<button class="shopdetail-2-bu-2" @click="add1($event,addserver.price)" v-for="addserver in this.items.addservers">{{addserver.type}}</button>
							<!-- <button class="shopdetail-2-bu-2" @click="add2($event)">延保一年</button>
							<button class="shopdetail-2-bu-2" @click="add3($event)">延保两年</button> -->
						</div>
						
						
					</div>
					
					<div>
						<div style="float:left;margin-right:15%;color:red">￥{{1212*num+add}}</div>
						<div id="shopdetail-2-10">数量:</div>
					<!-- 商品数量的加减 -->
						<div id="shopdetail-2-11">
							<div id="shopdetaillast" @click="shopdetailsubtract()">-</div>
							<input type="text" v-model="num" id="shopdetailnum">
							<div id="shopdetailnext" @click="shopdetailadd()">+</div>
						</div>
					<!-- 商品数量的加减 -->
					</div>
					<!-- 加入购物车 -->
					<div>
						<button id="shopdetail-2-bu2" @click="addtocart()">加入购物车</button>
						<div id="shopdetail-warn">{{this.warninfo}}</div>
					</div>
				</div>
			</div>		
			<div id="shopdetail-to">
				<div id="shopdetail-to-nav">
					<span style="margin-left:2%">商品介绍</span>
					<span>商品规格</span>
					<span>商品评价</span>
					<span>售后保障</span>
				</div>
				<appraise id="shopdetail-to-appraise"></appraise>
			</div>
		</div>
	</div>
			<!-- 中间层 -->
		<div id="shopdetail-mask" style="display:none"></div>
		<!-- 添加新的收货地址界面 -->
		<div id="shopdetail-myaddress" style="display:none">
			<myaddress v-on:listenreturn="returnshoptail"></myaddress>
		</div> 
</div>
</template>
<script>
import myheader from "./header.vue"
import myfooter from "./footer.vue"
import appraise from "./appraise.vue"
import myaddress from "./myaddress.vue"

export default{
		data:function(){
			return{
				num:1,
				items:{},
				add:0,
				color:'',
				bigimgsrc:'',
				shortaddress:'请选择收货地址',
				warninfo:""
			}
		},
		// props:{
		// 	shopdetailId:{
		// 		type:String,
		// 		required:true
		// 	}
		// },
		created:function(){
			var self=this
			$.ajax({
		    type: "GET",
			url: "../../../static/data/b.json",
		    success: function(data) {
		    	//console.log(data)
		        self.items=data
		        self.bigimgsrc=data.imgs[0]
		    }
			});
		},
		mounted:function(){
			this.$nextTick(
				function(){
					
				})
		},
		components:{
			myheader,
			myfooter,
			appraise,
			myaddress
		},
		methods:{
			//数量加一
			shopdetailadd:function(){
				this.num++;
			},
			//数量减一
			shopdetailsubtract:function(){
				if(this.num==1){
					return
				}
				this.num--
			},
			// 选择颜色
			choicecolor:function(e){
				if(e.currentTarget.style.background=="rgb(255, 127, 80)"){
					e.currentTarget.style.background=""
					this.color=''
					return
				}
				$(".shopdetail-2-bu-1").css("background","")
				e.currentTarget.style.background="#ff7f50"
				this.color=e.currentTarget.innerHTML
				this.warninfo=""
				// alert(this.color)
			},
			//增值性服务
			add1:function(e,p){
				if(e.currentTarget.style.background=="rgb(255, 127, 80)"){
					this.add=0;
					e.currentTarget.style.background=""
					return
				}
				$(".shopdetail-2-bu-2").css("background","")
				e.currentTarget.style.background="#ff7f50"
				//console.log(e.currentTarget.style.background)
				this.add=parseInt(p)
			},
			//添加到购物车
			addtocart:function(){
				let user=this.myglobal.user
				if(user==""){
					this.$emit("listenlogin")
					return
				}
				if(this.color==''){
					this.warninfo="！！！请选择颜色"
					return
				}
				if(this.shortaddress=="请选择收货地址"){
					this.warninfo="！！！请选择收货地址"
					return
				}
			},
			//点击小图片
			clickimg:function(e){
				let self=e.currentTarget
				$(".smallimg-1").css("border","0px solid #000")
				e.currentTarget.style.border="3px solid red"
				// alert(self.src)
				$("#bigimg").attr("src",self.src)
			},
			choiceaddress:function(){
				document.getElementById('shopdetail-myaddress').style.display="block"
				document.getElementById('shopdetail-mask').style.display="block"
			},
			returnshoptail:function(s){
				this.shortaddress=s
				document.getElementById('shopdetail-myaddress').style.display="none"
				document.getElementById('shopdetail-mask').style.display="none"
				this.warninfo=""
			}
		},
	}
</script>
<style>
	#shopdetail{
		width: 100%;
		background: rgb(209,209,209);
	}
	#shopdetail-main{
		width: 60%;
		margin-left: 20%;
		min-width: 800px;
	}
	#shopdetail-nav{
		width: 100%;
		height: 40px;
		background: rgb(251,247,246);
		margin-top: 4px;
		line-height: 40px;
		font-size: 20px;
	}	
	#shopdetail-content{
		width: 100%;
		height: 780px;
		background: rgb(251,247,246);
		margin-top: 20px;
	}
	#shopdetail-to{
		width: 100%;
		margin-top: 30px;
	}
	/*商品图片部分*/
	#shopdetail-1{
		width: 40%;
		height: 100%;
		float: left;
	}
	#shopdetail-1>img{
		width: 80%;
		margin-left: 10%;
		height: 400px;
		margin-top: 6%;
		text-align: center;
		margin-top: 10%;
	}
	#shopdetail-1>div{
		text-align: center;
		margin-top: 6%;
		width: 80%;
		margin-left: 10%;
		height: 60px;
	}
	#shopdetail-1>div span{
		display: inline-block;
		font-size: 23px;
		line-height: 60px;
		position: relative;
		top: -22px;
	}
	#smallimg{
		display: inline-block;
		width: 80%;
		height: 60px;
		overflow: hidden;
		/*background: red;*/

	}
	
	#smallimg>div{
		width: 600%;
		height: 60px;
		position: relative;
		/*left: -50px;*/
	}
	.smallimg-1{
		width: 50px;
		height: 60px;
		text-align: center;
		float: left;
		/*position: relative;
		left: -25%*/

	}
	#smallimg>div :first-child{
		border: 3px solid red;
	}
	/*商品图片部分*/

	/*商品描述部分*/
	#shopdetail-2{
		position: relative;
		font-size: 22px;
		height: 150px;
		width: 60%;
		margin-left: 40%;
		/*margin-top: 20px;*/
	}
	#shopdetail-2>div{
		margin-top: 2%;
		margin-left: 10%;
	}
	#shopdetail-2>div span{
		margin-left: 12%;
	}
	#shopdetail-2-1{
		background: red;
		text-align: center;
		width: 25%;
		margin-left: 37%;
		font-size: 30px;
		margin-top: -20px;

	}
	.shopdetail-2-bu-1{
		margin-right: 3%;
		margin-top: 4%;
		height: 30px;
		margin-left: 10%;
	}
	/*商品详情*/
	#shopdetail-2-2{
		/*position:relative;
		top: 12px;*/
		font-size: 16px;
		color: red;
	}

	/*选择颜色*/
	#shopdetail-2-8{
		float: left;
		width: 20%;
		height: 100px;
		text-align: center;
		line-height: 80px;
		font-size: 22px;
	}

	.shopdetail-2-bu-2{
		margin-right: 3%;
		margin-bottom: 4%;
		height: 30px;
		margin-left: 10%;

	}
	/*选择颜色*/


	#shopdetail-2-9{
		float: left;
		margin-top: 20px;
		height: 100px;
	}
	#shopdetail-2-3{

	}
	#shopdetail-2-2{

	}
	#shopdetail-2-10{
		float: left;
		font-size: 28px;
		text-align: center;
	}
		/*商品数量的加减*/
	#shopdetail-2-11{
		font-size: 14px;
		margin-left: 42%;
		position: relative;
		top: 10px;
	}
	#shopdetaillast{
		float: left;
		width: 20px;
		height: 20px;
		text-align: center;
		border: 1px solid #000;
		background: #dda0dd;
		border-radius:3px 0px 0px 3px;
	}
	#shopdetailnum{
		float: left;
		height: 20px;
		width: 30px;
		text-align: center;
		background: rgb(255,192,203);
		color: red;
	}
	#shopdetailnext{
		display: inline-block;
		border: 1px solid #000;
		height: 20px;
		width: 20px;
		text-align: center;
		border-radius:0px 3px 3px 0px;
		background: #dda0dd;
	}
	/*商品数量的加减*/

	/*加入购物车*/
	#shopdetail-2-bu2{
		position: absolute;
		text-align: center;
		width: 240px;
		color: red;
		font-size: 28px;
		right: 30%;
		/*top: 650px;*/
		margin-top: 10%;
	}
	/*加入购物车*/
	
	#shopdetail-warn{
		position: absolute;
		text-align: center;
		width: 240px;
		color: red;
		font-size: 18px;
		right: 30%;
		/*top: 650px;*/
		margin-top: 19%;
	}

	#shopdetail-2-bu1{
		margin-left: 10%;
	}
	#shopdetail-to-nav span{
		margin-right: 4%;
		font-size: 25px;
	}
	#shopdetail-to-appraise{
		width: 100%;
		margin-top: 0px;
		background: rgb(251,247,246);
	}
		/*中间层*/
	#shopdetail-mask{
		background: rgba(251,247,246,0.5);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
	}
	/*收货地址界面*/
	#shopdetail-myaddress{
		background:rgb(209,209,209);
		position: fixed;
		width: 34%;
		height: 400px;
		top: 24%;
		left: 35%;
		min-width: 500px;
	}

</style>