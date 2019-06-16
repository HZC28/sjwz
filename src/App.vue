<template>
  <div id="app">
  	<myheader id="myheader"  @listenlogin="login" :user="loginuser"></myheader>
    <router-view @listenlogin="login"></router-view>
    <myfooter id="myfooter"></myfooter>
    <div id="home-mask" style="display:none"></div>
	<login id="home-login" style="display:none" v-on:listenloginsuccess='loginsuccess'></login>
  </div>
</template>

<script>
import myheader from "./components/public/header.vue"
import myfooter from "./components/public/footer.vue"
import login from "./components/user/login.vue"
export default {
  name: 'App',
  data:function(){
		return{
			loginuser:this.myglobal.user
		}
	},
	methods:{
		login:function(){
			document.getElementById('home-mask').style.display='block';
			document.getElementById('home-login').style.display='block';
		},
		loginsuccess:function(user){
			if(user==undefined){
				user=""
			}
			this.myglobal.user=user;
			this.loginuser=this.myglobal.user;
			document.getElementById('home-mask').style.display='none';
			document.getElementById('home-login').style.display='none';
		}
	},
  components:{
		myheader,
		myfooter,
		login
	}
}
</script>

<style>
	*{
		margin:0px;
		padding: 0px;
	}
	#home{
		width: 100%;
		background: rgb(209,209,209);
		min-width: 1100px;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	    width: 100%;
		background: rgb(209,209,209);
		min-width: 1100px;
	  
	}
	#home-mask{
		background: rgba(251,247,246,0.7);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
	}
	#home-login{
		background:rgb(209,209,209);
		position: fixed;
		width: 30%;
		height: 300px;
		top: 25%;
		left: 35%;
		min-width: 300px;
	}
</style>
