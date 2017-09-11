<template>
	<div class="all">
		<div class="title">
			<span>ONE</span>
			<span>IS</span>
			<span>ALL</span>
		</div>
		
		
		<foot-nave></foot-nave>
	</div>
</template>

<script>
import footNave from '@/component/footNave';
import { Swiper  } from 'vux'
export default {
	name: 'all',
	computed:{
		allSwiper(){
			return this.$store.getters.allSwiper
		}
	}
	components:{
		footNave,
	},
	created(){
		this.$store.dispatch('allSwiper')
	},
}
</script>

<style scoped>
	
	
	
</style>