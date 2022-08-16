<template>
	<view class="transRules">
		<view>
			<h3>账户收益宝</h3>
			<text> 平台为回馈客户，向客户支付账户资金余额万分之3的利息（于15:00整客户账户资金为计息本金次日8:00结算到账户资金）。</text>
		</view>
		<view>
			<h3>日管理费</h3>
			<text>
				用户于T日买入的股票，点击日配（买入时收取当日管理费），T日15:00后仍有持仓，称为延期持有。每延期持有一个交易日，测试平台收取该股票持仓市值万分之五的管理费（系统将在第二天8:00收取当日管理费；非交易日不收取管理费）。</text>
		</view>
		<view>
			<h3>月管理费用</h3>
			<text>用户于T日买入的股票，点击按月配，称为按月配资，成交后一次性收取1.2%月管理费（如中途卖出不退还剩余月管理费），每延期持有一个月（即30个自然日），测试将于下月到期日前收取该股票持仓市值1.2%的月管理费（系统将在到期日前一交易日8:00收取下月管理费）。</text>
		</view>
		<view>
			<h3>交易佣金</h3>
			<text>用户于买入和卖出股票时，证券公司收取万分之4的交易佣金，即10000元成交额4元佣金（最低4元）。</text>
		</view>
		<view>
			<h3>印花税</h3>
			<text>用户在卖出股票时，国家收取千分之1的印花税，即10000元成交额10元印花税。</text>
		</view>
		<view>
			<h3>过户费</h3>
			<text>用户在卖出股票时，交易所收取万分之1的过户费，即10000元成交额1元过户费。</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.transRules {
		/* border: 1px solid tomato; */
		display: flex;
		flex-direction: column;
		padding: 0 40rpx;
	}

	.transRules>view {
		/* border: 1px solid green; */
		margin: 20rpx 0;
	}

	.transRules>view>text {
		font-size: 25rpx;
		color: #8f8f94;
	}
</style>
