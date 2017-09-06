<template>
	<div id="mask"  v-isShow='imgShow' @click='hideImg'>
    	<div class="content">
	        <p>{{content0.volume}}</p>
	        <img :src="content0.img_url">
	        <div>
	         	<span>{{content0.title}}</span>
	         	<span>|</span>
	         	<span>{{content0.pic_info}}</span>
	        </div>
    	</div>
	</div>
</template>

<script>
export default {
    name: 'oneMasks',
    computed:{
      	content0(){
			return this.$store.getters.today.content_list[0]
		},
		imgShow(){
			return this.$store.state.imgShow
		}
    },
    methods:{
    	hideImg(){
        	this.$store.commit('hideMaskImg');
      	}
    },
    directives: {
      	isShow: {
        	bind(el){
          		el.onclick = function() {
            		el.style.left = "100%"
          		}
        	},
        	update(el,binding){
          		let boo = binding.value;
          		if (boo) {
            		el.style.left = "0"
          		}
        	}
      	}
    }
}
</script>
  
<style  scoped>
  #mask {
    position: fixed;
    left: 100%;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    color: #fff;
    font: 0.24rem/0.94rem '微软雅黑';
    background: rgba(0,0,0,.9);
    transition: .5s;
    z-index: 600;
   
  }
  #mask .content {
    margin: .5rem .4rem;
    text-align: left;
    font: .24rem/.94rem '微软雅黑';
  }
  #mask img {
    width: 100%;
  }
  #mask div {
    text-align: left;
  }
</style>