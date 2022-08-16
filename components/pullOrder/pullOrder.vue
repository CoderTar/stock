<!-- 交易页面中撤单模块 -->
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
						<view class="demo-layout">成交</view>
						<view class="demo-layout">234</view>
						<view class="demo-layout">价格</view>
					</u-col>

					<u-col align="center" span="3">
						<view class="demo-layout">23.43</view>
						<view class="demo-layout">类型</view>
						<view class="demo-layout">23.43</view>
						<view class="demo-layout">状态</view>
					</u-col>

					<u-col align="center" span="3">
						<view class="demo-layout">0.00</view>
						<view class="demo-layout">盈亏</view>
						<view class="demo-layout">0.00%</view>
						<view class="demo-layout">操作</view>

					</u-col>

				</u-row>
			</view>
		</view>


		<!-- 	<view>
			<scroll-view class="scroll-view_H" scroll-x="true">
				<view class="scroll-view-item_H">
					<view class="">
						<h4>股票/时间</h4>
						<h4>委托/成交</h4>
						<h4>委托/价格</h4>
					</view>

					<view class="pullorderData" v-for="(item,index) in 4">
						<view>{{index}}</view>
						<view>{{index}}</view>
						<view>{{index}}</view>
					</view>
				</view>
				<view class="scroll-view-item_H">
					<view class="">
						<h4>类型</h4>
						<h4>状态</h4>
						<h4>操作</h4>
					</view>

					<view class="pullorderData" v-for="(item,index) in 4">
						<view>{{index}}</view>
						<view>{{index}}</view>
						<view>{{index}}</view>
					</view>
				</view>

			</scroll-view>
		</view> -->
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
		border-bottom: 1px solid #ededed;
		justify-content: space-between;
		padding: 0 20rpx;
	}

	.scroll-view-item_H>view>h4 {
		/* border: 1px solid green; */
		flex: 0 0 30%;
	}

	.pullorderData {
		/* background-color: aqua; */
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20rpx 0;
		/* border: 1px solid green; */
	}

	.pullorderData>view {
		/* border: 1px solid orangered; */
		flex: 0 0 30%;
	}
	.demo-layout{
		margin: 3rpx 0;
	}
</style>
