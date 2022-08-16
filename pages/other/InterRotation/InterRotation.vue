<template>
	<view class="interCard">
		<view class="interCardOne">
			<view style="display: flex;justify-content: space-between;align-items: center;">
				<view style="height: 50px;display: flex;align-items: center;">
					<uni-icons v-show="textState" type="wallet-filled" size="30"></uni-icons>
					<uni-icons v-show="!textState" type="wallet" size="30"></uni-icons>
					<h4 v-show="!textState">动态资产</h4>
					<h4 v-show="textState">策略资产</h4>
				</view>
				<view class="">
					<uni-icons type="arrow-right" size="30"></uni-icons>
				</view>
				<view style="height: 50px;display: flex;align-items: center;">
					<uni-icons v-show="textState" type="wallet" size="30"></uni-icons>
					<uni-icons v-show="!textState" type="wallet-filled" size="30"></uni-icons>
					<h4 v-show="textState">动态资产</h4>
					<h4 v-show="!textState">策略资产</h4>
				</view>
			</view>
			<view @click="interBtn" style="display: flex;align-items: center;justify-content: center;">
				<image src="../../../static/icon/huzhuan.png" style="width: 100rpx;height: 100rpx;"></image>
			</view>
		</view>

		<view class="interCardTwo">
			<h3>金额</h3>
			<view style="display: flex;align-items: center;">
				<u-icon name="rmb"></u-icon>
				<view style="margin-top: 20rpx;width: 100%;">
					<u--input placeholder="请输入金额" border="bottom" clearable></u--input>
				</view>
			</view>
			<view style="margin-top: 100rpx;">
				<u-button color="#d81e06" text="确定"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				textState: false
			}
		},
		methods: {
			interBtn() {
				console.log("互转");
				this.textState = !this.textState
			},
		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

	.interCard {
		/* border: 1px solid tomato; */
	}

	.interCardOne {
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* align-items: center; */
		padding: 40rpx 40rpx;
	}

	.activeL {
		transition: 1s;
		color: red;
		display: none;
	}

	.activeR {
		color: red;
		transition: 1s;
	}

	.interCardTwo {
		/* border: 1px solid tomato; */
		margin-top: 40rpx;
		background-color: white;
		padding: 40rpx 40rpx;
	}
</style>
