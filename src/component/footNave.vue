<template>
	
	<tabbar>
		<tabbar-item selected link='/'>
			<i slot="icon" class="fa fa-circle-o" aria-hidden="true"></i>
			<span slot="label">one</span>
		</tabbar-item>
		<tabbar-item link='/all'>
			<i slot="icon" class="fa fa-align-justify" aria-hidden="true"></i>
			<span slot="label">all</span>
		</tabbar-item>
		<tabbar-item link='/me'>
			<i slot="icon" class="fa fa-user-o" aria-hidden="true"></i>
			<span slot="label">me</span>
		</tabbar-item>
	</tabbar>
	
</template>

<script>
	
import { Tabbar, TabbarItem} from 'vux'

export default {
	
	name: 'footNave',
	components: {
	    Tabbar,
	    TabbarItem
    }
}
	
</script>

<style scoped>
	
.weui-tabbar {
	position: fixed ;
}
	
</style>