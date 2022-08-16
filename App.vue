<script>
	export default {
		onLaunch: function() {


			let Btoken = uni.getStorageSync("Btoken")

			if (Btoken) {

				uni.$u.route({
					url: 'pages/index/index',
					type: "switchTab"
				})
			} else {

				uni.$u.route({
					url: 'pages/other/useLogin/useLogin',
					type: "reLaunch"
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";

	// page {
	// 	background-color: #ededed;
	// }
</style>
