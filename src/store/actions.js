

let actions = {
		oneLogin(store,vlue){
		 fetch('/napi/onelist/idlist')
				.then(res =>{
					return res.json()
				}).then(data=>{
					console.log(vlue)
					fetch(`/napi/onelist/${data.data[vlue]}/0`)
					.then(res=>{
						return res.json()
					}).then(data=>{
						store.commit('set',data.data)
						console.log(data)
					})
				})
		},
	}
export default actions;