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
		},
		getAllswiper(state,data){
			const urlList = data.map((item, index)=>({
				img:item.cover,
			}))
			state.allSwiper=urlList;
		},
		msetType(state,data){
			state.newType=data;
		},
		msetIndex(state,data){
			state.index=data;
		},
		getEssay(state,data){
			console.log('messay')
			state.essay=data;
		},
		getSerialcontent(state,data){
			console.log('mserialcontent')
			state.serialcontent=data;
		},
		getQuestion(state,data){
			console.log('mquestion')
			state.question=data;
		},
		getMusic(state,data){
			console.log('mmusic')
			state.music=data;
		},
		newgetEssay(state,data){
			console.log('messay')
			state.essay=[...state.essay,...data];
		},
		newgetSerialcontent(state,data){
			console.log('mserialcontent')
			state.serialcontent=[...state.serialcontent,data];
		},
		newgetQuestion(state,data){
			console.log('mquestion')
			state.question=[state.question,...data];
		},
		newgetMusic(state,data){
			console.log('mmusic')
			state.music=[...state.music,...data];
		},
		setUsename(state,data){
			state.usenam.push(data)
		},
		setPassword(state,data){
			state.password.push(data)
		},
		setRepassword(state,data){
			state.rePassword.push(data)
		}
	}
export default mutations;