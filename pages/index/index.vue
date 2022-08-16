<template>
	<view class="content">
		<!-- 1.导航栏 -->
		<view class="topBar">
			<uni-easyinput size="mini" prefixIcon="search" v-model="tabInput" placeholder="搜索股票，基金，理财"
				:placeholderStyle="placeholderStyle" @iconClick="iconClick">
			</uni-easyinput>
			<image @click="contactCustomer" style="margin-left: 20rpx;" src="../../static/icon/kf.png"></image>
		</view>

		<view class="">
			<u-notice-bar speed="20" :text="Notice" color='red'></u-notice-bar>
		</view>
		<!-- 2.首页操作 -->
		<view class="indexOperation">
			<view class="indexOperationOne">
				<view @click="optionalBtn">
					<image style="margin-left: 20rpx;" src="../../static/icon/zizhu.png"></image>
					<text style="font-size: 26rpx;">自主选股</text>
				</view>
				<view @click="marketBtn">
					<image style="margin-left: 20rpx;" src="../../static/icon/zixuan.png"></image>
					<text style="font-size: 26rpx;">市场行情</text>
				</view>
				<view @click="assetsBtn">
					<image style="margin-left: 20rpx;" src="../../static/icon/ziji.png"></image>
					<text style="font-size: 26rpx;">资产管理</text>
				</view>
				<view @click="historyBtn">
					<image style="margin-left: 20rpx;" src="../../static/icon/order.png"></image>
					<text style="font-size: 26rpx;">持仓历史</text>
				</view>
			</view>

			<view class="indexOperationOne">
				<view @click="lawBtn">
					<image style="margin-left: 20rpx;" src="../../static/icon/falv.png"></image>
					<text style="font-size: 26rpx;">法律声明</text>
				</view>
				<view @click="helpBtn">
					<image style="margin-left: 20rpx;" src="../../static/icon/new.png"></image>
					<text style="font-size: 26rpx;">新手帮助</text>
				</view>
				<view @click="aboutBtn">
					<image style="margin-left: 20rpx;" src="../../static/icon/gs.png"></image>
					<text style="font-size: 26rpx;">关于我们</text>
				</view>
				<view @click="contactCustomer">
					<image style="margin-left: 20rpx;" src="../../static/icon/kf1.png"></image>
					<text style="font-size: 26rpx;">联系客服</text>
				</view>
			</view>
		</view>
		<!-- 3.轮播图 -->
		<view class="indexSwipe">
			<u-swiper :list="swiperData" keyName="image" showTitle :autoplay="false" circular></u-swiper>
		</view>
		<!-- 4.今日指数 -->
		<view class="dailyIndex">
			<view v-for="(item,index) in mainStock">
				<view class="dailyIndexTitle">
					<h3>{{item.title}}</h3>
				</view>
				<view class="dailyIndexData" :style="{color:item.percent>0?'#E5353D':'#41C662'}">
					<view style="font-size: 40rpx;">{{item.price}}</view>
					<view style="font-size: 25rpx;margin-top: 15rpx;">
						<text style="margin: 0 10rpx;">{{item.UpDown}}%</text>
						<text style="margin: 0 10rpx;">{{item.percent}}%</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 5.分割线 -->
		<u-line></u-line>
		<!-- 6.每日必读 -->
		<view class="everydayRead">
			<view style="display: flex;align-items: center;">
				<h3>每日必读</h3>
			</view>
			<!-- 每日必读数据 -->
			<view style="border: 1px solid red;">
				<!-- 每日必读部分 -->
				<!-- <everydayData></everydayData> -->
			</view>
		</view>
	</view>
</template>

<script>
	import {
		basisConfig,
		imageAd,
		stockDetail
	} from '@/network/apiFunction.js'
	export default {
		data() {
			return {
				nowTime: "***",
				tabInput: null,
				placeholderStyle: "color:white;font-size:30rpx",

				// 顶部轮播公告 
				Notice: '',
				swiperData: [],

				mainStock: []
			}
		},
		// 每次重新获取今日指数
		onShow() {
			this.mainStock.length = 0
			uni.request({
				url: 'http://qt.gtimg.cn/&q=s_sh000001,s_sz399001,s_sz399006',
				method: 'GET',
				success: (res) => {
					let arr = res.data.split(";")
					arr.pop()
					for (let i in arr) {
						arr[i] = arr[i].split("~")
						this.mainStock.push({
							title: arr[i][1],
							price: parseFloat(arr[i][3]),
							UpDown: parseFloat(arr[i][4]),
							percent: parseFloat(arr[i][5])
						})
					}
					console.log("指数", this.mainStock)
				}
			})
		},
		onLoad() {
			

			// 1.获取基本配置
			basisConfig().then(res => {
				console.log("res", res)
				this.Notice = res.data.swipe_notice
			})
			// 2.获取轮播图
			imageAd().then(res => {

				if (res.code == 1) {

					for (let i in res.data) {
						// 排除启用的
						if (res.data[i].show_state == 0) {

							res.data[i].image = res.data[i].location + res.data[i].image
							this.swiperData.push(res.data[i])
						}
					}
				} else {
					this.swiperData = []
					console.log("轮播图获取失败")
				}

			})
		},
		methods: {
			iconClick() {

			},
			// 自选股票
			optionalBtn() {
				uni.$u.route({
					url: 'pages/money/money',
					type: "switchTab",
				})
				uni.setStorageSync('OptionalKey', true);
			},

			// 市场行情
			marketBtn() {
				uni.$u.route({
					url: 'pages/money/money',
					type: "switchTab",
				})
			},

			// 资金管理
			assetsBtn() {
				uni.$u.route({
					url: 'pages/other/assetsDetail/assetsDetail',
				})
			},
			// 历史持仓
			historyBtn() {
				uni.setStorageSync('historyKey', 'hello');
				uni.$u.route({
					url: 'pages/business/business',
					type: "switchTab",
				})
			},

			// 法律申明
			lawBtn() {
				uni.$u.route({
					url: 'pages/other/legalDescription/legalDescription',
				})
			},
			// 新手帮助
			helpBtn() {
				uni.$u.route({
					url: 'pages/other/userHelp/userHelp',
				})
			},
			// 关于我们
			aboutBtn() {
				uni.$u.route({
					url: 'pages/other/aboutUs/aboutUs',
				})
			},
			// 联系客服
			contactCustomer() {
				console.log("联系客户")
				uni.$u.route({
					// url: 'pages/other/onlineCustome/onlineCustome',
					url: 'pages/testPage/testPage',
				})
			}

		}
	}
</script>

<style>
	image {
		width: 60rpx;
		height: 60rpx;
	}

	page {
		background-color: #ededed;
	}

	.topBar {
		border: 1px solid tomato;
		height: 100rpx;
		background-color: #d81e06;
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0 40rpx;

		/* #ifdef app-plus*/
		padding-top: 70rpx;
		/* #endif */
	}



	.indexOperationOne {
		display: flex;
		justify-content: space-between;
		margin: 10rpx 40rpx;
	}

	.indexOperationOne>view {
		display: flex;
		flex-direction: column;


	}

	.indexOperationOne>text {
		font-size: 20rpx;
	}

	.indexSwipe {
		margin: 40rpx 40rpx;
	}

	.dailyIndex {
		margin: 20rpx 40rpx;
		height: 100px;
		border-radius: 15px;
		display: flex;
		justify-content: space-between;
	}

	.dailyIndex>view {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0 0 30%;
		background-color: white;

		/* border: 1px solid tomato; */
		border-radius: 15px 15px 0 0;
		box-shadow: 1px 0px 6px 4.1px rgba(0, 0, 0, 0.1)
	}

	.dailyIndexTitle {
		padding: 0 20rpx;
		color: white;
		background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
		border-radius: 20rpx 20rpx 0 0;
		width: 81.5%;
		/* flex: 0 0 40%; */
	}

	.dailyIndexData {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* margin-top: 10rpx; */
		background-color: white;
		color: red;
		/* border: 1px solid #ededed; */
		padding: 20rpx 0;

		width: 100%;
		height: 100%;
		background-color: white;

		/* border: 1px solid tomato; */
		/* flex: 0 0 40%; */
	}


	.everydayRead {
		/* border: 1px solid tomato; */
		height: 100px;
		margin: 20rpx 40rpx;
	}
</style>
