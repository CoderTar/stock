<template>
	<view class="assetCard">
		<!-- 1.资产卡片 -->
		<view class="assetCardOne">
			<view style="display: flex;justify-content: space-between;color: white;border-bottom: 1px solid wheat;">
				<view style="display: flex;flex-direction: column;">
					<text style="font-size: 25rpx;">我的总资产(元)</text>
					<text style="font-size: 66rpx;">{{account}}</text>
				</view>
				<view @click="moneyTrans"
					style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
					<uni-icons type="wallet" size="30" color="#e45656"></uni-icons>
					<text style="font-size: 25rpx;">资金转换</text>
				</view>
			</view>
			<view style="display: flex;justify-content: space-between;color: white;">
				<view class="assetCardOneItemDown">
					<text style="font-size: 40rpx;">232322.00</text>
					<text style="font-size: 25rpx;">动态资产</text>
				</view>
				<view class="assetCardOneItemDown">
					<text style="font-size: 40rpx;">232322.00</text>
					<text style="font-size: 25rpx;">策略资产</text>
				</view>
				<view class="assetCardOneItemDown">
					<text style="font-size: 40rpx;">232322.00</text>
					<text style="font-size: 25rpx;">持仓资产</text>
				</view>
			</view>
		</view>
		<!-- 2.充值提现 -->
		<view class="assetCardTwo">
			<view @click="addMoney">
				<uni-icons type="wallet" size="30" color="orange"></uni-icons>
				<h4>入金</h4>
			</view>
			<view @click="pullMoney">
				<uni-icons type="gift" size="30" color="orange"></uni-icons>
				<h4>提现</h4>
			</view>
		</view>

		<!-- 3.交易记录 -->
		<view class="assetCardThree">
			<h3 style="padding: 30rpx 0;">交易记录</h3>
			<view>
				<transactionList :transList="transList"></transactionList>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getUserInfo
	} from '@/network/apiFunction.js'

	import {
		moneyFormat
	} from '@/static/moneyFormat.js'
	export default {
		data() {
			return {
				account: "",
				transList: [{
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					}, {
						time: "201-11-22 12:02:03",
						price: "342.33",
						memo: "微信提现"
					}, {
						time: "2022-01-12 02:12:33",
						price: "144.22",
						memo: "提现"
					}, {
						time: "2022-11-22 12:32:33",
						price: "-123.22",
						memo: "支付宝提现"
					},
					{
						time: "2022-11-22 12:32:33",
						price: "1333.32",
						memo: "余额宝收入"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					},
					{
						time: "2022-11-22 12:32:33",
						price: "1333.32",
						memo: "余额宝收入"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					},
					{
						time: "2022-11-22 12:32:33",
						price: "1333.32",
						memo: "余额宝收入"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					},
					{
						time: "2022-11-22 12:32:33",
						price: "1333.32",
						memo: "余额宝收入"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					},
					{
						time: "2022-11-22 12:32:33",
						price: "1333.32",
						memo: "余额宝收入"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					},
					{
						time: "2022-11-22 12:32:33",
						price: "1333.32",
						memo: "余额宝收入"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					},
					{
						time: "2022-11-22 12:32:33",
						price: "1333.32",
						memo: "余额宝收入"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					},
					{
						time: "2022-11-22 12:32:33",
						price: "1333.32",
						memo: "余额宝收入"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					},
					{
						time: "2022-11-22 12:32:33",
						price: "1333.32",
						memo: "余额宝收入"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					},
					{
						time: "2022-11-22 12:32:33",
						price: "1333.32",
						memo: "余额宝收入"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					},
					{
						time: "2022-11-22 12:32:33",
						price: "1333.32",
						memo: "余额宝收入"
					}, {
						time: "2022-11-22 12:32:33",
						price: "123.22",
						memo: "支付宝提现"
					}
				]
			}
		},
		onLoad() {

			let data = {
				userId: uni.getStorageSync("userID")
			}
			getUserInfo(data).then(res => {
				if (res.code == 1) {

					console.log("获取用户信息", res.data.account)

					this.account = moneyFormat(res.data.account)
				}
			})
		},
		methods: {

			// 入金
			addMoney() {
				console.log("addMoney")

				uni.$u.route({
					url: 'pages/other/recharge/recharge',
					type: "redirectTo",
				})
			},
			// 提现
			pullMoney() {
				console.log("提现")

				uni.$u.route({
					url: 'pages/other/withDrawal/withDrawal',
					type: "redirectTo",
				})
			},
			// 资金转换
			moneyTrans() {
				uni.$u.route({
					url: 'pages/other/InterRotation/InterRotation',
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

	.assetCard {
		height: 100%;
	}

	.assetCardOne {
		margin: 20rpx 40rpx;
		border-radius: 15px;
		background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
		display: flex;
		flex-direction: column;
	}

	.assetCardOne>view {
		margin: 20rpx;
	}

	.assetCardOneItemDown {
		flex: 0 0 30%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}


	.assetCardTwo {
		margin: 20rpx 40rpx;
		border-radius: 15px;
		display: flex;
		color: white;
		justify-content: space-around;
		background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
	}

	.assetCardTwo>view {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 25rpx 0;
	}


	.assetCardThree {
		margin: 20rpx 0;
		background-color: white;
		text-align: center;
	}
</style>
