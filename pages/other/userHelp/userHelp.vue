<template>
	<view class="helpCard">
		<view v-for="(item,index) in selectTitle" @click="selectBtn(index)">
			<view>{{item}}</view>
			<view>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectTitle: ['交易规则', '费用收取', '常见问题']
			}
		},
		methods: {
			selectBtn(index) {
				console.log("index", this.selectTitle[index])
				if (index === 0) {
					uni.$u.route({
						url: 'pages/other/TransRules/TransRules',
					})
				}
				if (index === 1) {
					uni.$u.route({
						url: 'pages/other/collectDetail/collectDetail',
					})
				}
				if (index === 2) {
					uni.$u.route({
						url: 'pages/other/commonProblem/commonProblem',
					})
				}
			}
		}
	}
</script>

<style>
	.helpCard {
		margin-top: 50rpx;
	}

	.helpCard>view {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 40rpx;
		border-bottom: 1px solid #ededed;
		padding: 20rpx 0;
	}
</style>
