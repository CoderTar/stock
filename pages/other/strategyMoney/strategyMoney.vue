<template>
	<view class="strategyCard">
		<!-- 1.策略金 -->
		<view class="strategyCardOne">
			<view>
				<view style="display: flex;align-items: center;justify-content: center;">
					<uni-icons type="wallet" size="20" color="orange"></uni-icons>
					<text>我的总资产</text>
				</view>
				<view style="color: firebrick;">
					<h2>2233143.39</h2>
				</view>
			</view>
			<view @click="gotoInterCard"
				style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
				<uni-icons type="shop-filled" size="30" color="gray"></uni-icons>
				<text style="color: gray;font-size: 20rpx;">资金转换</text>
			</view>
		</view>
		<!-- 2.策略金记录 -->
		<view class="strategyCardTwo">
			<h3 style="padding: 30rpx 0;">交易记录</h3>
			<view>
				<transactionList :transList="transList"></transactionList>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
		methods: {
			gotoInterCard() {
				console.log("策略金转换")


				uni.$u.route({
					url: 'pages/other/InterRotation/InterRotation',
					params: {
						name: 'lisa'
					}
				})
			}
		}
	}
</script>

<style>
	.strategyCard {
		/* border: 1px solid tomato; */
	}


	.strategyCardOne {
		height: 300rpx;
		margin: 20rpx 40rpx;
		border-radius: 15px;
		background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.strategyCardTwo {
		margin: 20rpx 0;
		background-color: white;
		text-align: center;
	}
</style>
