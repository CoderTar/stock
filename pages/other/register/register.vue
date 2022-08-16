<template>
	<view class="registerCard">
		<!-- 1.logo -->
		<view class="palcLogoOne">
			<u-avatar src="../../../static/profile.png" size="177rpx"></u-avatar>
		</view>

		<!-- 2.用户输入 -->
		<view class="resisterTwo">
			<view>
				<u--input maxlength=11 prefixIcon="phone" type="number" placeholder="请输入手机号码" border="surround"
					clearable v-model="phoneNum"></u--input>
			</view>
			<view>
				<u--input maxlength=12 prefixIcon="lock" password placeholder="请输入6-16位密码" border="surround" clearable
					v-model="password">
				</u--input>
			</view>
			<view>
				<u--input maxlength=12 prefixIcon="lock" password placeholder="请再次输入6-12位密码" border="surround" clearable
					v-model="passwordTwo">
				</u--input>
			</view>

			<view class="randomNum">
				<text>随机安全码</text>
				<u-code-input v-model="randomNum" maxlength=4 size=27 hairline></u-code-input>
				<text style="color: blue;" @click="aKeyGet">一键获取</text>
			</view>

			<view>
				<u-button color="#d81e06" type="primary" text="立即注册" @click="gotoRegister"></u-button>
			</view>
		</view>
		<!-- 3.用户协议 -->
		<view class="registerThree">
			<view class="circular" @click="userAgree">
				<view class="circular_out" v-show="agreement"></view>
			</view>
			<text>提交注册功同意<text @click="seeAgreement"
					style="color: red;text-decoration: underline;">用户协议</text>相关内容</text>
		</view>
		<view style="font-size: 20rpx;text-align: center;color: red;margin-top: 20rpx;">
			风险提示：禁止他人代注册，请自行仔细阅读。
		</view>

	</view>
</template>

<script>
	import {
		randomNum
	} from './randomNum.js'

	import {
		userRegister,
		basisConfig
	} from '@/network/apiFunction.js'

	export default {
		data() {
			return {
				agreement: false,

				phoneNum: "",
				password: "",
				passwordTwo: "",
				randomNum: '',
				companyTitle: ""
			}
		},
		mounted() {

			basisConfig().then(res => {

				if (res.code == 1) {

					this.companyTitle = res.data.company_title
				} else {

					this.companyTitle = "默认前缀"
				}
			})
		},
		methods: {

			userAgree() {
				this.agreement = !this.agreement
				console.log("同意")
			},

			// 最后提交注册
			gotoRegister() {

				// 1.校验是否同意协议
				if (this.agreement) {

					// 2.校验输入内容不能为空
					if (this.phoneNum != '' && this.password != '' && this.passwordTwo != '' && this.randomNum != '') {


						// 3.校验手机号码是否有效
						if (uni.$u.test.mobile(this.phoneNum)) {

							// 4.校验密码长度不低于六位数
							if (uni.$u.test.rangeLength(this.password, [6, 12])) {

								// 5.校验前后两次密码是否一致
								if (this.password == this.passwordTwo) {

									let data = {
										userName: this.phoneNum,
										password: this.password,
										nickName: this.companyTitle + this.phoneNum.substring(7),
										interior: 0 //会员账号
									}

									uni.showLoading({
										title: "注册中"
									})
									// 5.提交最后注册网络请求
									userRegister(data).then(res => {
										if (res.code == 1) {

											setTimeout(() => {
												uni.hideLoading()
												uni.showToast({
													title: "注册成功",
													icon: 'success'
												})
											}, 1300)


											setTimeout(() => {
												uni.$u.route({
													delta: 1,
													type: 'navigateBack'
												})
											}, 2000)


										} else {

											uni.showToast({
												title: "注册失败",
												icon: 'error'
											})
										}
									})

								} else {

									uni.showToast({
										title: "两次密码不一致",
										icon: 'error'
									})
									this.password = ''
									this.passwordTwo = ''
								}

							} else {

								uni.showToast({
									title: "密码长度不够",
									icon: 'error'
								})
							}


						} else {

							uni.showToast({
								title: "手机格式有误",
								icon: 'error'
							})
						}

					} else {

						uni.showToast({
							title: "内容不能为空",
							icon: "error"
						})
					}
				} else {

					uni.showToast({
						title: "请同意用户协议",
						icon: "error"
					})
				}
			},
			// 一键获取随机安全码
			aKeyGet() {

				uni.showLoading({
					title: "获取中"
				})
				setTimeout(res => {
					randomNum().then(res => {
						this.randomNum = res
					})
					uni.hideLoading()
				}, 1888)

			},
			// 用户去查看协议详情
			seeAgreement() {
				uni.$u.route({
					url: 'pages/other/agreement/agreement',
				})
			}
		}
	}
</script>

<style>
	.registerCard {
		/* border: 1px solid tomato; */
		height: 200rpx;
		margin-top: 66rpx;
	}

	.palcLogoOne {
		/* border: 1px solid tomato;'' */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.resisterTwo {
		/* border: 1px solid green; */
		margin: 20rpx 40rpx;
	}

	.resisterTwo>view {
		margin: 10px 0;
	}

	u--input {
		text-align: center;
	}

	.registerThree {
		margin: 0 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20rpx;
	}

	.circular {
		width: 26rpx;
		height: 26rpx;
		border: 1px solid tomato;
		border-radius: 50%;
		margin: 0 20rpx;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.circular_out {
		width: 13rpx;
		height: 13rpx;
		background-color: tomato;
		border-radius: 50%;
	}

	.randomNum {
		border: 1px solid #dadbde;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #c0c4cc;
		font-size: 30rpx;
		line-height: 70rpx;
		border-radius: 10rpx;
		padding: 0 20rpx;
	}
</style>
