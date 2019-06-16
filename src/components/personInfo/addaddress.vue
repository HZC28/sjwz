<template>
	<!-- 增加收货地址 -->
	<div id="addaddress">
		<h2 style="color:red">新增地址/编辑地址</h2>
		<div id="addaddress-1">
			收&nbsp&nbsp货&nbsp&nbsp人：<input type="text">
		</div>
		<div id="addaddress-2">
			联系电话：<input type="text">
		</div>
		<div id="addaddress-3">
			所属地区：{{this.oldaddress}}
			<select>
				<option value="广东">广东</option>
				<option value="广西">广西</option>
				<option value="北京">北京</option>
				<option value="上海">上海</option>
			</select>省
			<select>
				<option value="volvo">广州</option>
				<option value="saab">深圳</option>
			</select>市
			<select>
				<option value="volvo">安生</option>
				<option value="saab">三</option>
			</select>县
		</div>
		<div id="addaddress-4">
			详细地址：<input type="text">
		</div>
		<div id="addaddress-5">
			<button @click="addaddressconfirm()">确定</button>
			<button @click="addaddresscancel()">取消</button>
		</div>
	</div>
</template>
<script>
	export default{
		props:[
				"oldaddress"
		],
		methods:{
			addaddressconfirm:function(){
				this.$emit('listenreturn')
			},
			addaddresscancel:function(){
				this.$emit('listenreturn')
			}
		}
	}
</script>
<style>
	#addaddress{
		font-size: 22px;
		text-align: center;
	}
	#addaddress>div{
		margin-top: 2%;
	}
	#addaddress-5 button{
		width: 25%;
		margin-top: 20px;
		color: red;
		margin-left: 5%
	}
</style>