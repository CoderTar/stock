<template>
	<view style="height: 100%;">
		<view class="listTitle" style="color:#8d8d8d;font-size: 30rpx;">
			<text style="flex: 0 0 40%;">交易时间</text>
			<text>交易类型</text>
			<text>交易金额</text>
		</view>


		<view style="height: 55%;">
			<scroll-view scroll-y="true" class="scroll-Y">

				<!-- 便利数据条目 -->
				<view style="border-bottom: 1px solid #dedede;" class="listData" v-for="(item,index) in transList">
					<text style="flex: 0 0 40%;">{{item.time}}</text>
					<text>{{item.memo}}</text>
					<text>{{item.price}}</text>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "transactionList",
		data() {
			return {

			};
		},
		props: {
			transList: Array
		}
	}
</script>

<style>
	.scroll-Y {
		height: 860rpx;
	}

	.listTitle,
	.listData {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 40rpx;
	}

	.listTitle>text {
		flex: 0 0 30%;
		/* border: 1px solid orangered; */
	}

	.listData>text {
		flex: 0 0 30%;
		/* border: 1px solid orangered; */
		font-size: 25rpx;
		margin: 40rpx 0;
	}
</style>
