<template>
	<view class="shearCard">
		<view style="background-color: white;">
			<!-- 1.上部分 -->
			<view class="shearCardOne">
				<view style="display: flex;flex-direction: column;">
					<text style="color: #e60012;font-size: 66rpx;">1,923.98</text>
					<view style="display: flex;color: #5ac725;margin-top: 10rpx;justify-content: space-evenly;">
						<text>7.97%</text>
						<text>0.64%</text>
					</view>
				</view>
				<!-- <text style="font-size: 60rpx;margin-left: 10rpx;color: #5ac725;">↓</text> -->
				<text style="font-size: 60rpx;margin-left: 10rpx;color: #e60012;">↑</text>
			</view>
			<!-- 2.第二部分 -->
			<view class="shearCardTwo">
				<u-row gutter="9">
					<u-col span="4">
						<view class="colMain">
							<view class="colItem">
								<text style="color:#999999;">今&nbsp;&nbsp;开</text>
								<text style="color:#333333;">1,927.80</text>
							</view>
							<view class="colItem">
								<text style="color:#999999;">昨&nbsp;&nbsp;收</text>
								<text>1,916.01</text>
							</view>

							<view class="colItem">
								<text style="color:#999999;">内&nbsp;&nbsp;盘</text>
								<text>1.09万手</text>
							</view>
							<view class="colItem">
								<text style="color:#999999;">外&nbsp;&nbsp;盘</text>
								<text>9.22千手</text>
							</view>
						</view>
					</u-col>
					<u-col span="4">
						<view class="colMain">
							<view class="colItem">
								<text style="color:#999999;">最&nbsp;&nbsp;&nbsp;高</text>
								<text>1,935.00</text>
							</view>
							<view class="colItem">
								<text style="color:#999999;">最&nbsp;&nbsp;&nbsp;底</text>
								<text>1,904.90</text>
							</view>

							<view class="colItem">
								<text style="color:#999999;">市盈利</text>
								<text>41.96</text>
							</view>
							<view class="colItem">
								<text style="color:#999999;">成交额</text>
								<text>10.83亿</text>
							</view>
						</view>
					</u-col>

					<u-col span="4">
						<view class="colMain">
							<view class="colItem">
								<text style="color:#999999;">涨&nbsp;&nbsp;&nbsp;幅</text>
								<text>1.57%</text>
							</view>
							<view class="colItem">
								<text style="color:#999999;">成交量</text>
								<text>2.01万</text>
							</view>

							<view class="colItem">
								<text style="color:#999999;">流通值</text>
								<text>2418.74</text>
							</view>
							<view class="colItem">
								<text style="color:#999999;">总市值</text>
								<text>2168.74</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>


		<!-- 3.k线部分 -->
		<view class="shearCardThree">
			<!-- 3.1日期选择 -->
			<view style="display: flex;justify-content: center;">
				<u-tabs lineColor="#d81e06" :list="timeList" @click="chooseTime"></u-tabs>
			</view>
			<!-- 3.2k线部分 -->
			<view class="kContent"> 
				<echarts :option="option" id="myChart" style="height: 100%;width: 90%;padding-left: 20rpx;">
				</echarts>
			</view>
		</view>

		<!-- 4.底部收藏 -->
		<view class="shearCardFour">
			<view style="background-color: #cacaca;color: #d81e06;">添加自选</view>
			<view style="background-color: #d81e06;color: white;">交易市场</view>
		</view>
	</view>
</template>
<script>
	import {
		option
	} from "./K.js"
	export default {
		data() {
			return {
				timeList: [{
					name: '分时',
				}, {
					name: '日K',
				}, {
					name: '周K'
				}, {
					name: '月K'
				}],

				option: {}
			}
		},
		onLoad(e) {

			uni.setNavigationBarTitle({
				title: e.shearTitle
			});

			this.option = option

		},
		methods: {
			chooseTime(item) {
				console.log("时间选择", item)
			}
		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

	.shearCard {
		/* border: 1px solid tomato; */
	}

	.shearCardOne {
		/* border: 1px solid tomato; */
		margin: 0 40rpx;
		display: flex;
		/* align-items: center; */
		/* flex-direction: column; */
		/* justify-content: space-between; */
		padding-top: 20rpx;

	}

	.shearCardTwo {
		/* border: 1px solid #ededed; */
		margin: 20rpx 40rpx;
		background-color: white;
		padding-bottom: 20rpx;
	}

	.shearCardTwoItem {
		border: 1px solid burlywood;
		display: flex;
		justify-content: space-between;
	}

	.shearCardTwoItem>view {
		border: 1px solid lightseagreen;
		flex: 0 0 30%;
		font-size: 26rpx;
		display: flex;
		justify-content: space-between;
		padding: 5rpx 0;

		color: #808080;
	}

	.shearCardThree {
		/* border: 1px solid green; */
		background-color: white;
	}

	.kContent {
		/* background-color: aquamarine; */
		/* background-color: pink; */
		display: flex;
		align-items: center;
		justify-content: center;
		/* border: 1px solid teal; */
		height: 700rpx;
		padding-bottom: 40rpx;
	}


	.shearCardFour {
		position: fixed;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		bottom: 0;
	}

	.shearCardFour>view {
		flex: 0 0 50%;
		text-align: center;
		padding: 24rpx;
	}


	.colMain {
		/* border: 1px solid tomato; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 20rpx;
	}

	.colItem {
		/* border: 1px solid green; */
		display: flex;
		justify-content: space-between;
		margin: 4rpx 0;
	}

	.colItem>text {
		/* background-color: pink; */
	}
</style>
