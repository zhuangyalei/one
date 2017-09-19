export default {
	today(state){
		return state.today
	},
	contents(state){
		return state.today.content_list.slice(1)
	},
	detailData(state){
		return state.detailData
	},
	allSwiper(state){
		return state.allSwiper
	},
	
	essay(state){
		return state.essay
	},
	serialcontent(state){
		return state.serialcontent
	},
	question(state){
		return state.question
	},
	music(state){
		return state.music
	},
}
