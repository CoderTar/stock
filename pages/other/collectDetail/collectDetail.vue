<template>
	<view class="collectCard">
		<view>
			<h3>关于股票交易时间</h3>
			<text>交易日：09:30:00—11:30:00 13:00:00—15:00:00</text>
		</view>
		<view>
			<h3>关于股票买入范围限制</h3>
			<view style="display: flex;flex-direction: column;font-size: 25rpx;color: #8f8f94;">
				<text>（一）用户可购买范围包括上海A股、深圳A股、创业板股票，但不得购买被冠以S、ST、*ST、S*ST、SST的股票、以及被交易所特别处理的股票；</text>
				<text>（二）不得购买平台实时公布的黑名单中的交易产品；</text>
				<text>（三）所有用户多只股票购买实盘上限为5000万元，达到上限后所有用户均不能继续买入；</text>
				<text>（四）单个用户最大持仓为5000万元整.</text>
				<text>（五）个股涨跌幅超过9%禁止买入。</text>
			</view>
		</view>
		<view>
			<h3>关于交易综合费用</h3>
			<view style="display: flex;flex-direction: column;font-size: 25rpx;color: #8f8f94;">
				<view style="display: flex;flex-direction: column;">
					<text>（一）管理费用</text>
					<text>用户买入股票必须提供相当于成交市值10%的履约保证金，用于承担操作亏损赔付。</text>
				</view>
				<view style="display: flex;flex-direction: column;">
					<text>（二）管理费用</text>
					<text>日管理费：成交时收取股票市值0.03%的管理费，明日管理费(系统将在第二天8:00分收取当日管理费；非交易日不收取管理费)。</text>
					<text>月管理费：成交时一次性收取股票市值0.6%的月管理费（股票持仓周期为一个月，到期后客户可选择是否自动续费）。</text>
				</view>
			</view>
		</view>

		<view>
			<h3>关于平仓</h3>
			<view style="display: flex;flex-direction: column;font-size: 25rpx;color: #8f8f94;">
				<view style="display: flex;flex-direction: column;">
					<text>（一）止损平仓</text>
					<text>1、股票触及或跌破到当前预留保证金的50%并且盘中自动补交保证金时，若策略金不够补单票市值1%的保证金，则系统将自动平仓股票，结算价格按实际平仓价结算。</text>
					<text>2、如果当天买入的股票触及止损，系统强制自动补交履约保证金。</text>
				</view>
				<view style="display: flex;flex-direction: column;">
					<text>（二）策略金不足扣除明日管理费平仓</text>
					<text>用户优先资金不足扣除明日管理费用时，股票由系统自动平仓，以实际成交价计算；如果未能顺利卖出，系统下一交易日将自动判断是否触及止损追加保证金或者止损平仓；如果股票当天跌停未能成交，系统将自动延期，第二天开盘将市价卖出，结算价格按实际平仓价结算；</text>
					<text>▲建议：不要满仓入，留些可用资金避免平仓风险！！</text>
				</view>
			</view>
		</view>

		<view>
			<h3>关于股票停牌</h3>
			<text>如果用户持有的股票遇到停牌，客服第一时间与客户联系让其补足同等停牌市值的20%（同时会设置禁止买入及出金操作）。如保证金足以弥补停牌市值的20%，甚至多出保证金，多余保证金还可继续操作（同时按停牌市值0.05收取利息）。如客户未追加停牌市值的20%系统默认继续持有，自动延期（按原标准收取利息，用户应确保账户资金余额充足，以便扣取利息）。如果停牌期间账户资金不足以扣取利息，平台视为用户自动放弃股票及收益权，系统将全额扣除保证金，回收的停牌股复盘后，盈亏与此客户无关。</text>
		</view>

		<view>
			<h3>关于结算</h3>
			<text>用户单笔持仓股票按卖出部分进行实时结算，如用户盈利，则保证金和盈利部分实时结算至可用资金。如用户亏损，则保证金在扣除亏损后的剩余部分实时结算至可用资金。</text>
		</view>
		<view>
			<h3>关于除权除息</h3>
			<text>当用户持有的股票进行除权除息时，平台会在除权除息日把相应的分红股、股息平摊到用户的持股成本中，持仓成本将发生变化。（送股及派息需缴纳个人所得税，即为用户送股或派息后的实际亏损金额。）</text>
		</view>
		<view>
			<h3>关于零股卖出</h3>
			<text>当用户遇到零股卖出失败时，可先通过“分笔卖出”功能卖出该股票100的整数倍，剩余零股联系客服处理。（例如用户持有880股，先分笔卖出800股，剩余80股联系客服处理）</text>
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
	.collectCard {
		display: flex;
		flex-direction: column;
		padding: 20rpx 40rpx;
	}


	.collectCard>view {
		/* border: 1px solid green; */
		margin: 20rpx 0;
	}

	.collectCard>view>text {
		font-size: 25rpx;
		color: #8f8f94;
	}

	.textContent {
		font-size: 25rpx;
		color: #8f8f94;
	}
</style>
