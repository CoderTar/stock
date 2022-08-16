<template>
	<view class="addCard">
		<view class="">
			<text class="addTitle">持卡人姓名：</text>
			<u--input v-model="havaCardName" placeholder="请输入内容" clearable border="none" fontSize="25rpx"></u--input>
		</view>


		<view class="">
			<text class="addTitle">开户银行：</text>
			<view @click="selectBtn" style="width: 60%;color: #c0c4cc;font-size: 25rpx;">
				{{bankName}}
			</view>
			<u-picker @close="close" closeOnClickOverlay :show="showSelectBank" :columns="columnsBank"
				@confirm="confirmBank" @cancel="closeBank">
			</u-picker>
			<u-icon @click="selectBtn" :name="iconState"></u-icon>
		</view>

		<view class="">
			<text class="addTitle">所在省份：</text>
			<view @click="selectBtnPro" style="width: 60%;color: #c0c4cc;font-size: 25rpx;">
				{{bankPro}}
			</view>
			<u-picker @close="close" closeOnClickOverlay :show="showSelectPro" :columns="columnsPro"
				@confirm="confirmBankPro" @cancel="closeBank">
			</u-picker>
			<u-icon @click="selectBtnPro" :name="iconStatePro"></u-icon>
		</view>

		<view class="">
			<text class="addTitle">所在城市：</text>
			<view @click="selectBtnCity" style="width: 60%;color: #c0c4cc;font-size: 25rpx;">
				{{bankCity}}
			</view>
			<u-picker @close="close" closeOnClickOverlay :show="showSelectCity" :columns="columnsCity"
				@confirm="confirmBankCity" @cancel="closeBank">
			</u-picker>
			<u-icon @click="selectBtnCity" :name="iconStateCity"></u-icon>
		</view>



		<view class="">
			<text class="addTitle">支行名称：</text>
			<u--input v-model="treeBankName" placeholder="请输入支行名称" clearable border="none" fontSize="25rpx"></u--input>
		</view>
		<view class="">
			<text class="addTitle">银行卡号：</text>
			<u--input v-model="bankCardNum" placeholder="请输入银行卡卡号" clearable border="none" fontSize="25rpx"></u--input>
		</view>

		<view class="">
			<text class="addTitle">身份证号：</text>
			<u--input maxlength=18 v-model="idCardNum" placeholder="请输入身份证" clearable border="none" fontSize="25rpx">
			</u--input>
		</view>


		<view class="">
			<text class="addTitle">预留号码：</text>
			<u--input maxlength=11 v-model="reservedNum" placeholder="请输入银行预留号码" clearable border="none"
				fontSize="25rpx">
			</u--input>
		</view>



		<view class="customBtn" style="border: none;">
			<u-button color="#d81e06" type="primary" text="提交" @click="submintBtn"></u-button>
		</view>

	</view>
</template>

<script>
	import {
		effectiveBank,
		addCard,
		userUpdateCard
	} from '@/network/apiFunction.js'
	let cityJson = require('static/city.json')

	export default {
		data() {
			return {

				cardState: '',

				havaCardName: "",
				treeBankName: "",
				bankCardNum: "",
				idCardNum: '',
				reservedNum: "",


				showSelectBank: false,
				iconState: "arrow-down",
				bankName: "请选择银行",
				columnsBank: [
					[],
				],

				showSelectPro: false,
				iconStatePro: "arrow-down",
				bankPro: "请选择所在省份",
				columnsPro: [
					[]
				],

				showSelectCity: false,
				bankCity: "请选择所在城市",
				iconStateCity: "arrow-down",
				columnsCity: [
					[],
				],
			}
		},
		onLoad(options) {
			console.log(cityJson)
			console.log("options", options)

			// 判断第一绑定还是更换绑定 

			this.cardState = options.cardState

			// 处理省份
			for (let i in cityJson.data) {
				this.columnsPro[0].push(cityJson.data[i].name)
			}

			// 获取有效银行卡
			effectiveBank().then(res => {
				if (res.code == 1) {
					console.log("有效银行", res.data)
					for (let i in res.data) {
						this.columnsBank[0].push(res.data[i].name)
					}
				}
			})
		},
		methods: {

			selectBtn() {
				console.log("选择添加银行卡")
				this.showSelectBank = true
				this.iconState = "arrow-up"
			},
			confirmBank(event) {
				console.log(event)
				this.bankName = event.value[0]
				this.showSelectBank = false
				this.iconState = "arrow-down"
			},
			// 省份选择
			confirmBankPro(event) {
				console.log(event)
				this.bankPro = event.value[0]
				this.showSelectPro = false
				this.iconStatePro = "arrow-down"

				this.columnsCity[0].length = 0

				for (let i in cityJson.data) {

					if (cityJson.data[i].name == event.value[0]) {
						console.log(cityJson.data[i])

						if (cityJson.data[i].pchilds.length == 1) {

							console.log("市或港澳台")
							for (let j in cityJson.data[i].pchilds[0].cchilds) {
								console.log("所选的省的市", cityJson.data[i].pchilds[0].cchilds[j].name)

								this.columnsCity[0].push(cityJson.data[i].pchilds[0].cchilds[j].name)
							}

						} else {
							for (let j in cityJson.data[i].pchilds) {
								console.log("所选的省的市", cityJson.data[i].pchilds[j].name)

								this.columnsCity[0].push(cityJson.data[i].pchilds[j].name)
							}
						}


					}
				}
			},
			confirmBankCity(event) {
				console.log(event)
				this.bankCity = event.value[0]
				this.showSelectCity = false
				this.iconStateCity = "arrow-down"
			},

			// 遮罩层关闭
			close() {
				this.showSelectBank = false
				this.showSelectPro = false
				this.iconStateCity = false
				this.iconState = "arrow-down"
				this.iconStatePro = "arrow-down"
				this.iconStateCity = "arrow-down"
			},
			// 取消关闭
			closeBank(value) {
				this.showSelectBank = false
				this.showSelectPro = false
				this.showSelectCity = false
				this.iconState = "arrow-down"
				this.iconStatePro = "arrow-down"
				this.iconStateCity = "arrow-down"
			},

			selectBtnPro() {
				console.log("选择省份")
				this.showSelectPro = true
				this.iconStatePro = "arrow-up"
			},

			selectBtnCity() {
				console.log("选择城市")
				this.showSelectCity = true
				this.iconStateCity = "arrow-up"
			},

			// 最后提交
			submintBtn() {
				console.log("最后提交文件")

				let data = {
					userId: uni.getStorageSync("userID"), //用户id
					idCard: this.idCardNum, //身份证
					bankName: this.bankName, //银行昵称
					bankCard: this.bankCardNum, //银行卡号
					bankProvince: this.bankPro, //开户省
					bankCity: this.bankCity, //开户市
					bankUser: this.havaCardName, //持卡人
					bnakMobile: this.reservedNum, //预留号码
					bankAddress: this.treeBankName, //分行昵称
				}

				// 用户绑定银行卡
				if (this.cardState == 0) {
					if (this.idCardNum != "" && this.bankName != '' && this.bankCardNum != '' && this.bankPro != '' && this
						.bankCity != '' && this.havaCardName != '' && this.reservedNum != '' && this.treeBankName != '') {

						addCard(data).then(res => {
							if (res.code == 1) {
								console.log("添加成功", res)
								uni.showToast({
									title: '绑定成功',
									duration: 2000
								});

								// 提交成功返回上一页
								setTimeout(() => {
									uni.$u.route({
										type: "navigateBack",
										delta: 1
									})
								}, 886)
							}
						})
					} else {

						uni.showToast({
							title: '提示失败',
							duration: 2000,
							icon: "error"
						});

					}
				}

				// 用户更新银行卡
				if (this.cardState == 1) {
					if (this.idCardNum != "" && this.bankName != '' && this.bankCardNum != '' && this.bankPro != '' && this
						.bankCity != '' && this.havaCardName != '' && this.reservedNum != '' && this.treeBankName != '') {

						userUpdateCard(data).then(res => {
							if (res.code == 1) {
								console.log("添加成功", res)
								uni.showToast({
									title: '更换成功',
									duration: 2000
								});

								// 提交成功返回上一页
								setTimeout(() => {
									uni.$u.route({
										type: "navigateBack",
										delta: 1
									})
								}, 886)
							}
						})
					} else {

						uni.showToast({
							title: '提交失败',
							duration: 2000,
							icon: "error"
						});

					}
				}

			}
		}
	}
</script>

<style>
	.addCard {
		/* border: 1px solid rosybrown; */
	}

	.addCard>view {
		display: flex;
		align-items: center;
		margin: 20rpx 40rpx;
		border: 1px solid #e6e6e6;
		padding: 20rpx;
	}

	.addTitle {
		margin-right: 30rpx;
		font-size: 25rpx;
		flex: 0 0 25%;
		/* border: 1px solid green; */
	}

	.customBtn {
		margin: 20rpx 40rpx;
		border: none;
	}
</style>
