<template>
    <div id="todayNews" >
      	<div id="newDir" >
          	<p class="dir" @click="show">
            	<span>一个</span>
            	<span>{{content0.share_info.title}}</span>
            	<i v-if='up' class="fa fa-angle-down" aria-hidden="true"></i>
            	<i v-else='' class="fa fa-angle-up" aria-hidden="true"></i>
         	 </p>
          	<ul  ref='todaynews'>
            	<li v-for='data,index in shareList' >
              		<router-link :to="'/detail/'+data.id+'/'+data.content_type" class='clearFix' >
	                  	<i class="fa fa-angle-right" aria-hidden="true"></i>
	                  	<div class="title">
	                    	<p>{{data.category}}</p>
	                    	<p>{{data.title}}</p>
	                  	</div>
             		 </router-link>
            	</li>
          	</ul>
      	</div>
    </div>
</template>

<script type="text/javascript">
import $ from 'jquery'
export default {
	name: 'todayNews',
	data(){
		return{
			up:false
		}
	},
	computed: {
		content0() {
			return this.$store.getters.today.content_list[0]
		},
		shareList() {
			let share = this.$store.getters.today.content_list;
			share = share.filter(function(obj) {
				return obj.content_type != 6;
			});
			let shareData = [];
			for(var i = 1; i < share.length; i++) {
				shareData.push({
					id:share[i].item_id,
					category: share[i].share_list.wx.title.split('|')[0].trim(),
					title: share[i].title,
					content_type: share[i].content_type,
					author: share[i].share_list.wx.desc.split(' ')[0]
				});
			};
			return shareData;
		}
	},
	methods: {
		show(){
			let ul = this.$refs.todaynews;
			let li = ul.querySelectorAll('li')[0];
			let H = $('li').outerHeight(true)*this.shareList.length;
			this.up=!this.up;
			if(this.up){
				$(ul).animate({
					height:H
				})
			}else{
				$(ul).animate({
					height:0
				})
			}
			
		},
	}
}</script>

<style scoped>
  #todayNews {
    margin-top: .15rem;
   	border-bottom: .2rem solid #F1F1F1;
  }
  .dir {
    height: 0.8rem;
   text-align: center;
    font: .26rem/.8rem '微软雅黑';
  }
   #newDir ul{
   	padding-bottom: .2rem;
   	overflow: hidden;
   	height: 0;
   }
  #newDir li {
    position: relative;
  }
   #newDir li .fa{
   	color: #000000;
   }
  #newDir .fa-angle-right {
    position: absolute;
    left: 0;
    top: 0;
    width: .5rem;
    text-align: center;
    font-size: .3rem;
    line-height: .65rem;
  }
  #newDir .title {
    padding-left: .5rem;
  }
  #newDir li {
    margin-top: .7rem;
  }
  #newDir .title p{
    text-align: left;
    font: .24rem/.3rem "微软雅黑";
    width: 100%;
    color: #000000;
  }
  #newDir .title p:nth-of-type(2){
    margin-top: .16rem;
    font-size: .26rem;
  }
</style>