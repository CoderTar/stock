<template>
	<view class="everydayReadCard">
		<iframe frameborder="0" width="100%" height="1000" scrolling="no"
			src="https://www.jin10.com/example/jin10.com.html"></iframe>
	</view>
</template>

<script>
	export default {
		name: "everydayData",
		data() {
			return {

			};
		},
		props: {
			newsTitle: String,
			newsContent: String
		}
	}
</script>

<style>
	.everydayReadCard {
		/* border: 1px solid tomato; */
		display: flex;
		flex-direction: column;
		padding: 20rpx 0;
	}

	.everydayReadCardOne {
		/* border: 1px solid green; */
		display: flex;
		align-items: center;
		color: #325678;
	}

	.everydayReadCardOne>view {}

	.everydayReadCardTwo {
		display: flex;
		flex-direction: column;
		color: #325678;
		font-size: 30rpx;
	}
</style>
