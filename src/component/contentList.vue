<template>
	<ul id="contentList">
		<router-link class='contents' :to="'/detail/'+contents.item_id+'/'+contents.content_type" tag='li' :key='contents.item_id' v-for = 'contents in content'>
			<p class="contenTitle">-{{contents.share_list.wx.title.slice(0,contents.share_list.wx.title.indexOf('|'))}}-</p>
			<p class="contenName">{{contents.title}}</p>
			<p class='auther'>{{contents.share_list.wx.desc.slice(0,contents.share_list.wx.desc.indexOf(' '))}}</p>
			<img :src="contents.img_url" />
			<p class='forward'>{{contents.forward}}</p>
			<p v-if='contents.subtitle' class='subtitle'>--{{contents.subtitle}}</p>
			<div class="heart">
				<span class="today">{{today}}</span>
				<i class="fa fa-heart-o" aria-hidden="true"></i>
				<span>{{contents.like_count}}</span>
			</div>
		</router-link>
	</ul>
</template>
<script>
	export default {
		name :'contentList',
		computed:{
			content(){
				return this.$store.getters.contents.filter(function(value,index) {
					return value.content_type !=6
				});
			},
			today() {
				return this.$store.getters.today.weather.date.split('-').slice(1,3).join('月')+'日';	
			},
		},
		methods:{
			
		}
	}
</script>

<style scoped> 
#contentList .contents{
	display: block;
	border-bottom:.3rem solid #F1F1F1 ;
}
#contentList p{
	color: #000000;
}
#contentList .contenTitle{
	opacity: .7;
	text-align: center;
	margin: .3rem ;
}
#contentList .contenName{
	font: .6rem/.8rem "微软雅黑";
	
	margin:.3rem 5%;
}			
#contentList .auther{
	opacity: .7;
	margin:.3rem 5%;
}
#contentList img{
	margin: 0 5%;
	width: 90%;
}
#contentList .forward{
	opacity: .7;
	margin:.3rem 5%;
}
#contentList .subtitle{
	opacity: .7;
	margin:.3rem 5%;
	text-align: right;
}
#contentList .heart{
	opacity: .7;
	margin:.5rem 5%;
}
#contentList .fa-heart-o{
	margin-left:5rem ;
}
</style>