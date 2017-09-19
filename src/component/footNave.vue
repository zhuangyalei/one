<template>
	
	<nav class="bottomnNav">
		<router-link :class="['bottomnNavs']" :to= item.links v-for='item,index in footNave' :key='index'>
			<i :class=item.className aria-hidden="true"></i>
			<span >{{item.name}}</span>
		</router-link>
	</nav>
</template>

<script>
export default {
	
	name: 'footNave',
	data(){
		return{
			footNave:[
				{links:'/',className:'fa fa-circle-o',name:'ONE'},
				{links:'/all',className:'fa fa-align-justify',name:'ALL'},
				{links:'/me',className:'fa fa-user-o',name:'ME'},
			]
		}
	},
	components: {
		
    }
}
	
</script>

<style scoped>
	
.bottomnNav {
	display: flex;
	width: 100%;
	flex-direction:row ;
	position: fixed ;
	bottom: 0;
	left: 0;
	background: white;
}

.bottomnNavs{
	width:33.3% ;
	text-align: center;
	font-size: .7rem;
	color: #000000;
}	
.select{
	color: greenyellow;
}
.bottomnNavs span{
	display: block;
	font-size: .4rem;
}
.bottomnNav .router-link-exact-active{
	color: green;
}
</style>