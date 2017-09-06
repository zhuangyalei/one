<template>
	
	<div id="inset">
		<img :src= 'content0.img_url' />
		<p class="name">{{content0.title}} | {{content0.pic_info}}</p>
		<p class="forward">{{content0.forward}}</p>
		<p class="wordsInfo">{{content0.words_info}}</p>
		<div>
			<router-link to='/pen' class = 'pen'>
				<i class="fa fa-pencil-square-o" ></i>
				<span>小记</span>
			</router-link>
			<i class="fa fa-heart-o" aria-hidden="true" ></i>
			<span>{{content0.like_count}}</span>
			<i class="fa fa-bookmark-o" aria-hidden="true"></i>
		</div>
	</div>
	
</template>

<script>
	export default {
		name :'Inset',
		computed:{
			content0(){
				return this.$store.getters.today.content_list[0]
			},
			
		},
	}
</script>

<style scoped>
#inset{
	background: white;
	padding-bottom: .5rem;
	border-bottom: .2rem solid #F1F1F1;
}
#inset img{
	width: 100%;
}
#inset p{
	text-align: center;
	margin: .3rem 0;
	opacity: .7;
}
#inset .forward{
	margin: .7rem 0;
	opacity: 1;
}
#inset .wordsInfo{
	margin-bottom:1.2rem ;
}
#inset .pen{
	color: #000000;
	margin-left:.5rem ;
	padding: .2rem;
}
#inset .fa-heart-o{
	margin-left:5rem ;
}
#inset .fa-bookmark-o{
	margin-left:.5rem ;
}
</style>