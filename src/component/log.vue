<template>
	<div id="log"> 
		<input ref='usename'  class="usename" type="text" placeholder="请输入账号"/>
		<br />
		<input ref='password' class="password" type="password" placeholder="请输入密码"/>
		<br />
		<input ref='rePassword' class="rePassword" type="password" placeholder="请核对密码"/>
		<br />
		<span class="bt" @click="submit">注册</span>
	</div>
</template>

<script>
export default{
	
	methods:{
		submit(){
			let usename = this.$refs.usename.value;
			let password = this.$refs.password.value;
			let rePassword = this.$refs.rePassword.value;
			if(password!=rePassword){
				this.$vux.toast.text('两次密码不一致', 'middle')
				return
			}
			this.$store.commit('setUsename',usename)
			this.$store.commit('setPassword',password)
			this.$store.commit('setRepassword',rePassword)
			this.$vux.toast.text('注册成功', 'middle')
		}
	}
}
</script>

<style scoped>
	#log{
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