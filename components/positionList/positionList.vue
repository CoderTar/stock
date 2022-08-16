<!-- 1.交易底部持仓组件 -->
<template>
	<view class="positionCard">

		<view>

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


		<view>
			<u-row justify="space-between" gutter="10">
				<u-col align="center" span="3">
					<view class="demo-layout">200.00</view>
					<view class="demo-layout">持仓数量</view>
				</u-col>

				<u-col align="center" span="3">
					<view class="demo-layout">23.43</view>
					<view class="demo-layout">买入价</view>
				</u-col>

				<u-col align="center" span="3">
					<view class="demo-layout">0.00</view>
					<view class="demo-layout">盈亏</view>
				</u-col>

				<u-col align="center" span="3">
					<view class="demo-layout">0.00%</view>
					<view class="demo-layout">盈亏比例</view>
				</u-col>
			</u-row>
		</view>



		<view>
			<u-row justify="space-between" gutter="10">
				<u-col align="center" span="3">
					<view class="demo-layout">200.00</view>
					<view class="demo-layout">可用数量</view>
				</u-col>

				<u-col align="center" span="3">
					<view class="demo-layout">23.43</view>
					<view class="demo-layout">现价</view>
				</u-col>

				<u-col align="center" span="3">
					<view class="demo-layout">1322</view>
					<view class="demo-layout">市值</view>
				</u-col>

				<u-col align="center" span="3">
					<view class="demo-layout">日配</view>
					<view class="demo-layout">买入类型</view>
				</u-col>
			</u-row>
		</view>


		<!-- 轮播数据 -->
		<!-- <scroll-view class="scroll-view_H" scroll-x="true">
			<view class="scroll-view-item">
				<view class="scroll-view-title">
					<h4>名称/代码</h4>
					<h4>数量/可用</h4>
					<h4>成本/现价</h4>
					<h4>市值/盈亏</h4>
				</view>
				<view class="scroll-view-data" v-for="(item,index) in 18">
					<view style="display: flex;flex-direction: column;font-size: 25rpx;">
						<text>贵州茅台</text>
						<text>9283423</text>
					</view>
					<view>200</view>
					<view>27.30</view>
					<view>4849.00</view>
				</view>
			</view>

			<view class="scroll-view-item">
				<view class="scroll-view-title">
					<h4>补仓/比例</h4>
					<h4>类型/到期</h4>
					<h4>持仓/编号</h4>
					<h4>月/利息费</h4>
				</view>

				<view class="scroll-view-data" v-for="(item,index) in 18">
					<view style="display: flex;flex-direction: column;font-size: 25rpx;">
						<text>23.12</text>
						<text>10%</text>
					</view>
					<view>日配</view>
					<view>503</view>
					<view>231</view>
				</view>
			</view>
		</scroll-view> -->
	</view>
</template>

<script>
	export default {
		name: "positionList",
		data() {
			return {
				dataTitle: ['持仓数量', '可用数量', '买入价', '现价', '市值盈亏', '盈亏率', '补仓比例', '类型']
			};
		},
		methods: {

		}
	}
</script>

<style>
	.positionCard {
		margin: 20rpx 20rpx;
		background-color: #fff;
		border-radius: 15rpx;
		background-color: white;
		padding: 20rpx 0;
		font-size: 26rpx;
	}




	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		display: inline-block;
		width: 100%;
		/* border: 1px solid green; */
		/* height: 300rpx; */
		/* line-height: 300rpx; */
		/* text-align: center; */
	}


	.scroll-view-title,
	.scroll-view-data {
		/* border-bottom: 1px solid #808080; */
		display: flex;
		justify-content: space-around;
	}

	.scroll-view-data {
		border-bottom: 1px solid #ededed;
		margin-top: 18rpx;
	}

	.scroll-view-title>h4 {
		/* border: 1px solid indigo; */
		flex: 0 0 20%;
	}

	.scroll-view-data>view {
		/* border: 1px solid seagreen; */
		flex: 0 0 20%;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
	}

	.demo-layout {
		margin: 10rpx 0;
	}
</style>
