<template>
	<div class=" wrapper">
			<ul class="content" v-if="type=='essay',essayContent">
				<router-link class='allContent' tag='li' :to="'detail/'+item.content_id+'/'+1" v-for="item,index in essayContent " :key="index">
					<img class="imgs" :src="item.author[0].web_url" />
					<div class="contents">
						<p>{{item.hp_title}}</p>
						<p>{{item.author[0].user_name}}</p>
					</div>
				</router-link>
			</ul>
			<ul class="content" v-else-if="type=='serialcontent',serialContent">
				<router-link class='allContent' tag='li' :to="'detail/'+item.id+'/'+2" v-for="item,index in serialContent " :key="index">
					<img class="imgs" :src="item.author.web_url" />
					<div class="contents">
						<p>{{item.title}}</p>
						<p>{{item.author.user_name}}</p>
					</div>
				</router-link>
			</ul>
			<ul class="content" v-else-if="type=='question',questionContent">
				<router-link class='allContent' tag='li' :to="'detail/'+item.question_id+'/'+3" v-for="item,index  in questionContent " :key="index">
					<img class="imgs" :src="item.author_list[0].web_url" />
					<div class="contents">
						<p>{{item.question_title}}</p>
						<p>{{item.answer_content}}</p>
						
					</div>
				</router-link>
			</ul>
			<ul class="content" v-else-if="type=='music',musicContent">
				<router-link class='allContent' tag='li' :to="'detail/'+item.id+'/'+4" v-for="item,index  in musicContent " :key="index">
					<img class="imgs" :src="item.author.web_url" />
					<div class="contents">
						<p>{{item.story_title}}</p>
						<p>{{item.title}}|{{item.author.user_name}}</p>
					</div>
				</router-link>
			</ul>
	</div>
</scroller>
</template>

<script>

export default {
	name:'tabContent',
	computed:{
		essayContent(){
			return this.$store.getters.essay
		},
		serialContent(){
			return this.$store.getters.serialcontent
		},
		questionContent(){
			return this.$store.getters.question
		},
		musicContent(){
			return this.$store.getters.music
		},
		type(){
			return this.$store.state.newType
		}
	},
	components:{
		
	},
	created(){
		this.$store.dispatch('setType','essay')
	},
	methods:{
		
	},
}
</script>

<style>
.bottom{
	height: 6.7rem;
}
.allContent{
	overflow: hidden;
	padding: .3rem 0;
	border-bottom: 1px  solid #F1F1F1;
}
.imgs{
	float: left;
	width: 1.5rem;
	padding-left:.2rem ;
}
.contents{
	float: left;
	margin-left:1rem ;
}
.contents p{
	width: 8rem;
	padding: .1rem 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.contents p:nth-child(2){
	opacity: .4;
}

</style>