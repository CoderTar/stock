const HTTP = uni.$u.http

HTTP.setConfig((config) => {

	// H5调试
	// config.baseURL = 'http://localhost:3000/'
	// 真机调试
	config.baseURL = 'http://192.168.3.58:3000/';

	// 图片地址需要手动调整上传身份证地方
	config.timeout = 10000,
		// 请求头
		config.header = {
			// 'content-type': 'application/json',
			// 'dataType': "json",
			'content-type': 'application/x-www-form-urlencoded',
			// Authorization: TOKEN
		}
	return config
})

// 请求拦截器(在请求之前能做点什么)
HTTP.interceptors.request.use((config) => {

	// console.log("请求拦截器", config)

	let token = uni.getStorageSync('Btoken');

	if (token) {
		console.log("有token")
		config.header['Authorization'] = token
	} else {
		console.log("无token")
	}


	// 判断请求为JSON格式
	// if (config.url == '/api/Account/ChangePwd' || config.url == '/api/Order/NurseFinishServe' || config.url ==
	// 	'/api/Order/GetPageOrderForNurse' || config.url == "/api/Account/Register" || config.url ==
	// 	"/api/Nurse/AddNurse" || config.url == '/api/Order/ErrorOrder' || config.url ==
	// 	'/api/Message/GetPageMessage') {


	// 	config.header['content-type'] = 'application/json'
	// }

	return config
})

// 响应拦截器
HTTP.interceptors.response.use((response) => {

	// if (response.statusCode == 200) {
	// 	console.log("响应拦截器-请求成功")
	// 	store.commit("colseLoading");
	// 	return response.data                                
	// }
	// console.log("响应拦截", response)
	return response.data

}, (response) => {


	if (response.statusCode == 401) {
		console.log("token 失效,请重新登录")

		uni.showModal({
			title: '提示',
			content: '身份过期请重新登录',
			success: function(res) {
				if (res.confirm) {
					uni.$u.route({
						url: 'pages/other/useLogin/useLogin',
						type: "reLaunch"
					})
				} else if (res.cancel) {
					uni.$u.route({
						url: 'pages/other/useLogin/useLogin',
						type: "reLaunch"
					})

				}
			}
		});

		return response.data
	}

	// uni.showToast({
	// 	title: '网络连接超时',
	// 	duration: 2000,
	// 	icon: "error"
	// });
	return Promise.reject(response)
})


export default HTTP
