<template>
	<view class="updatePwdCard">
		<view>
			<u--input type="password" placeholder="请输入新密码" border="surround" v-model="pwdOne"></u--input>
		</view>
		<view>
			<u--input type="password" placeholder="再次输入新密码" border="surround" v-model="pwdTwo"></u--input>
		</view>

		<view class="subMit">
			<u-button color="#d81e06" type="primary" text="提交" @click="updateBtn"></u-button>
		</view>
	</view>
</template>

<script>
	import {
		updatePwd
	} from '@/network/apiFunction.js'
	export default {
		data() {
			return {
				pwdOne: "",
				pwdTwo: ""
			}
		},
		methods: {

			updateBtn() {

				if (this.pwdOne == this.pwdTwo) {

					if (uni.$u.test.rangeLength(this.pwdOne, [6, 12])) {
						
						let data = {
							userId: uni.getStorageSync('userID'),
							password: this.pwdOne
						}

						updatePwd(data).then(res => {
							if (res.code == 1) {

								uni.showToast({
									title: "密码修改成功",
									icon: 'success'
								})

								setTimeout(() => {
									uni.$u.route({
										delta: 1,
										type: 'navigateBack'
									})
								}, 1688)
							} else {
								uni.showToast({
									title: "密码修改失败",
									icon: 'error'
								})
							}
						})
					} else {
						uni.showToast({
							title: "密码长度不够",
							icon: 'error'
						})
					}
				} else {
					console.log("前后密码不一致")
					this.pwdOne = ""
					this.pwdTwo = ""

					uni.showToast({
						title: "请输入相同密码",
						icon: 'error'
					})
				}
			}

		}
	}
</script>

<style>
	.updatePwdCard {
		/* border: 1px solid tomato; */
		margin: 20rpx 40rpx;
	}

	.updatePwdCard>view {
		margin: 10px 0;
	}
</style>
