<template>
	<view style="margin: 0 20rpx;">
		<view class="purchaseData" v-for="(item,index) in applyStock" :key="index">
			<u-row>
				<u-col span="2" align="center">
					<view style="display: flex;flex-direction: column;align-items: center;font-size: 20rpx;">
						<text>{{item.stockName}}</text>
						<text style="color: #999999;">{{item.stockCode}}</text>
					</view>
				</u-col>
				<u-col span="2" align="center">
					<view style="color: red;">{{item.applyTime}}</view>
				</u-col>
				<u-col span="2" align="center">
					<view style="color: red;">{{item.releaseprice}}</view>
				</u-col>
				<u-col span="2" align="center">
					<view style="color: red;">{{item.topNum}}</view>
				</u-col>
				<u-col span="2" align="center">
					<view style="color: red;">{{item.downNum}}</view>
				</u-col>
				<u-col span="2" align="center">
					<view>
						<u-button type="warning" text="新股" size="mini" plain @click="applyUser(item)"></u-button>
					</view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	export default {
		name: "purchaseStock",
		data() {
			return {

			};
		},
		props: {
			applyStock: Array
		},
		methods: {
			applyUser(item) {
				this.$emit("applyUser", item)
				// console.log("新股申购", item)
			}
		}
	}
</script>

<style>
	.purchaseData {
		/* border: 1px solid green; */
		border-bottom: 1px solid #dcdfe6;
		padding: 6rpx 0;
		font-size: 30rpx;

	}
</style>
