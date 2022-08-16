<template>
	<view>

		<u-row class="rowStyle">
			<u-col span="4" align="center">
				<view>收款人:</view>
			</u-col>
			<u-col span="4" align="center">
				<view class="moneyValue">{{payee}}</view>
			</u-col>
			<u-col span="4" align="center">
				<view @click="copyText(payee)" class="copyText">复制</view>
			</u-col>
		</u-row>

		<u-row class="rowStyle">
			<u-col span="4" align="center">
				<view>开户银行:</view>
			</u-col>
			<u-col span="4" align="center">
				<view class="moneyValue">{{bank_name}}</view>
			</u-col>
			<u-col span="4" align="center">
				<view @click="copyText(bank_name)" class="copyText">复制</view>
			</u-col>
		</u-row>

		<u-row class="rowStyle">
			<u-col span="4" align="center">
				<view>开户支行:</view>
			</u-col>
			<u-col span="4" align="center">
				<view class="moneyValue">{{bank_open}}</view>
			</u-col>
			<u-col span="4" align="center">
				<view @click="copyText(bank_open)" class="copyText">复制</view>
			</u-col>
		</u-row>

		<u-row class="rowStyle">
			<u-col span="4" align="center">
				<view>银行卡号:</view>
			</u-col>
			<u-col span="4" align="center">
				<view class="moneyValue">{{account}}</view>
			</u-col>
			<u-col span="4" align="center">
				<view @click="copyText(account)" class="copyText">复制</view>
			</u-col>
		</u-row>

		<u-row class="rowStyle">
			<u-col span="4" align="center">
				<view>充值金额:</view>
			</u-col>
			<u-col span="4" align="center">
				<view class="moneyValue">{{price}}.00</view>
			</u-col>
			<u-col span="4" align="center">
				<view>元</view>
			</u-col>
		</u-row>



		<u-row class="rowStyle">
			<u-col span="4" align="center">
				<view>转账户名:</view>
			</u-col>
			<u-col span="4" align="center">
				<u--input inputAlign='center' maxlength=5 placeholder="请输入转账户名" border="bottom" v-model="transRealName">
				</u--input>
			</u-col>
		</u-row>

		<view style="text-align: center;margin-top: 20rpx;">
			<h5>温馨提示：复制收款账户，到手机银行完成转账.</h5>
		</view>



		<!-- 2.转账成功 -->

		<u-row style="margin-top: 30rpx;" justify="center">
			<u-col span="7" align="center">
				<u-button class="custom-style" color="#d81e06" type="primary" text="已经转账成功,提交充值申请"
					@click="moneySuccess">
				</u-button>
			</u-col>
		</u-row>
	</view>

</template>

<script>
	import {
		moneyFormat,
	} from '@/static/moneyFormat.js'

	import {
		userRecharge
	} from '@/network/apiFunction.js'
	export default {
		data() {
			return {
				// 充值账户
				payTypeFixed: [],

				payee: "",
				account: '',
				bank_name: "",
				bank_open: "",
				price: "",
				intPrice: "",
				payType: "",

				// 转账户名
				transRealName: ""

			}
		},
		onLoad(options) {

			console.log("充值的", options)

			this.payTypeFixed = JSON.parse(options.payTypeFixed)
			this.price = moneyFormat(parseInt(options.price))
			this.intPrice = options.price
			this.payType = options.payType

			for (let i in this.payTypeFixed) {

				if (this.payTypeFixed[i].way_name == options.payType) {

					console.log("所选的充值", this.payTypeFixed[i])
					this.payee = this.payTypeFixed[i].payee
					this.account = this.payTypeFixed[i].account
					this.bank_name = this.payTypeFixed[i].bank_name
					this.bank_open = this.payTypeFixed[i].bank_open
				}
			}
		},
		methods: {

			copyText(value) {

				uni.setClipboardData({
					data: value,
					success(res) {
						console.log('success', res);
					}
				})
			},
			moneySuccess() {

				if (this.transRealName != '') {

					let data = {
						userID: uni.getStorageSync("userID"), //用户id
						userName: this.transRealName, //转张户名
						amount: this.intPrice, //入金金额
						inPort: this.payType, //入金账户类型
						realName: uni.getStorageSync("realName"), //用户昵称
						phone: uni.getStorageSync("phone") //用户登录名
					}

					uni.showLoading({
						title: "正在提交"
					})

					userRecharge(data).then(res => {
						if (res.code == 1) {

							setTimeout(res => {

								uni.hideLoading()
								uni.showToast({
									title: "申请提交成功",
									icon: 'success'
								})

							}, 1500)

							setTimeout(res => {
								uni.$u.route({
									type: "navigateBack",
									delta: 3
								})
							}, 2000)

						}
					})
				} else {

					uni.showToast({
						title: "请输入转账户名",
						icon: 'error'
					})
				}
			}
		},
	}
</script>

<style>
	page {
		background-color: white;
	}

	.rowStyle {
		border-bottom: 1px solid #ededed;
		padding: 20rpx 0;
	}

	.moneyValue {
		font-size: 25rpx;
		color: #808080;
	}

	.custom-style {
		height: 70rpx;
	}

	.copyText {
		font-size: 26rpx;
		color: blue;
		text-decoration: underline;
	}
</style>
