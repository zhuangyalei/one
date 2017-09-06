let mutations= {
		set (state,data){
			state.today=data
		},
		showImg(state){
			state.imgShow = true;
		},
		hideMaskImg(state){
			state.imgShow = false;
		}
	}
export default mutations;