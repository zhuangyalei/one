<template>
	<div id="me">
		<div class="register">注册</div>
		<input ref='usename'  class="usename" type="text" placeholder="请输入账号"/>
		<br />
		<input ref='password' class="password" type="password" placeholder="请输入密码"/>
		<br />
		<span class="bt" @click="submit">登录</span>
		<foot-nave></foot-nave>
	</div>
</template>

<script>
	import footNave from '@/component/footNave';
	export default{
		components:{
			footNave,
		},
		methods:{
			submit(){
				
			}
		}
	}
	
</script>

<style scoped>
	#me{
		height: 100%;
		width: 100%;
		text-align: center;
		overflow: hidden;
		background: linear-gradient(
						0deg,
		 				rgba(180, 120, 120,.9) 20%,
		 				rgba(172, 120, 120, .9) 100%
		 			);
	}
	.register{
		position: absolute;
		right: 0;
		top: 0;
		padding: .4rem;
		color: white;
	}
	.usename{
		margin-top:2rem ;
	}
	.usename,
	.password,
	.rePassword{
		border-radius: .5rem;
		margin-bottom:2rem ;
		height: 1rem;
		width: 7rem;
		padding: .5rem;
		outline:none;
	}
	.bt{
		padding: .5rem 2rem;
		border-radius: ;
		font: .5rem/1rem "微软雅黑";
		border-radius: .5rem;
		background: #3a4563;
		color: white;
		
	}
</style>