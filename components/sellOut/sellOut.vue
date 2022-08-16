<template>
	<view>
		<view class="businessCardTwo">
			<view class="businessCardTwoLeft">
				<!-- 1 -->
				<view
					style="border: 1px solid #3c9cff;display: flex;align-items: center;background-color: white;justify-content: space-between;line-height: 70rpx;">
					<text style="margin-left: 20rpx;">贵州茅台</text>
					<text style="margin: 0 10rpx;">667788</text>
					<view style="background-color: #3c9cff;color: white;width: 77rpx;text-align: center;">K线</view>
				</view>
				<!-- 2 -->
				<view style="border: 1px solid #3c9cff;padding: 10rpx;text-align: center;background-color: #ededed;">
					市场价格</view>
				<!-- 3 -->
				<view style="display: flex;font-size: 25rpx;justify-content: space-between;align-items: center;">
					<label>
						<text> 跌停</text>
						<text style="color: lawngreen;"> 123.2</text>
					</label>

					<label>
						<text> 涨停</text>
						<text style="color: red;"> 13.2</text>
					</label>
				</view>
				<!-- 4 -->
				<view
					style="border: 1px solid #3c9cff;display: flex;justify-content: space-between;align-items: center;line-height: 70rpx;">
					<view style="background-color: #3c9cff;color: white;width: 77rpx;text-align: center;">-</view>
					<view>卖出</view>
					<view style="background-color: #3c9cff;color: white;width: 77rpx;text-align: center;">+</view>
				</view>
				<!-- 5 -->
				<view style="display: flex;font-size: 25rpx;justify-content: space-between;align-items: center;">
					<label>
						<text>可卖</text>
						<text style="color: lawngreen;">234282股</text>
					</label>

					<label>
						<text>可以资金</text>
						<text style="color: red;"> 1000020</text>
					</label>
				</view>
				<!-- 6 -->
				<view class="warehouse">
					<view>全仓</view>
					<view>半仓</view>
					<view>1/3仓</view>
					<view>1/4仓</view>
				</view>
				<!-- 7买入 -->
				<view>
					<u-button type="primary" text="卖出"></u-button>
				</view>
			</view>
			<view class="businessCardTwoRight">
				<view v-for="(item,index) in 5" style="color: green;">
					<u-row justify="space-between" gutter="4">
						<u-col span="3" align="center">
							<view class="demo-layout bg-purple">卖{{5-index}}</view>
						</u-col>
						<u-col span="3" align="center">
							<view class="demo-layout bg-purple">0</view>
						</u-col>
						<u-col span="3" align="center">
							<view class="demo-layout bg-purple">0</view>
						</u-col>
					</u-row>
				</view>
				<view>
					<u-line></u-line>
				</view>
				<view v-for="(item,index) in 5" style="color: red;">
					<u-row justify="space-between" gutter="4">
						<u-col span="3" align="center">
							<view class="demo-layout bg-purple">买{{index+1}}</view>
						</u-col>
						<u-col span="3" align="center">
							<view class="demo-layout bg-purple">0</view>
						</u-col>
						<u-col span="3" align="center">
							<view class="demo-layout bg-purple">0</view>
						</u-col>
					</u-row>
				</view>
			</view>
		</view>

		<view class="businessCardThree">
			<view style="display: flex;justify-content: center;">
				<u-tabs :list="bottomUse" :current='bottomCurrent' @click="bottomBtn" :activeStyle="{
		    color: '#d81e06',
		    fontWeight: 'bold',
		    transform: 'scale(1.05)'
		}" lineColor="#d81e06"></u-tabs>
			</view>
			<!-- 底部选择3.2数据 -->
			<view style="background-color: #ededed;padding: 1rpx 0;">
				<view v-show="bottomState==0?true:false">
					<positionList v-for="(item,index) in 10"></positionList>
				</view>
				<view v-show="bottomState==1?true:false" 测试</view>
					<view v-show="bottomState==2?true:false">测试</view>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				bottomCurrent: 0,
				bottomUse: [{
					name: '持仓',
				}, {
					name: '行情',
				}, {
					name: '自选'
				}],
				bottomState: 0,

			}
		},
		methods: {
			// 底部选择
			bottomBtn(item) {
				this.bottomCurrent = item.index
				this.bottomState = item.index
			}
		}
	}
</script>

<style>
	.businessCard {
		/* border: 1px solid dodgerblue; */
	}

	.businessCardOne {
		/* border: 1px solid red; */
		background-color: white;

	}

	.businessCardTwo {
		/* border: 1px solid tomato; */
		background-color: white;
		padding: 0 20rpx;
		padding-top: 66rpx;
		display: flex;
		justify-content: space-between;
	}

	.businessCardTwo>view {
		margin: 10rpx 0;
	}

	.businessCardTwoLeft {
		flex: 0 0 60%;
		/* border: 1px solid dodgerblue; */
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}

	.businessCardTwoLeft>view {
		margin: 10rpx 0;
	}

	.warehouse {
		display: flex;
		justify-content: space-between;
		font-size: 26rpx;
		/* border: 1px solid black; */
	}

	.warehouse>view {
		color: white;
		text-align: center;
		flex: 0 0 20%;
		background: #d81e06;
		opacity: 0.2;
	}


	.businessCardTwoRight {
		border-left: 1px solid #d6d7d9;
		flex: 0 0 38%;
		font-size: 25rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}


	.businessCardThree {
		/* border: 1px solid green; */
		background-color: white;
	}
</style>
