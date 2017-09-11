<template>
	<div id="detail" v-if='detailData'>
		<div class="main"  v-if='type == 1'>
		  	<x-header
			:left-options="{backText: ''}"
		  	>{{detailData.share_list.wx.title.slice(0,detailData.share_list.wx.title.indexOf('|'))}}
		  	<i slot="right" class="fa fa-bookmark-o" aria-hidden="true"></i>
		  	</x-header>
		  	<article>
		  		<div>
		  			<h1>{{title}}</h1>
			  		<p class="author">作者：{{detailData.author[0].user_name}}</p>
			  		<div class="content" v-html="content"></div>
		  		</div>s
		  	</article>
		</div>
		<div class="main"  v-else-if='type == 2'>
		  	<x-header
			:left-options="{backText: ''}"
		  	>{{detailData.share_list.wx.title.slice(0,detailData.share_list.wx.title.indexOf('|'))}}
		  	<i slot="right" class="fa fa-bookmark-o" aria-hidden="true"></i>
		  	</x-header>
		  	<article>
		  		<div>
		  			<h1>{{title}}</h1>
			  		<p class="author">作者：{{detailData.author.user_name}}</p>
			  		<div class="content" v-html="content"></div>
		  		</div>s
		  	</article>
		</div>
		<div class="main"  v-else-if='type == 3'>
		  	<x-header
			:left-options="{backText: ''}"
		  	>{{detailData.share_list.wx.title.slice(0,detailData.share_list.wx.title.indexOf('|'))}}
		  	<i slot="right" class="fa fa-bookmark-o" aria-hidden="true"></i>
		  	</x-header>
		  	<article>
		  		<div>
		  			<h1>{{title}}</h1>
			  		<p class="asker">{{detailData.asker.user_name}}问：</p>
			  		<p class="questionContent">{{detailData.question_content}}</p>
			  		<p class="answerer">{{detailData.answerer.user_name}}答：</p>
			  		<div class="content" v-html="content"></div>
		  		</div>s
		  	</article>
		</div>
		<div class='main' v-else-if='type == 4'>
			<div class="music" v-bind:style="{backgroundImage:`url(${detailData.feeds_cover})`}">
				<img class="cover" :src="detailData.cover"/>
				<p class="musicName">{{detailData.title}}{{detailData.author.user_name}}</p>
			</div>
			<article>
				<h1>{{title}}</h1>
		  		<div class="content" v-html="content"></div>
	  		</article>
		</div>
		<div class='main' v-else-if='type == 5'>
			<article>
				<h1>{{title}}</h1>
		  		<div class="content" v-html="content"></div>
	  		</article>
		</div>
	</div>
</template>

<script>
import { XHeader } from 'vux'
export default{
	name:'detail',
	components:{
		XHeader
	},
	created(){
		this.$store.dispatch('getDetail',this.$route.params)
	},
	computed:{
//		item.type:
//				0：图文
//				1：阅读
//				2：连载
//				3：问答
//				4：音乐
//				5：电影
//				6：广告
		type(){
			return this.$route.params.type
		},
		detailData(){
    		return this.$store.getters.detailData
    	},
    	content() {
			let content='';
			let type = this.$route.params.type
		  	if (type == 5) {
		  		content = this.$store.getters.detailData.content;
		  	} else if (type == 3) {
		  		content = this.$store.getters.detailData.answer_content;
		  	}else if(type==2) {
		  		content = this.$store.getters.detailData.content;
		  	}else if(type==4) {
		  		content = this.$store.getters.detailData.story;
		  	}else {
		  		content = this.$store.getters.detailData.hp_content;
		  	}
		  	console.log(content);
		  	return content;
				
	   },
	   title() {
			let title='';
			let type = this.$route.params.type
		  	if (type == 5) {
		  		title = this.$store.getters.detailData.title;
		  	} else if (type == 3) {
		  		title = this.$store.getters.detailData.question_title;
		  	}else if(type==2) {
		  		title = this.$store.getters.detailData.title;
		  	}else if(type==4) {
		  		title = this.$store.getters.detailData.story_title;
		  	}else {
		  		title = this.$store.getters.detailData.hp_title;
		  	}
		  	return title;
				
	   },
	},
	
}
	
</script>

<style scoped> 
	#detail .music{
		height: 5rem;
		width: 100%;
		text-align: center;
	}
	#detail .cover{
		width: 3rem;
		margin: .8rem 0 .2rem;
	}
	.music .musicName{
		color: white;
	}
	article{
		padding: 0 .2rem;
	}
	.author{
		margin: .5rem 0;
	}
	#detail .content p{
		margin-bottom:.2rem ;
	}
	.asker,.answerer{
		margin-bottom: .2rem;
		color: rgba(0,0,0,0.8);
	}
	.questionContent{
		margin-bottom:1rem ;
	}
</style>