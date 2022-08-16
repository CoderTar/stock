<!-- 交易页面历史订单组件 -->
<template>
	<view class="pullOrderCard">
		<view style="border: 1px solid white;border-radius: 20rpx;background-color: white;">
			<view style="margin: 20rpx 0;">
				<u-row justify="space-between" gutter="10">
					<u-col align="center" span="5">
						<view class="demo-layout">贵州茅台(001234)</view>
					</u-col>


					<u-col align="center" span="5">
						<view class="demo-layout">2022-12-07 12:23:00</view>
					</u-col>
				</u-row>
			</view>
			<view style="border-bottom: 0.5px solid #ededed;margin: 0 20rpx;"></view>


			<view style="margin: 20rpx 0;">
				<u-row justify="space-between" gutter="10">
					<u-col align="center" span="3">
						<view class="demo-layout">321.22</view>
						<view class="demo-layout">成交价</view>
						<view class="demo-layout">234</view>
						<view class="demo-layout">成交量</view>
					</u-col>

					<u-col align="center" span="3">
						<view class="demo-layout">23.43</view>
						<view class="demo-layout">印花税</view>
						<view class="demo-layout">23.43</view>
						<view class="demo-layout">过户税</view>
					</u-col>

					<u-col align="center" span="3">
						<view class="demo-layout">0.00</view>
						<view class="demo-layout">盈亏</view>
						<view class="demo-layout">0.00%</view>
						<view class="demo-layout">盈亏比例</view>

					</u-col>

					<u-col align="center" span="3">
						<view class="demo-layout">0.00</view>
						<view class="demo-layout">佣金</view>
						<view class="demo-layout">0.00</view>
						<view class="demo-layout">类型</view>
					</u-col>

				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "historyOrder",
		data() {
			return {
				historyTitle: ['成交价', '成交量', '成交额', '印花税', '过户费', '佣金', '类型'],
				historyData: ["765.22", '300', "342.33", "3212.22", "2.323", "387.9", "买入"]
			};
		}
	}
</script>

<style>
	.pullOrderCard {
		/* padding-bottom: 20rpx; */
		padding: 10rpx 20rpx;
		/* padding-top: 20rpx; */
		font-size: 26rpx;
		height: 100%;
	}


	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}


	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		text-align: center;
	}

	.scroll-view-item_H>view {
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
	}

	.scroll-view-item_H>view>h4 {
		/* border: 1px solid green; */
		flex: 0 0 20%;
	}

	.pullorderData {
		/* background-color: aqua; */
		border-bottom: 1px solid #808080;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20rpx 0;
		color: red;
	}

	.pullorderData>view {
		/* border: 1px solid orangered; */
		flex: 0 0 20%;
		font-size: 25rpx;
	}

	.demo-layout {
		margin: 6rpx 0;
	}
</style>
