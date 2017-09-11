let mutations= {
		set (state,data){
			state.today=data
		},
		showImg(state){
			state.imgShow = true;
		},
		hideMaskImg(state){
			state.imgShow = false;
		},
		updateDetail(state,data){
			state.detailData=data;
		}
		getAllswiper(state,data){
			state.allSwiper=data;
		}
	}
export default mutations;