const API = {
	// 1.获取基本配置
	basisConfig: "/Api/mobile/basisconfig",

	// 2.获取首页轮播图
	imageAd: "/Api/mobile/imageAd",

	// 3.绑定银行卡
	addCard: "/Api/mobile/addCard",

	// 4.获取有效银行
	effectiveBank: "/Api/mobile/effectiveBank",

	// 5.获取用户银行卡
	userBankCard: "/Api/mobile/userBankCard",

	// 6用户修改银行卡
	userUpdateCard: "/Api/mobile/userUpdateCard",

	// 7用户实名认证（文字）
	realName: "/Api/mobile/realName",

	// 8.获取用户实名信息
	getUserIdcard: "/Api/mobile/getUserIdcard",

	//9.用户注册
	userRegister: "/Api/mobile/userRegister",

	//10.用户登录
	userLogin: "/Api/mobile/userLogin",

	//11.用户修改密码
	updatePwd: "/Api/mobile/updatePwd",

	//12.用户身份验证
	checkIdentify: "/Api/mobile/checkIdentify",

	//13.获取用户信息
	getUserInfo: "/Api/mobile/getUserInfo",

	//14.用户获取充值账户
	getPayTpye: "/Api/mobile/getPayTpye",

	//15.用户进行账户充值
	userRecharge: "/Api/mobile/userRecharge",

	//16.删除身份验证失败
	deleteIDcard: "/Api/mobile/deleteIDcard",

	// 17.用户提交提现申请
	userWithdrawal: "/Api/mobile/userWithdrawal",
}
export default API
