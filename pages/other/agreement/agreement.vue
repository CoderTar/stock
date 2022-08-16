<template>
	<view class="agreeMent">
		<view>
			策略人通过本平台参与沪深A股交易合作将涉及建仓费和履约保证金的发生。如策略人参与持仓时间为T＋1｜D的交易合作还将涉及延递费的发生。本平台主要为策略人与投资人做好，策略撮合。
		</view>
		<h3 style="margin-top: 40rpx;">第一条解释</h3>
		<view>
			1、网站平台：由{{conpanyTitle}}运营，为投资人与策略人做好居间服务，居间服务内容包括但不限于交易合作撮合与交易策略通知与交易信息发布等。
		</view>
		<view>
			2、投资人：指通过本网站注册或线下合作成为投资人用户，负责按股票投资策略并利用自有资金和证券账户进行交易的自然人。
		</view>
		<view> 3、策略人：指向投资人发出策略提供方。
		</view>
		<view></view>
		<h3 style="margin-top: 40rpx;">第二条声明与承诺</h3>
		<view> 1、本平台声明，以上所有涉及资费标准的数据，均为平台根据市场行情阶段性调整的实时标准，该数据具有一定浮动性。
		</view>
		<view> 2、平台关于以上资费标准不做不予调整的承诺，平台将根据客观的市场行情对资费标准进行适时调整，关于调整结果将及时告知所有平台用户，并将一如既往地尊重用户在新的资费条件下是否选择继续与平台合作的权利。
		</view>

		<view style="display: flex;flex-direction: column;align-items: flex-end;margin-top: 40rpx;">
			<h4 style="margin-top: 30rpx;">投资人与策略人交易合作协议</h4>
			<h4>{{conpanyTitle}}交易居间服务协议</h4>
		</view>
	</view>
</template>

<script>
	import {
		basisConfig
	} from '@/network/apiFunction.js'

	export default {
		data() {
			return {
				conpanyTitle: ""
			}
		},
		methods: {

		},
		mounted() {
			basisConfig().then(res => {
				console.log(res)
				this.conpanyTitle = res.data.company_title
			})
		}
	}
</script>

<style>
	.agreeMent {
		/* border: 1px solid tomato; */
		margin: 50rpx 40rpx;
		font-size: 25rpx;
	}

	.agreeMent>view {
		margin: 20rpx 0;
	}
</style>
