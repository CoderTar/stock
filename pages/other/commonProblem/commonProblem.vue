<template>
	<view class="problemCard">
		<view>
			<h3>日管理费怎么收取？</h3>
			<text>测试推出按日配资，管理费也是按日结算，如11月19日配资，11月19日支付第一天的管理费，11月20日早上8:00支付第二天的管理费，以此类推。</text>
		</view>
		<view>
			<h3>月管理费怎么收取？</h3>
			<text>测试推出按月配资，管理费也是按月结算，如11月19日配资，11月19日支付第一个月的管理费，12月19日早上8:00支付第二个月的管理费，以此类推。</text>
		</view>
		<view>
			<h3>配资和证券公司的融资融券业务有什么区别？</h3>
			<text>测试撮合业务与融资融券业务从本质上讲都是增加投资者的操盘资金，但是两者有着很大的区别。详见下表:</text>
			<view class="tabData">
				<uni-table border stripe emptyText="暂无更多数据">
					<!-- 表头行 -->
					<uni-tr>
						<uni-th style="font-size: 25rpx;">融资融券</uni-th>
						<uni-th style="font-size: 25rpx;">测试撮合</uni-th>
					</uni-tr>
					<!-- 表格数据行 -->
					<uni-tr>
						<uni-td style="font-size: 25rpx;">开户必须满</uni-td>
						<uni-td style="font-size: 25rpx;">无限制(手机注册即可买卖)</uni-td>
					</uni-tr>
					<uni-tr>

						<uni-td style="font-size: 25rpx;">开户必须满6个月</uni-td>
						<uni-td style="font-size: 25rpx;">无限制(手机注册即可买卖)</uni-td>
					</uni-tr>
					<uni-tr>

						<uni-td style="font-size: 25rpx;">资金最低要求50万</uni-td>
						<uni-td style="font-size: 25rpx;">1000元起配</uni-td>
					</uni-tr>
					<uni-tr>
						<uni-td style="font-size: 25rpx;">交易佣金高</uni-td>
						<uni-td style="font-size: 25rpx;">交易佣金底</uni-td>
					</uni-tr>

					<uni-tr>
						<uni-td style="font-size: 25rpx;">融资额度低(一般1：1)(还需要验票)</uni-td>
						<uni-td style="font-size: 25rpx;">配资额度高(入金即10是倍)(用多少算多少)</uni-td>
					</uni-tr>

					<uni-tr>
						<uni-td style="font-size: 25rpx;">融资最长时间6个月</uni-td>
						<uni-td style="font-size: 25rpx;">可根据自己风格来控制，平台按日结算</uni-td>
					</uni-tr>

					<uni-tr>
						<uni-td style="font-size: 25rpx;">需要足额的担保金/资产</uni-td>
						<uni-td style="font-size: 25rpx;">不需要</uni-td>
					</uni-tr>
				</uni-table>
			</view>
		</view>
		<view>
			<h3>止损平仓？</h3>
			<text>股票触及或跌破到当前预留保证金的8%并且盘中自动补交保证金时，若可用资金不够补1%的保证金，则系统将自动平仓股票，结算价格按实际平仓价结算。
				如果当天买入的股票触及止损，系统强制自动补交履约保证金。</text>
		</view>
		<view>
			<h3>策略金不足支付明日利息平仓？</h3>
			<text>用户在买入第二天后策略金不足支付明日利息系统自动平仓，以实际成交价计算；如果未能顺利卖出，系统下一交易日将自动判断是否触及止损追加保证金或者止损平仓；如果股票当天跌停未能成交，系统将自动延期，第二天开盘将市价卖出，结算价格按实际平仓价结算；</text>
		</view>

		<view>
			<h3>"自动延期"？</h3>
			<text>平台默认所有持仓股票"自动延期"，请确保可用资金充足；</text>
		</view>

		<view>
			<h3>被回收停牌股索回规则？</h3>
			<text>如果用户持有的股票遇到停牌，客服第一时间与客户联系让其补足同等停牌市值的20%（同时会设置禁止买入及出金操作）。如保证金足以弥补停牌市值的20%，甚至多出保证金，多余保证金还可继续操作（同时按停牌市值0.0012收取管理费）。如客户未追加停牌市值的20%系统默认继续持有，自动延期（按原标准收取管理费，用户应确保账户资金余额充足，以便扣取管理费）。如果停牌期间账户资金不足以扣取管理费，平台视为用户自动放弃股票及收益权，系统将全额扣除保证金，回收的停牌股复盘后，盈亏与此客户无关。</text>
		</view>
		<view>
			<h3>被限制购买的股票有哪些？</h3>
			<text>停牌股被回收的用户须在当天17:00前向客服申请索回停牌股并补足管理总费用；
				索回停牌股将建立黑名单制度，申请索回后却未充值索回的用户，此后将不再享有停牌股索回宽限期。</text>
		</view>
		<view>
			<h3>被限制购买的股票有哪些？</h3>
			<view style="display: flex;flex-direction: column;font-size: 25rpx;color: #8f8f94;">
				<text>1、不得购买权证类可以T+0交易的证券;</text>
				<text>2、不得买入当天禁买股，禁买股包括单不仅限于:ST、*ST、SST、*SST分级基金等被证券交易所特别处理的股票;</text>
				<text>3、不得购买首日上市新股（或复牌首日股票）等当日不设涨跌停板限制的股票；</text>
				<text>4、已发布停牌，退市公告或有潜在退市风险的股票；</text>
				<text>5、不得交易僵尸股；</text>
				<text>6、不得进行坐庄、对敲、接盘、大宗交易、内幕信息等违反股票交易法律法规及证券公司规定的交易；</text>
			</view>
		</view>
		<view>
			<h3>盈利何时能提现？</h3>
			<text>股票实时卖出，实时结算，收益次日提取。</text>
		</view>
		<view>
			<h3>履约保证金有什么作用？</h3>
			<text>用户买入股票提供10%的履约保证金，用于承担操作亏损赔付（用户仅对冻结资金承担有限赔付）</text>
		</view>

		<view>
			<h3>提现到账快吗？</h3>
			<view style="display: flex;flex-direction: column;font-size: 25rpx;color: #8f8f94;">
				<text>工作日9:30-下午15:00提现，总资金量不超过100万，第二交易日到账，资金不小于100元，不可以大于100万！</text>
				<text style="margin-top: 20rpx;">(温馨提示：您入金的资金若未投资就提现，第三方支付公司会收取您提现金额的2%作为转账费用）</text>
			</view>
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
	.problemCard {
		display: flex;
		flex-direction: column;
		padding: 20rpx 40rpx;
	}

	.problemCard>view {
		margin: 20rpx 0;
	}

	.problemCard>view>text {
		font-size: 25rpx;
		color: #8f8f94;
	}

	.tabData {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}
</style>
