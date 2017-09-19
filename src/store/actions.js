

let actions = {
		oneLogin(store,item){
		 fetch('/napi/onelist/idlist')
				.then(res =>{
					return res.json()
				}).then(data=>{
					fetch(`/napi/onelist/${data.data[item]}/0`)
					.then(res=>{
						return res.json()
					}).then(data=>{
						store.commit('set',data.data)
						console.log(data)
					})
				})
		},
		getDetail(store,item){
//			item.type:
//				0：图文
//				1：阅读
//				2：连载
//				3：问答
//				4：音乐
//				5：电影
//				6：广告
console.log(item.id,item.type)
			if (item.type == 5) {  
			    fetch(`/napi/movie/${item.id}/story/1/0`)
			        .then( response => {
			            return response.json();
		        	}).then(data => {
		        		console.log(data.data.data[0])
		        		let detail = data.data.data[0];
		        		store.commit('updateDetail',detail)
		        	})
			} else if(item.type == 4){
			    fetch(`/napi/music/detail/${item.id}`)
			        .then( response => {
			            return response.json();
		        	}).then(data => {
		        		console.log(data.data)
		        		store.commit('updateDetail',data.data)
		        	})
			} else if(item.type == 3){
				 fetch(`/napi/question/${item.id}`)
			        .then( response => {
			            return response.json();
		        	}).then(data => {
		        		console.log(data.data)
		        		store.commit('updateDetail',data.data)
		        	})
			} else if(item.type == 2){
				 fetch(`/napi/serialcontent/${item.id}`)
			        .then( response => {
			            return response.json();
		        	}).then(data => {
		        		console.log(data.data)
		        		store.commit('updateDetail',data.data)
		        	})
			}else {
			    fetch(`/napi/essay/${item.id}`)
			        .then( response => {
			            return response.json();
		        	}).then(data => {
		        		console.log(data.data)
		        		store.commit('updateDetail',data.data)
		        	})
			}
		},
		allSwiper(store){
			fetch('/napi/reading/carousel')
				.then(response=>{
					return response.json();
				}).then(data=>{
			
			console.log(data.data)
					store.commit('getAllswiper',data.data)
				})
		},
		setType(store,item){
			let date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth()+1;
			fetch(`/napi/${item}/bymonth/${year}-${month}`)
				.then(response=>{
					return response.json();
				}).then(data=>{
					if(item=='essay'){
						console.log(data.data)
						store.commit('getEssay',data.data)
					}else if(item=='serialcontent'){
						console.log(data.data)
						store.commit('getSerialcontent',data.data)
					}else if(item=='question'){
						console.log(data.data)
						store.commit('getQuestion',data.data)
					}else if(item=='music'){
						console.log(data.data)
						store.commit('getMusic',data.data)
					}
					store.state.initloading = true;
				})
		},
		
		refresh(store,item){
			let date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth()+1;
			return fetch(`/napi/${item.type}/bymonth/${year}-${month}`)
				.then(response=>{
					return response.json();
				}).then(data=>{
					if(item=='essay'){
						console.log('essay')
						store.commit('getEssay',data.data)
					}else if(item=='serialcontent'){
						console.log('serialcontent')
						store.commit('getSerialcontent',data.data)
					}else if(item=='question'){
						console.log('question')
						store.commit('getQuestion',data.data)
					}else if(item=='music'){
						console.log('music')
						store.commit('getMusic',data.data)
					}
					return Promise.resolve();
				})
		},
		infinite(store,item){
			console.log('infinite')
			let date = new Date();
			let year = date.getFullYear();
			return fetch(`/napi/${item.type}/bymonth/${year}-${item.month}`)
				.then(response=>{
					return response.json();
				}).then(data=>{
					console.log(data)
					if(item.type=='essay'){
						console.log('data.data')
						store.commit('newgetEssay',data.data);
					}else if(item.type=='serialcontent'){
						console.log('serialcontent')
						store.commit('newgetSerialcontent',data.data);
					}else if(item.type=='question'){
						console.log('question')
						store.commit('newgetQuestion',data.data);
					}else if(item.type=='music'){
						console.log('music')
						store.commit('newgetMusic',data.data);
					}
					return Promise.resolve();
				})
		}
	}
export default actions;