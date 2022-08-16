<template>
	<view class="homePage">
		<!-- 1.个人资料 -->
		<view class="homeOne">
			<view>
				<view style="margin: 20rpx 0;color: white;">
					<text>账户 : </text>
					<text>{{phoneNum}}</text>
				</view>

				<view
					style="display: flex;align-items: center;justify-content: center; width: 100rpx;height:36rpx; background-image: linear-gradient(to right, #f83600 10%, #f9d423 100%);border-radius: 15px;color: wheat;font-size:20rpx;">
					投资人
				</view>
			</view>
			
			<!-- 用户头像 -->
			<view>
				<u-avatar src="../../static/profile.png" size="120rpx"></u-avatar>
			</view>
		</view>
		<!-- 2.常用功能 -->
		<view class="homeTwo">
			<view @click="onlineKf">
				<image src="../../static/icon/kf7.png" mode=""></image>
				<text>在线客服</text>
			</view>
			<view @click="Recharge">
				<image src="../../static/icon/chonzhi.png" mode=""></image>
				<text>充值</text>
			</view>
			<view @click="Withdrawal">
				<image src="../../static/icon/tixian.png" mode=""></image>
				<text>提现</text>
			</view>
			<view @click="aboutUs">
				<image src="../../static/icon/us.png" mode=""></image>
				<text>关于我们</text>
			</view>
		</view>

		<!-- 3.我的钱包 -->
		<view class="homeThree">
			<view style="padding: 20rpx;border-bottom: 3rpx solid #ededed;">
				<text style="font-size: 26rpx;">账户资金:</text>
				<text style="margin-left: 20rpx;color: white;font-weight: 500;">&yen{{account}}</text>
			</view>
			<view style="display: flex;justify-content: space-between;margin: 20rpx 40rpx;">
				<view style="display: flex;flex-direction: column;align-items: center;">
					<text style="font-weight: bold;color: white;">53</text>
					<text>今日收益</text>
				</view>
				<view style="display: flex;flex-direction: column;align-items: center;">
					<text style="font-weight: bold;color: white;">423</text>
					<text>本周收益</text>
				</view>
				<view style="display: flex;flex-direction: column;align-items: center;">
					<text style="font-weight: bold;color: white;">53</text>
					<text>累计收益</text>
				</view>
			</view>
			<view style="font-size: 18rpx;text-align: center;color: white;">
				<text>万物本互相通,相知方以融,投资赢在心态</text>
			</view>
		</view>

		<!-- 4.常用功能 -->
		<view class="homeFour">
			<view @click="bindingCard">
				<text>银行卡</text>
				<image src="../../static/icon/card.png" mode=""></image>
			</view>
			<view @click="assetsCard">
				<text>我的资产</text>
				<image src="../../static/icon/myzc.png" mode=""></image>
			</view>
			<view @click="uploadCard">
				<text>实名认证</text>
				<image src="../../static/icon/rz.png" mode=""></image>
			</view>
			<view @click="historyCard">
				<text>持仓历史</text>
				<image src="../../static/icon/history.png" mode=""></image>
			</view>
			<view>
				<text>申购订单</text>
				<image src="../../static/icon/order.png" mode=""></image>
			</view>
			<view @click="strategyCard" style="border-bottom: none;">
				<text>我的策略金</text>
				<image src="../../static/icon/bag.png" mode=""></image>
			</view>
		</view>

		<!-- 5.退出功能 -->
		<view class="homeFive">
			<view @click="updatePwd">
				<text>修改密码</text>
				<image src="../../static/icon/changepwd.png"></image>
			</view>
			<view style="border-bottom: none;" @click="exitBtn">
				<text>退出登录</text>
				<image src="../../static/icon/exit.png"></image>
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
				phoneNum: '',
				account: ""
			}
		},
		onShow() {

			let data = {

				userId: uni.getStorageSync('userID'),
			}
			getUserInfo(data).then(res => {
				if (res.code == 1) {

					console.log("res", res)
					this.phoneNum = res.data.userName
					this.account = moneyFormat(res.data.account)
				}
			})
		},
		methods: {
			// 绑定银行卡
			bindingCard() {
				console.log("银行卡")
				uni.$u.route({
					url: 'pages/other/bindingCard/bindingCard',
					params: {
						name: 'lisa'
					}
				})
			},
			assetsCard() {
				console.log("资产明细 ")
				uni.$u.route({
					url: 'pages/other/assetsDetail/assetsDetail',
					params: {
						name: 'lisa'
					}
				})
			},
			// 上传身份证
			uploadCard() {
				console.log("绑定身份证")
				uni.$u.route({
					url: 'pages/other/realName/realName',
					params: {
						name: 'lisa'
					}
				})
			},
			// 修改密码
			updatePwd() {
				console.log("修改密码")
				uni.$u.route({
					url: 'pages/other/updatePwd/updatePwd',
				})
			},
			Withdrawal() {
				console.log("提现")

				uni.$u.route({
					url: 'pages/other/withDrawal/withDrawal',
					params: {
						name: 'lisa'
					}
				})
			},
			onlineKf() {
				console.log("在线客服")

				// uni.$u.route({
				// 	url: 'pages/other/register/register',
				// 	params: {
				// 		name: 'lisa'
				// 	}
				// })
			},
			Recharge() {
				console.log("充值")

				uni.$u.route({
					url: 'pages/other/recharge/recharge',
					params: {
						name: 'lisa'
					}
				})
			},
			// 关于我们
			aboutUs() {
				console.log("充值")

				uni.$u.route({
					url: 'pages/other/aboutUs/aboutUs',
					params: {
						name: 'lisa'
					}
				})
			},
			// 退出登录
			exitBtn() {

				// 退出登录清楚缓存
				uni.removeStorage({
					key: 'Btoken',
					success: function(res) {
						uni.$u.route({
							url: 'pages/other/useLogin/useLogin',
							type: "reLaunch"
						})
					}
				})

			},
			// 持仓历史
			historyCard() {

				uni.setStorageSync('historyKey', 'hello');
				uni.$u.route({
					url: 'pages/business/business',
					type: "switchTab",

				})
			},
			// 我的策略金
			strategyCard() {
				uni.$u.route({
					url: 'pages/other/strategyMoney/strategyMoney',
					params: {
						name: 'lisa'
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

	image {
		width: 70rpx;
		height: 70rpx;
	}

	.homeOne {
		height: 320rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
		border-radius: 0 0 50rpx 5 0rpx;
	}

	.homeTwo {
		background-color: white;
		border-radius: 30rpx;
		margin: 30rpx 40rpx;
		margin-top: -80rpx;
		display: flex;
		justify-content: space-between;
		padding: 20rpx 20rpx;
	}

	.homeTwo>view {
		display: flex;
		font-weight: bold;
		font-size: 26rpx;
		flex-direction: column;
		align-items: center;
	}

	.homeThree {
		background-color: white;
		border-radius: 30rpx;
		margin: 30rpx 40rpx;
		background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
		padding: 20rpx 0;
	}


	.homeFour {
		border-radius: 30rpx;
		margin: 30rpx 40rpx;
		background-color: white;
		padding: 20rpx 0;
	}

	.homeFour>view {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid #fafafe;
		font-weight: bolder;
	}

	.homeFive {
		border-radius: 30rpx;
		margin: 30rpx 40rpx;
		background-color: white;
		height: 200rpx;
	}


	.homeFive>view {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid #fafafe;
		font-weight: bolder;
	}
</style>
