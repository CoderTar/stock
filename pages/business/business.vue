<template>
	<view class="businessCard">
		<!-- 顶部导航 -->
		<view class="businessCardOne">
			<u-subsection activeColor="#d81e06" :list="transactionList" :current="topCurrent" @change="sectionChange">
			</u-subsection>
		</view>


		<!-- 1.买入 -->
		<view v-show="topSelectState==0?true:false" class="businessCardTwo">
			<view class="businessCardTwoLeft">
				<!-- 1 -->
				<view
					style="border: 1px solid #d81e06;display: flex;align-items: center;background-color: white;justify-content: space-between;line-height: 70rpx;">
					<text style="margin-left: 20rpx;">平安央行</text>
					<text style="margin: 0 10rpx;">009987</text>
					<view style="background-color: #d81e06;color: white;width: 77rpx;text-align: center;">K线</view>
				</view>
				<!-- 2 -->
				<view style="border: 1px solid #d81e06;padding: 10rpx;text-align: center;background-color: #ededed;">
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
					style="border: 1px solid #d81e06;display: flex;justify-content: space-between;align-items: center;line-height: 70rpx;">
					<view style="background-color: #d81e06;color: white;width: 77rpx;text-align: center;">-</view>
					<view>呼入</view>
					<view style="background-color: #d81e06;color: white;width: 77rpx;text-align: center;">+</view>
				</view>
				<!-- 5 -->
				<view style="display: flex;font-size: 25rpx;justify-content: space-between;align-items: center;">
					<label>
						<text> 可买</text>
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
					<u-button color="#d81e06" text="买入"></u-button>
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

		<!-- 1.买入 -->
		<view v-show="topSelectState==0?true:false" class="businessCardThree">
			<view style="display: flex;justify-content: center;">
				<u-tabs :list="bottomUse" :current='bottomCurrent' @click="bottomBtn" :activeStyle="{
            color: '#d81e06',
            fontWeight: 'bold',
            transform: 'scale(1.05)'
        }" lineColor="#d81e06"></u-tabs>
			</view>
			<!-- 3.2数据 -->
			<view style="background-color: #ededed;padding: 1rpx 0;">
				<view v-show="bottomState==0?true:false">
					<positionList v-for="(item,index) in 5 "></positionList>
				</view>
				<view v-show="bottomState==1?true:false">行情</view>
				<view v-show="bottomState==2?true:false">自选</view>
			</view>
		</view>

		<!-- 2.卖出 -->
		<view v-show="topSelectState==1?true:false" class="">
			<sellOut></sellOut>
		</view>

		<!-- 3.撤单 -->
		<view v-show="topSelectState==2?true:false" style="height: 100%;padding-top: 66rpx;">
			<pullOrder v-for="(item,index) in 10"></pullOrder>
		</view>
		<!-- 4.历史 -->
		<view v-show="topSelectState==3?true:false" style="height: 100%;padding-top: 66rpx;">
			<historyOrder v-for="(item,index) in 10"></historyOrder>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				transactionList: ['买入', '卖出', '撤单', '历史'],
				topCurrent: 0,
				topSelectState: 0,

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
			// 顶部选择
			sectionChange(index) {
				this.topCurrent = index;
				console.log("index", index)
				this.topSelectState = index
			},
			// 底部选择
			bottomBtn(item) {
				this.bottomCurrent = item.index
				this.bottomState = item.index

				console.log("item", item)
			}
		},
		// 我的页面历史持仓跳转
		onShow() {
			console.log("show")
			let that = this
			uni.getStorage({
				key: 'historyKey',
				success: function(res) {
					console.log("持仓历史跳转", res)
					that.topCurrent = 3
					that.topSelectState = 3
				}
			});
			uni.removeStorage({
				key: 'historyKey',
			});
		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

	.businessCard {
		/* border: 1px solid dodgerblue; */
	}

	.businessCardOne {
		background-color: white;
		position: fixed;
		width: 100%;
		z-index: 100;
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
		font-size: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* border: 1px solid tomato; */
	}


	.businessCardThree {
		/* border: 1px solid green; */
		background-color: white;
	}
</style>
