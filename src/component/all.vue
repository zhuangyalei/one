<template>
	<div id="all" v-if='allSwiper'>
		<div class="title">
			<span>ONE</span>
			<span>IS</span>
			<span>ALL</span>
		</div>
		<swiper loop auto  :list = 'allSwiper'></swiper>
		<nav class="nav">
			<div class='navs' @click= 'getType(item.type,index)'  v-for='(item ,index) in allType' :key='item.index'>{{item.name}}</div>
			<span :style="{transform: 'translateX('+index*2.7 +'rem)',transition: '.5s'}" class="bottomNave"></span>
		</nav>
		<scroller 
			class='myscroller'
			:on-refresh="refresh"
			:on-infinite="infinite"
			refresh-text='loading'
			ref="myscroller">
			<tab-content></tab-content>
		</scroller>
		<foot-nave></foot-nave>
	</div>
</template>

<script>
import footNave from '@/component/footNave';
import tabContent from '@/component/tabContent';
import { Swiper  } from 'vux';


let date = new Date();
let month = date.getMonth()+1;

export default {
	name: 'all',
	data(){
		return{
			allType:[
				{name:'阅读',type:'essay'},
				{name:'连载',type:'serialcontent'},
				{name:'问答',type:'question'},
				{name:'音乐',type:'music'},
			],
		}
	},
	computed:{
		allSwiper(){
			return this.$store.getters.allSwiper
		},
		index(){
			return this.$store.state.index
		}
	},
	components:{
		footNave,
		Swiper,
		tabContent
	},
	methods:{
		getType(item,index){
			console.log('click')
			console.log(item,index)
			this.$store.commit('msetIndex',index)
			this.$store.dispatch('setType',item)
			this.$store.commit('msetType',item)
		},
		refresh(){
			console.log(1)
			let item = {
				type:this.$store.state.newType,
			} 
			this.$store.dispatch('refresh',item).then(this.$refs.myscroller.finishPullToRefresh());
		},
		infinite(){
			if(!this.$store.state.initloading){
				this.$refs.myscroller.finishInfinite();
				return
			}
			month--
			if(month<=0){
				return
			}
			let item = {
				type:this.$store.state.newType,
				month:month,
			}
			
			this.$store.dispatch('infinite',item).then(this.$refs.myscroller.finishInfinite())
		}	
	},
	created(){
		this.$store.dispatch('allSwiper')
	},
}
</script>

<style scoped>
#all{
	height: 100%;
}
.title{
	text-align: center;
	font-size:.5rem ;
	font-weight: bold;
	padding: .2rem 0;
}

.nav{
	position: relative;
	display: flex;
	flex-direction: row;
	padding: .2rem 0;
	background-color:#F1F1F1 ;
}
.navs{
	width:25% ;
	text-align: center;
	color: #000000;
}
.bottomNave{
	position: absolute;
	bottom: 0;
	width:25% ;
	height: .1rem;
	background: green;
	
}
.myscroller{
	top:6.8rem;
}
</style>