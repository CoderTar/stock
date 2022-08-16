import HTTP from '@/network/request.js'
import API from '@/network/api.js'

// 1.获取基本配置
export async function basisConfig() {
	let response = await HTTP.get(API.basisConfig)
	return response
}

// 2.获取首页轮播图
export async function imageAd() {
	let response = await HTTP.get(API.imageAd)
	return response
}

// 3.用户绑定银行卡
export async function addCard(params) {
	let response = await HTTP.post(API.addCard, params)
	return response
}

// 4.获取有效银行
export async function effectiveBank() {
	let response = await HTTP.get(API.effectiveBank)
	return response
}


// 5.获取用户银行卡
export async function userBankCard(params) {
	let response = await HTTP.get(API.userBankCard, {
		params: params
	})
	return response
}

// 6.用户修改银行卡
export async function userUpdateCard(params) {
	let response = await HTTP.put(API.userUpdateCard, params)
	return response
}

// 7.实名认证（文字）
export async function realName(params) {
	let response = await HTTP.post(API.realName, params)
	return response
}

// 8.获取用户实名信息
export async function getUserIdcard(params) {
	let response = await HTTP.get(API.getUserIdcard, {
		params: params
	})
	return response
}

// 9.用户注册
export async function userRegister(params) {
	let response = await HTTP.post(API.userRegister, params)
	return response
}

// 10.用户登录
export async function userLogin(params) {
	let response = await HTTP.post(API.userLogin, params)
	return response
}

// 11.用户修改密码
export async function updatePwd(params) {
	let response = await HTTP.put(API.updatePwd, params)
	return response
}

// 12.用户身份验证
export async function checkIdentify(params) {
	let response = await HTTP.post(API.checkIdentify, params)
	return response
}


// 13.获取用户信息
export async function getUserInfo(params) {
	let response = await HTTP.get(API.getUserInfo, {
		params: params
	})
	return response
}

// 14.用户获取充值账户
export async function getPayTpye(params) {
	let response = await HTTP.get(API.getPayTpye, {
		params: params
	})
	return response
}

// 15.用户进行账户充值
export async function userRecharge(params) {
	let response = await HTTP.post(API.userRecharge, params)
	return response
}


//16.删除身份验证失败
export async function deleteIDcard(params) {
	let response = await HTTP.delete(API.deleteIDcard, params)
	return response
}

//17.用户提交提现申请
export async function userWithdrawal(params) {
	let response = await HTTP.post(API.userWithdrawal, params)
	return response
}


//18.获取某一支股票详情
export async function stockDetail(params) {
	let response = await HTTP.get(params)
	return response
}
