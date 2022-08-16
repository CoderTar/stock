<template>
	<view style="border: 1px solid white;">
		<!-- 1.充值金额 -->
		<!-- <view class="rechargeOne">
			<h3>充值金额</h3>
			<view class="">
				<text @click="selectMoney(index)" :class="{activeMoney:slectActive===index?true:false}" class="price"
					v-for="(item,index) in moneyNume">{{item}}</text>
			</view>
		</view> -->

		<!-- 2.其他金额 -->
		<view class="otherMoney">
			<h3>入金金额 &yen;</h3>
			<view style="margin-top: 20rpx;">
				<u--input type='number' maxlength=7 placeholder="最低入金面额1000元" border="bottom" clearable
					v-model="inputMoneyNum">
				</u--input>
			</view>
		</view>

		<view class="moneyType">
			<h3>充值方式</h3>
			<view style="margin-top: 30rpx;">
				<u-radio-group iconPlacement='right' borderBottom placement='column' v-model="payType">
					<u-radio @change="radioChange" :customStyle="{marginBottom: '8px'}"
						v-for="(item, index) in payTypeList" :key="index" :label="item.name" :name="item.name">
					</u-radio>
				</u-radio-group>
			</view>
		</view>

		<view style="margin: 0 40rpx;">
			<u-button color="#d81e06" type="primary" text="充值" @click="addMoney"></u-button>
		</view>
	</view>
</template>

<script>
	import {
		getPayTpye,
		getUserIdcard
	} from '@/network/apiFunction.js'
	export default {
		data() {
			return {
				slectActive: -1,
				moneyNume: [1000, 5000, 10000, 20000, 30000, 50000],
				// 基本案列数据
				payTypeList: [],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				payType: '',
				payTypeFixed: [],

				inputMoneyNum: ''
			}
		},
		mounted() {

			// 入金之前校验是否已经绑定身份证
			let data1 = {
				userId: uni.getStorageSync("userID")
			}

			getUserIdcard(data1).then(res => {
				if (res.code == 1) {
					console.log("res", res)

					// 等待管理员审核
					if (res.data.state == 0) {
						uni.showToast({
							title: "等待身份验证",
							icon: 'error'
						})

						setTimeout(res => {
							uni.$u.route({
								type: "navigateBack"
							})
						}, 1886)
					}

				} else {

					uni.showToast({
						title: "请先绑定身份证",
						icon: 'error'
					})

					setTimeout(res => {
						uni.$u.route({
							url: 'pages/other/realName/realName',
							type: "redirectTo"
						})
					}, 1886)

				}
			})



			let data = {
				state: 1
			}
			getPayTpye(data).then(res => {
				if (res.code == 1) {
					this.payTypeFixed = res.data
					console.log("充值账户", res)
					// this.payTypeList = res.data[0].way_name
					for (let i in res.data) {
						this.payTypeList.push({
							name: res.data[i].way_name,
							disabled: false
						})
					}
				}
			})
		},
		methods: {
			// selectMoney(index) {
			// 	this.slectActive = index
			// 	console.log(this.moneyNume[index])
			// },
			// 充值方式选择
			radioChange(n) {
				console.log('groupChange', n);

				this.payType = n

				for (let i in this.payTypeList) {
					if (this.payTypeList[i].name == this.payType) {

						console.log("payTypeList", this.payTypeList[i])
					}
				}
			},
			addMoney() {
				console.log("充值", this.payTypeFixed)
				// 1.校验充值金额不能为空
				if (this.inputMoneyNum != '') {

					// 2.校验充值金不能低于1000

					if (this.inputMoneyNum >= 1000) {

						if (this.payType != '') {

							uni.$u.route({
								url: 'pages/other/addMoney/addMoney',
								params: {
									payType: this.payType,
									payTypeFixed: JSON.stringify(this.payTypeFixed),
									price: this.inputMoneyNum
								}
							})

						} else {
							uni.showToast({
								title: "请选择充值方式",
								icon: 'error'
							})
						}
					} else {

						uni.showToast({
							title: "面额不低于1000",
							icon: 'error'
						})

					}

				} else {

					uni.showToast({
						title: "请输入充值面额",
						icon: 'error'
					})
				}

			}
		}
	}
</script>

<style>
	page {
		background-color: white;
	}

	.rechargeOne {
		margin: 80rpx 40rpx;
		/* border: 1px solid tomato; */
	}

	.rechargeOne>view {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		/* border: 1px solid tomato; */
	}

	.price {
		background-color: #b0b8bc;
		width: 200rpx;
		height: 80rpx;
		margin: 20rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.activeMoney {
		background-color: #d81e06;
		color: white;
	}

	.otherMoney {
		/* border: 1px solid green; */
		height: 100px;
		margin: 0 40rpx;
		margin-top: 60rpx;
	}

	.moneyType {
		margin: 0 40rpx;
	}
</style>
