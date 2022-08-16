<template>
	<view class="withDrawalCard">
		<!-- 1.可用部分 -->
		<view class="withDrawalCardOne">
			<h2>余额提现</h2>
			<view style="display: flex;margin-top: 20rpx;">
				<text>可提现余额 : </text>
				<text style="color: red;">{{userMoney}}</text>
				<text style="margin: 0 20rpx;">元</text>
			</view>
		</view>

		<!-- 2.输入部分 -->
		<view class="withDrawalCardTwo" v-show="bindingState">

			<u-row justify="flex-start" gutter="10">
				<u-col span="3">
					<view class="demo-layout bg-purple">提现金额</view>
				</u-col>
				<u-col span="6">
					<view class="demo-layout bg-purple">
						<u--input type="number" maxlength=7 placeholder="请输入提现金额" border="none" v-model="withDrawalNum">
						</u--input>
					</view>
				</u-col>
			</u-row>
			<u-row justify="flex-start" gutter="12">
				<u-col span="3">
					<view class="demo-layout bg-purple">到账银行</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout">
						<text>{{bank_name}}</text>
						<text style="margin: 0 10rpx;">(尾号{{bank_card}})</text>
					</view>
				</u-col>
			</u-row>
			<u-row justify="flex-start" gutter="10">
				<u-col span="3">
					<view class="demo-layout bg-purple">手机号码</view>
				</u-col>
				<u-col span="3">
					<view class="demo-layout bg-purple">
						{{bank_mobile}}
					</view>
				</u-col>
			</u-row>

			<view style="margin: 50rpx 0;">
				<u-button color="#d81e06" type="primary" text="申请提现" @click="submitWithDrawal"></u-button>
			</view>
			<view>
				<view style="margin-bottom: 100rpx;">
					<h5>提现规则:</h5>
					<view style="font-size: 26rpx;color: gray;">
						<ol>
							<li>提现时间交易日9:30-15:00</li>
							<li>单笔提现不低于100元</li>
							<li>提现只能在交易日申请</li>
						</ol>
					</view>
				</view>
			</view>
		</view>


		<!-- 3.用户去绑定银行卡 -->
		<view v-show="!bindingState">
			<view style="margin: 50rpx 40rpx;">
				<u-button color="#d81e06" type="primary" text="绑定银行卡" @click="addCard"></u-button>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		userBankCard,
		getUserInfo,
		userWithdrawal
	} from "@/network/apiFunction.js"
	export default {
		data() {
			return {
				withDrawalNum: "",
				bank_card: "",
				bank_mobile: '',
				bank_name: "",

				// 是否已经绑定银行卡
				bindingState: false,

				// 可以提现余额
				userMoney: 0,

				// 提现的账户
				withdrawalAccount: ""
			}
		},
		mounted() {
			let data = {
				userId: uni.getStorageSync("userID")
			}
			getUserInfo(data).then(res => {
				if (res.code == 1) {
					console.log(res.data.account)
					this.userMoney = res.data.account
				}
			})
		},
		methods: {
			// 绑定银行卡
			addCard() {
				uni.$u.route({
					url: 'pages/other/addCard/addCard',
					params: {
						cardState: 0
					}
				})
			},
			submitWithDrawal() {
				console.log("申请提现")

				if (this.withDrawalNum != '' && this.withDrawalNum >= 100) {

					if (this.withDrawalNum <= this.userMoney) {

						console.log(this.withDrawalNum)
						console.log("可以提现")

						let data = {
							userID: uni.getStorageSync("userID"),
							realName: uni.getStorageSync("realName"),
							phone: uni.getStorageSync("phone"),
							outMoney: this.withDrawalNum,
							account: this.withdrawalAccount,

						}

						uni.showLoading({
							title: '提交中'
						});


						userWithdrawal(data).then(res => {
							if (res.code == 1) {

								setTimeout(() => {
									uni.hideLoading()
									uni.showToast({
										title: "申请提交成功",
										icon: 'success'
									})

								}, 1000)

								setTimeout(() => {
									uni.navigateBack({
										delta: 1
									})
								}, 3333)

							} else {
								uni.showToast({
									title: "提交失败",
									icon: 'error'
								})
							}
						})
					} else {


						uni.showToast({
							title: "提现金额超出",
							icon: "error"
						})

						this.withDrawalNum = ''
					}


				} else {

					uni.showToast({
						title: "请输入正确金额",
						icon: "error"
					})
				}
			}
		},
		onShow() {

			let data = {
				userId: uni.getStorageSync("userID")
			}

			let objAccount = {}
			userBankCard(data).then(res => {
				var reg = /^(\d{3})\d{4}(\d{4})$/;
				if (res.code == 1) {

					console.log("用户银行卡", res.data)
					this.bank_card = res.data.bank_card.substring(15, 19)
					this.bank_name = res.data.bank_name
					this.bank_mobile = res.data.bank_mobile.replace(reg, "$1****$2");
					this.bindingState = true


					objAccount.bankCard = res.data.bank_card //提现卡号
					objAccount.bankName = res.data.bank_name //提现银行名称
					objAccount.bankProvince = res.data.bank_province //开户省
					objAccount.bankMobile = res.data.bank_mobile //预留电话
					objAccount.bankCity = res.data.bank_city //开户城市
					objAccount.bankUser = res.data.bank_user //开户人

					this.withdrawalAccount = JSON.stringify(objAccount)
					// console.log("withdrawalAccount=", this.withdrawalAccount)

				} else {

					uni.showToast({
						title: "未绑定银行卡",
						icon: "error"
					})

				}
			})
		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

	.withDrawalCard {
		border: 1px solid #ededed;
	}

	.withDrawalCardOne {
		/* padding: 100rpx 40rpx; */
		height: 250rpx;
		background-color: white;
		margin: 20rpx 40rpx;
		background-image: linear-gradient(to right, #ff4e50 20%, #ffaa7f 100%);
		/* background-color: white; */
		border-radius: 15px;
		padding: 30rpx;
	}

	.withDrawalCardTwo {
		margin-top: 40rpx;
		background-color: white;
		border-radius: 10px;
		padding: 30rpx 40rpx;
		font-size: 28rpx;
	}

	.withDrawalCardTwo>view {
		display: flex;
		align-items: center;
	}

	.withDrawalCardTwo>.u-row {
		margin: 20rpx;
		padding: 10rpx 0;
		border-bottom: 1px solid #ededed;
	}
</style>
