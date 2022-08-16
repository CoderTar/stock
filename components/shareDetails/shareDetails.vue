<template>
	<view>
		<view class="dataTitle">
			<text>名称</text>
			<text style="text-align: center;">最新</text>
			<text style="text-align: end;">涨幅率</text>
		</view>

		<view class="dataContent" v-for="(item,index) in shareArray">
			<view style="flex: 0 0 30%;">
				<h4>{{item.name}}</h4>
				<text style="font-size: 28rpx;color: #808080;">{{item.code}}</text>
			</view>
			<view style="flex: 0 0 30%;text-align: center;" :style="{'color':dataColor}">
				<h4>{{item.newData}}</h4>
			</view>
			<view style="flex: 0 0 30%;text-align: end;" :style="{'color':dataColor}">
				<h4>{{item.wave}}</h4>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "shareDetails",
		data() {
			return {

			};
		},
		props: {
			shareArray: Array,
			dataColor: String
		}
	}
</script>

<style>
	.dataTitle {
		/* border: 1px solid tomato; */
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
	}

	.dataTitle>text {
		flex: 0 0 30%;
		color: #808080;
	}

	.dataContent {
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		align-items: center;
		background-color: white;
		border-radius: 15rpx;
		padding: 20rpx;
	}
</style>
