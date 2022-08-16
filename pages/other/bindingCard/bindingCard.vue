<template>
	<view class="bindingCard">
		<!-- 1.需要的银行卡 -->
		<view class="bindingCardOne" v-show="!bindingState">
			<u-icon @click="addCard" name="plus-circle" size="50" color="#d81e06"></u-icon>
			<text>添加银行卡 </text>
		</view>

		<!-- 2.已绑定银行卡 -->
		<view class="userBankCard" v-show="bindingState">
			<view class="">
				<h2>{{bankName}}</h2>
			</view>
			<view class="userBankCardNum">
				<text v-for="(item,index) in bankNum" :key="index">{{item}}</text>
			</view>
		</view>

		<view class="bankCardTip" v-show="bindingState">
			<text>提示：每个账户仅支持绑定一张银行卡</text>
			<text style="color: blue;" @click="changeBankCard">更换绑定?</text>
		</view>
	</view>
</template>

<script>
	import {
		userBankCard
	} from '@/network/apiFunction.js'
	export default {
		data() {
			return {
				bankName: '',
				bankNum: [],
				bindingState: true
			}
		},
		onShow() {
			console.log("绑定银行卡")
			this.bankNum.length = 0
			let data = {
				userId: uni.getStorageSync("userID")
			}
			userBankCard(data).then(res => {
				if (res.code == 1) {
					this.bankName = res.data.bank_name
					this.bankNum.push(res.data.bank_card.substring(0, 4))
					this.bankNum.push(res.data.bank_card.substring(4, 8))
					this.bankNum.push(res.data.bank_card.substring(8, 12))
					this.bankNum.push(res.data.bank_card.substring(12))
				} else {

					this.bindingState = false
				}
			})
		},
		methods: {
			// 添加银行卡
			addCard() {
				uni.$u.route({
					url: 'pages/other/addCard/addCard',
					params: {
						cardState: 0
					}
				})
			},

			// 更换绑定银行卡
			changeBankCard() {
				console.log("更换绑定")
				uni.$u.route({
					url: 'pages/other/addCard/addCard',
					params: {
						cardState: 1
					}
				})
			}
		}
	}
</script>

<style>
	.bindingCardOne {
		height: 200rpx;
		margin: 20rpx 40rpx;
		border-radius: 20rpx;
		box-shadow: 0 0 10px 1px rgba(0, 0, 0, .2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.userBankCard {
		height: 320rpx;
		border-radius: 25px;
		margin: 20rpx 40rpx;
		background: linear-gradient(rgba(216, 30, 6, 0.8), rgba(216, 30, 6, 0.8)), url('@/static/yl.png') no-repeat 360rpx 40rpx/ 30px 15px;
		background-size: 290rpx 290rpx;
		padding: 10px 20px;
		/* color: #d81e06; */

		color: aliceblue;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		box-shadow: 0 0 10px 1px rgba(0, 0, 0, .4);
	}

	.userBankCardNum>text {
		/* border: 1px solid green; */
		margin: 0 10rpx;
		font-weight: 700;
	}

	.bankCardTip {

		font-size: 20rpx;
		display: flex;
		justify-content: space-between;
		margin: 30rpx 60rpx;
	}
</style>
