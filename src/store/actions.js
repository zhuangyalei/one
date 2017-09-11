

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
		}
	}
export default actions;