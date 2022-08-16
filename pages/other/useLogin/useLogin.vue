<template>
	<view class="userCard">
		<!-- 1. logo -->
		<view class="userLoginOne">
			<u-avatar src="../../../static/profile.png" size="177rpx"></u-avatar>
		</view>

		<!-- 2.用户输入框 -->
		<view class="userLoginTwo">
			<view>
				<u--input maxlength=11 v-model="userName" placeholder="请输入手机号" prefixIcon="phone"
					prefixIconStyle="font-size: 22px;color: #909399">
				</u--input>
			</view>

			<view>
				<u--input maxlength=12 password v-model="userPwd" placeholder="请输入密码" prefixIcon="lock"
					prefixIconStyle="font-size: 22px;color: #909399">
				</u--input>
			</view>

			<view style="margin-bottom: 20rpx;">
				<u-button @click="useLoginBtn" type="primary" text="登录" color="#d81e06">
				</u-button>
			</view>
			<view
				style="font-size: 26rpx;color: blue;display: flex;justify-content: space-between;padding: 10rpx 60rpx;">
				<text @click="gotoReister">注册账户</text>
				<text>联系客户</text>
				<text @click="updatePwd">忘记密码</text>
			</view>
		</view>

		<!-- 3.修改密码身份验证 -->
		<view style="height: 100%;width: 100%;">
			<u-popup :show="showCheckidentity" @close="close">
				<view class="checkCard">
					<view style="display: flex;flex-direction: column;align-items: center;">
						<h3>身份验证</h3>
					</view>
					<view>
						<u--input v-model="realName" maxlength=5 placeholder="请输真实姓名" border="bottom" clearable>
						</u--input>
					</view>
					<view>
						<u--input v-model="idCard" maxlength=20 type="number" placeholder="请输入身份证号" border="bottom"
							clearable></u--input>
					</view>
					<view style="margin-top: 40px;">
						<u-button @click="checkIdentify" type="primary" text="验证" color="#d81e06"></u-button>
					</view>
				</view>
			</u-popup>
		</view>


		<!-- 账号停用提示 -->
		<view class="">
			<u-popup :show="disableShow" mode='center' round=4>
				<view class="popText">
					<view>
						<h3>提示</h3>
					</view>
					<view>账号异常，请联系在线客服!</view>
					<view style="width: 50%;">
						<u-button size='mini' color="#d81e06" text="确定" @click="Identify"></u-button>
					</view>
				</view>
			</u-popup>
		</view>

	</view>
</template>

<script>
	import {
		userLogin,
		checkIdentify
	} from '@/network/apiFunction.js'
	export default {
		data() {
			return {
				userName: "13888888888",
				userPwd: "aa123123",

				showCheckidentity: false,

				realName: '',
				idCard: "",

				// 是否弹窗账号停用提示
				disableShow: false

			}
		},
		methods: {

			close() {

				this.showCheckidentity = false
			},


			gotoReister() {
				console.log("立即去注册")
				uni.$u.route({
					url: 'pages/other/register/register',
				})
			},
			updatePwd() {
				console.log("修改密码")

				this.showCheckidentity = true

			},
			// 修改密码身份验证
			checkIdentify() {

				if (this.realName != '' && this.idCard != '') {

					let data = {
						realName: this.realName,
						idCard: this.idCard
					}

					uni.showLoading({
						title: "身份验证中"
					})

					checkIdentify(data).then(res => {
						console.log("身份验证", res)
						if (res.code == 1) {

							setTimeout(res => {
								uni.hideLoading()
								uni.showToast({
									title: "验证成功",
									icon: 'success'
								})


								setTimeout(() => {
									uni.$u.route({
										url: 'pages/other/updatePwd/updatePwd',
									})
									this.realName = ''
									this.idCard = ''
								}, 1555)

							}, 1660)
						} else {

							setTimeout(() => {
								uni.showToast({
									title: "验证失败",
									icon: 'error'
								})
							}, 1000);

						}
					})
				} else {

					uni.showToast({
						title: "提交内容为空"
					})
				}

			},
			useLoginBtn() {
				// 用户提交登录
				let data = {
					userName: this.userName,
					password: this.userPwd
				}
				uni.showLoading({
					title: "登录中"
				})
				userLogin(data).then(res => {

					if (res.code == 1) {

						// 校验账号是已经停用
						if (res.data.state == 0) {

							setTimeout(() => {
								this.disableShow = true
								uni.hideLoading()
							}, 1000)


						} else {

							setTimeout(() => {

								uni.hideLoading()
								uni.showToast({
									title: '登录成功'
								})
								setTimeout(res => {
									// 跳转首页
									uni.$u.route({
										url: 'pages/index/index',
										type: "switchTab"
									})
								}, 1000)
							}, 1666)

							// 登录成功设置Btoken
							uni.setStorage({
								key: 'Btoken',
								data: res.token,
							});

							uni.setStorage({
								key: 'userID',
								data: res.data.user_id,
							});

							uni.setStorage({
								key: 'realName',
								data: res.data.nickName,
							});

							uni.setStorage({
								key: 'phone',
								data: res.data.userName,
							});
						}

					} else {

						uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
				})
			},

			// 账号停用联系管理员
			Identify(value) {

				console.log("账号异常,请联系在线客服!")
				this.disableShow = false
			}
		}
	}
</script>

<style>
	.userCard {
		/* border: 1px solid tomato; */
		height: 100%;
		width: 100%;
	}

	page {
		background-color: #ededed;
	}

	.userLoginOne {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 100rpx;
	}

	.userLoginTwo {
		margin: 20rpx 40rpx;
		border-radius: 15px;
		background-color: white;
		padding: 40rpx 0;
	}

	.userLoginTwo>view {
		display: flex;
		align-items: center;
		padding: 20rpx 60rpx;
	}

	.checkCard {
		height: 1246rpx;
	}

	.checkCard>view {
		/* border: 1px solid green;'' */
		margin: 20rpx 40rpx;
	}

	.popText {
		/* border: 1px solid tomato; */
		height: 250rpx;
		margin: 20rpx 40rpx;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
</style>
