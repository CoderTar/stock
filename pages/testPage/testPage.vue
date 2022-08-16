<template>
	<view>
		<u-tabs :list="list1" @click="click"></u-tabs>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
					name: '关注',
				}, {
					name: '推荐',
				}, {
					name: '电影'
				}, {
					name: '科技'
				}, {
					name: '音乐'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}]
			}
		},
		methods: {
			click(item) {
				console.log('item', item);
			}
		}

	}
</script>

<style>

</style>
