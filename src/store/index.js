
import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
       today:{
       	content_list:[
       		{
       			share_info:{
       				title:''
       			}
       		}
       	],
       	weather:{
       		date:'',
       	},
       },
      	imgShow:false,
		detailData:null,
		allSwiper:null,
		type:'essay',
		newType:'essay',
		essay:null,
		serialcontent:null,
		question:null,
		music:null,
		index:null,
		initloading:false,
		usename:[],
		password:[],
		rePassword:[],
    }, 
	getters,
	mutations,
	actions,
});

export default store
