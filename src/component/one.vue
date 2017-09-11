<template>
	<div id="one">
		<one-Masks></one-Masks>
		<div class="nowWrap">
			
			<router-link to = '/day' tag='div' class='title'>
				{{today}}
				<div>
					<span>{{weather.city_name}}</span>
					<span>{{weather.climate}}</span>
					<span>{{weather.temperature}}℃</span>
				</div>
			</router-link>
			<scroller 
				:on-refresh="refresh"
				ref="myscroller">
				<Inset></Inset>
				<today-news></today-news>
				<content-list ></content-list>
			</scroller>
			
		</div>
		
		<foot-nave></foot-nave>
	</div> 
</template>

<script>

import Inset from '@/component/inset';
import footNave from '@/component/footNave';
import contentList from '@/component/contentList';
import oneMasks from '@/component/mask';
import todayNews from '@/component/todayNews';
import $ from 'jquery'
import Vue from 'vue';
import VueScroller from 'vue-scroller';
Vue.use(VueScroller)

export default {
	name: 'one',
	data(){
		return{
			numb:0,
		}
	},
  	components: {
	    footNave,
	    Inset,
	    contentList,
	    oneMasks,
	    todayNews
   },
	computed:{
		today() {
			return this.$store.getters.today.weather.date.split('-').join('  /  ');	
		},
		weather(){
			return this.$store.getters.today.weather
		},
		content0(){
			return this.$store.getters.today.content_list[0]
		},
		contents(){
			return this.$store.getters.today.content_list
		},
		
	},
	created(){
		this.$store.dispatch('oneLogin',this.numb)
	},
	methods:{
	    refresh() {
	        this.$store.dispatch('oneLogin',this.numb)
	    },
    }
}
</script>


<style scoped>
#one{
	position: relative;
	height: 100%;
	width: 100%;
}
#one .movebox{
	width: 2rem;
	height: 2rem;
	background: red;
}
#one .nowWrap{
	width: 100%;
	height: 100%;
	top: 0;
	left:0;
}
#one .vux-tab .vux-tab-item{
	font-size:.7rem ;
}

#one .title{
	position: fixed;
	width: 100%;
	padding: .05rem 0;
	font: .6rem/.6rem "微软雅黑";
	text-align: center;
	background: white;
	z-index: 10;
}
#one .title span{
	font: .3rem/.3rem "微软雅黑";
	margin: .1rem;
}

</style>
