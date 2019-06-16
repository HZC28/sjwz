<template>
	<!-- 我的收货地址页面 -->
	<div id="address">
		<div id="address-content">

			<div id="address-1">
				<span style="color:red;" @click="addaddress()">+新增收货地址</span>
				<span style="float:right">您已添加{{this.addressnum}}个收货地址，最多可以添加15个</span>
			</div>

			<!-- 已添加的收货地址 -->
			<div id="myaddress" v-for="(ar,index) in this.addresses">
				<div id="myaddress-1">
					<span id="myaddress-1-1">{{ar.peoplename}}</span>
					<button style="color:red;" v-if="ar.default==true">默认地址</button>
					<span id="myaddress-1-2">{{ar.label}}</span>
				</div>
				<div id="myaddress-2">
					所属地区：{{ar.localtion.province}}
					{{ar.localtion.city}}{{ar.localtion.county}}
				</div>
				<div id="myaddress-3">详细地址：{{ar.detailaddress}}</div>
				<div>联系电话：{{ar.cellphone}}</div>
				<div id="myaddress-4">
					<button @click="setdefault(index)">设为默认地址</button>
					<span @click="addresschange(index)">编辑</span>
				</div>
			</div>
			<!-- 已添加的收货地址 -->

			<div id="address-1">
				<span style="color:red;" @click="addaddress()">+新增收货地址</span>
				<span style="float:right">您已添加{{this.addressnum}}个收货地址，最多可以添加15个</span>
			</div>
		</div>
		<!-- 中间层 -->
		<div id="address-mask" style="display:none"></div>
		<!-- 添加新的收货地址界面 -->
		<div id="address-addaddress" style="display:none">
			<addaddress v-on:listenreturn="returnaddress()" :oldaddress="this.olddata"></addaddress>
		</div>
	</div>
</template>
<script>
import myheader from "../public/header.vue"
import myfooter from "../public/footer.vue"
import infonav from "./infonav.vue"
import addaddress from "./addaddress.vue"
	export default{
		data:function(){
			return{
				addresses:[],
				addressnum:0,
				olddata:1
			}
		},
		created:function(){
			var self=this
			$.ajax({
		    type: "GET",
			url: "../../../static/data/address.json",
		    success: function(data) {
		    	//console.log(data)
		        self.addresses=data.address
		        self.addressnum=data.address.length
		    }
			});
		},
		components:{
			myfooter,
			myheader,
			infonav,
			addaddress
		},
		methods:{
			addaddress:function(){
				document.getElementById('address-mask').style.display="block"
				document.getElementById('address-addaddress').style.display="block"
			},
			returnaddress:function(){
				document.getElementById('address-mask').style.display="none"
				document.getElementById('address-addaddress').style.display="none"
			},
			setdefault:function(index){
				for(let i=0;i<this.addresses.length;i++){
					this.addresses[i].default=false
				}
				this.addresses[index].default=true
			},
			addresschange:function(index){

			}
		}
	}
</script>
<style>
	*{
		margin:0px;
		padding: 0px;
	}
	/*我的收货地址页面*/
	#address{
		width: 100%;
		background: rgb(209,209,209);
	}
	/*主体*/
	#address-content{
		width: 50%;
		margin-left: 25%;
		margin-top: 10px;
		font-size: 22px;
		min-width: 600px;

	}
	/*已添加的收货地址*/
	#myaddress{
		margin-bottom: 10px;
		background:rgb(251,247,246);
		height: 240px;
		position: relative;
	}
	#myaddress>div{
		margin-top: 5px;
		text-align: center;
	}
	#myaddress-1-1{
		font-size: 35px;
		margin-left: -70%;
		}
	#myaddress-1-2{
		position: absolute;
		font-size: 22px;
		right: 8%;
		top: 10px;
	}
	#myaddress-4{
		position: relative;
		margin-left: 50%;
		margin-bottom:20px;
		top: 20px;
	}
	#myaddress-4 button{
		margin-right: 12%;
		color: red;
	}
	#myaddress-4 span{
		color: #ff8c00;
	}
	/*中间层*/
	#address-mask{
		background: rgba(251,247,246,0.5);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
	}
	/*添加新的收货地址界面*/
	#address-addaddress{
		background:rgb(209,209,209);
		position: fixed;
		width: 30%;
		height: 300px;
		top: 25%;
		left: 40%;
		min-width: 300px;
	}
</style>