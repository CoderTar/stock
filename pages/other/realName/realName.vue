<template>
	<view class="realNameCard">
		<!-- 1.用户未实名 -->
		<view class="" v-show="!trueState">
			<view class="realNameOne">
				<u--input maxlength=5 placeholder="请输入真实姓名" border="bottom" clearable v-model="realName"></u--input>

				<u--input maxlength=18 placeholder="请输入身份证号码" border="bottom" clearable v-model="idCard"></u--input>
			</view>


			<view class="realNameTwo">
				<image :src="frontImg" style="width:700rpx;height: 420rpx;" @click="idcardFont"></image>
				<image :src="backImg" style="width:700rpx;height: 420rpx;" @click="idcardBack"></image>
			</view>

			<view class="realNameThree">
				<u-button color="#d81e06" type="primary" text="提交" @click="uploadBtn"></u-button>
			</view>
		</view>

		<!-- 2.用户已经实名 -->
		<view class="alreadyTrue" v-show="trueState">
			<view>
				<text>实名认证</text>
				<text>已认证({{resRealName}})</text>
			</view>
			<view>
				<text>证件号码</text>
				<text>{{resIdCard}}</text>
			</view>
			<view class="realNameTwo" style="border-bottom: none;">
				<h4 style="margin-top: 40rpx;">证件照</h4>
				<image :src="resFrontImg" style="width:700rpx;height: 420rpx;"></image>
				<image :src="resBackImg" style="width:700rpx;height: 420rpx;"></image>
			</view>
		</view>

		<!-- 3.正在审核 -->

		<view class="adminAudit" v-show="idCardState==0">
			<h1>待审核</h1>
		</view>

		<!-- 4.审核不通过 -->
		<view class="adminAudit" v-show="idCardState==-1">
			<view style="display: flex;flex-direction: column;align-items: center;">
				<h1>验证失败</h1>
				<text style="text-decoration: underline;color: blue;" @click="againRealName">重新上传</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		realName,
		getUserIdcard,
		deleteIDcard
	} from '@/network/apiFunction.js'
	export default {
		data() {
			return {
				frontImg: "../../../static/img/ren.png",
				backImg: "../../../static/img/guo.png",

				realName: "",
				idCard: "",
				uploadArray: [],

				// 已经实名认证
				resRealName: "",
				resIdCard: "",
				resFrontImg: "",
				resBackImg: "",

				// 实名状态
				trueState: false,

				// 审核状态
				idCardState: 1
			}
		},
		onLoad() {
			let data = {
				userId: uni.getStorageSync("userID")
			}
			getUserIdcard(data).then(res => {
				if (res.code == 1) {
					console.log("res", res)
					this.trueState = true
					this.resIdCard = res.data.idCard
					this.resRealName = res.data.realName
					this.resFrontImg = res.data.location + res.data.front
					this.resBackImg = res.data.location + res.data.back

					this.idCardState = res.data.state


					// 审核不通过


				} else {
					this.trueState = false
				}
			})
		},
		methods: {
			idcardFont() {
				let that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: function(res) {

						that.frontImg = res.tempFilePaths[0]
						that.uploadArray.push(res.tempFilePaths[0])


					}
				});

			},
			idcardBack() {
				let that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: function(res) {

						that.backImg = res.tempFilePaths[0]
						that.uploadArray.push(res.tempFilePaths[0])
					}
				});
			},

			// 最后提交
			uploadBtn() {
				console.log("上传之前", this.uploadArray)
				let that = this
				let data = {
					userId: uni.getStorageSync("userID"),
					realName: this.realName,
					idCard: this.idCard,
				}

				// 校验图不为空
				if (this.uploadArray.length == 2 && this.realName != '' && this.idCard != '') {
					// 提交文字
					realName(data).then(res => {
						if (res.code == 1) {

							for (let i in this.uploadArray) {

								// 上传身份证图片
								uni.uploadFile({
									url: 'http://192.168.3.58:3000/Api/mobile/checkRealname', //仅为示例，非真实的接口地址
									filePath: that.uploadArray[i],
									formData: {
										'location': 'http://192.168.3.58:3000',
										"userId": uni.getStorageSync("userID"),
										"index": i
									},
									name: 'idcard',
									header: {
										Authorization: uni.getStorageSync("Btoken")
									},
									success: (uploadFileRes) => {
										console.log(JSON.parse(uploadFileRes.data));

										uni.showToast({
											title: "提交成功等待审核",
											icon: 'success'
										})

										setTimeout(() => {
											uni.$u.route({
												type: "navigateBack",
												delta: 1
											})
										}, 2000)

									}
								});
							}
						}
					})

				} else {
					uni.showToast({
						title: "内容不能为空",
						icon: 'error'
					})
				}


			},
			// 验证失败重新验证
			againRealName() {

				let data = {
					userID: uni.getStorageSync("userID"),
				}

				deleteIDcard(data).then(res => {
					if (res.code == 1) {
						this.trueState = false
						this.idCardState = 1
					} else {

						uni.showToast({
							title: "请稍后重试",
							icon: 'error'
						})
					}
				})
				console.log("重新验证")
			}
		}
	}
</script>

<style>
	.realNameCard {
		/* border: 1px solid tomato; */
		height: 200rpx;
	}

	.realNameOne {
		/* border: 1px solid tomato; */
		margin: 20rpx 40rpx;
	}


	.realNameTwo {
		/* border: 1px solid tomato; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.realNameTwo>image {
		margin: 20rpx 0;
	}

	.realNameThree {
		/* border: 1px solid tomato; */
		margin: 20rpx 40rpx;
	}

	.alreadyTrue {
		/* border: 1px solid tomato; */
		margin: 40rpx 40rpx;
	}

	.alreadyTrue>view {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0;
		border-bottom: 1px solid #ededee;
		padding: 20rpx 0;
	}

	.adminAudit {
		height: 100%;
		background: #ededee;
		position: fixed;
		width: 100%;
		z-index: 190;
		top: 0;
		opacity: 0.8;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
