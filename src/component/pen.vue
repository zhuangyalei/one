<template>

	<div class="pen">
		 <x-header :left-options="{backText: 'back'}" title="小记">
		 	<i slot='overwrite-left' class="fa fa-chevron-left" aria-hidden="true" @click="back"></i>
		 	<i slot='right' class="fa fa-long-arrow-down" aria-hidden="true"></i>
		 </x-header>
	
		<div class="time">
			{{today}}
			<div>
				<span>{{weather.city_name}}</span>
				<span>{{weather.climate}}</span>
				<span>{{weather.temperature}}℃</span>
			</div>
		</div>
		<img :src= 'content0.img_url' />
		<p class="name">{{content0.title}} | {{content0.pic_info}}</p>
		<textarea style='outline:none' class="forward">{{content0.forward}}</textarea>
		<p class="wordsInfo">{{content0.words_info}}</p>
	</div>

</template>

<script>
	import { XHeader } from 'vux';
	export default {
		name :'pen',
		components:{
			XHeader,
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
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
.pen{
	background: white;
}	
.pen .title{
	display: flex;
	
	text-align: center;
	font: .5rem/1 "微软雅黑" ;
	border-bottom: 2px solid #F1F1F1;
	flex-direction: row;
	justify-content: space-around;
}
.pen .vux-header{
	background: #FFFFFF;
	border-bottom: 2px solid #F1F1F1 ;
}
.pen .vux-header .vux-header-title{
	color: #000000;
}
.pen .fa-long-arrow-down{
	color: #000000
}
.pen .fa-chevron-left{
	color:#000000 
}
.pen .time{
	padding: .2rem 0;
	font: .6rem/.6rem "微软雅黑";
	text-align: center;
	background: #FFFFFF;
}
.pen .time span{
	font: .3rem/.3rem "微软雅黑";
	margin: .1rem;
}
.pen img{
	width: 100%;
}
.pen p{
	text-align: center;
	margin: .3rem 0;
	opacity: .7;
}
.pen .forward{
	margin: .3rem .4rem;
	padding: .5rem;
	width: 10rem;
	height: 5rem;
	border-radius:.5rem ;
	opacity: 1;
}
.pen .wordsInfo{
	padding: .2rem 0;
}


</style>