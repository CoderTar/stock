<template>
	<view>
		<!-- 1.第一部分 -->
		<view class="moneyCardOne">
			<view style="width: 100%;display: flex;padding: 0 140rpx;align-items: center;">
				<u-subsection activeColor="#d81e06" :list="shareType" :current="current" @change="sharesType">
				</u-subsection>
			</view>
		</view>

		<!-- 2.1默认 -->

		<view style="position: fixed;width: 100%;top:2;">
			<view class="moneyCardTwo" v-show="sinceAnddefault==0">
				<view>
					<u-tabs :list="shareRank" lineWidth="30" lineColor="#d81e06" :activeStyle="{
					            color: '#303133',
					            fontWeight: 'bold',
					            transform: 'scale(1.05)'
					        }" :inactiveStyle="{
					            color: '#606266',
					            transform: 'scale(1)'
					        }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @click="sharesRanking">
					</u-tabs>
				</view>
			</view>
		</view>


		<!-- 2.2默认数据 -->
		<view class="moneyCardThree" v-show="sinceAnddefault==0">
			<view v-show="selectState==0">
				<shareDetails :shareArray="shareData" dataColor='red'></shareDetails>
			</view>
			<view v-show="selectState==1">
				<shareDetails :shareArray="shareData" dataColor='green'></shareDetails>
			</view>
			<view v-show="selectState==2">
				<shareDetails :shareArray="shareData" dataColor='red'></shareDetails>
			</view>

		</view>

		<!-- 3自选 -->
		<view v-show="sinceAnddefault==1" class="">
			<!-- 3.1自选搜索 -->
			<view style="position: fixed;width: 100%;background-color: white;z-index: 100;top: 100rpx;">
				<view class="sinceOne">
					<u--input placeholder="请输入股票代码/名称" prefixIcon="search"
						prefixIconStyle="font-size: 22px;color: #909399">
					</u--input>
				</view>
			</view>

			<!-- 3.2数据 -->
			<view style="margin-top: 89rpx;">
				<view class="sinceTwo" v-for="(item,index) in 100" @click="sharesDeatil(item)">
					<view style="display: flex;align-items: center;">
						<image src="../../static/icon/rz.png" style="width: 60rpx;height: 60rpx;"></image>
						<text>股票昵称</text>
					</view>

					<view>0000{{index}}</view>
				</view>
			</view>
		</view>

		<!-- 申购 -->
		<view v-show="sinceAnddefault==2">
			<!-- 申购标题 -->
			<view style="position: fixed;top: 101rpx;width: 100%;z-index: 1000;">
				<view class="purchase">
					<u-row>
						<u-col span="2" align="center">
							<view style="display: flex;flex-direction: column;align-items: center;font-size: 20rpx;">
								<text>股票</text>
								<text style="color: #999999;">申购代码</text>
							</view>
						</u-col>
						<u-col span="2" align="center">
							<view class="demo-layout">申购时间</view>
						</u-col>
						<u-col span="2" align="center">
							<view class="demo-layout">发行价格</view>
						</u-col>
						<u-col span="2" align="center">
							<view class="demo-layout">申购上限</view>
						</u-col>
						<u-col span="2" align="center">
							<view class="demo-layout">最低申购</view>
						</u-col>
						<u-col span="2" align="center">
							<view class="demo-layout">操作</view>
						</u-col>
					</u-row>
				</view>
			</view>

			<!-- 申购股票 -->
			<view class="purchaseData">
				<purchaseStock :applyStock="applyStock" @applyUser="applyUser"></purchaseStock>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shareType: ['沪深', '自选', '申购'],
				current: 0,

				shareRank: [{
					name: '涨幅榜',
				}, {
					name: '跌幅榜',
				}, {
					name: '换手率'
				}],

				selectState: 0,

				sinceAnddefault: 0,

				// 审购股票数据
				applyStock: [{
					downNum: 23, //最低申购
					topNum: 1000, //最高申购
					releaseprice: 2340, //发行价格
					applyTime: "07-28", //申购日期
					stockName: "富士山", //股票名称
					stockCode: "001234" //股票代码
				}, {
					downNum: 290, //最低申购
					topNum: 344, //最高申购
					releaseprice: 6666, //发行价格
					applyTime: "09-10", //申购日期
					stockName: "贵州茅台", //股票名称
					stockCode: "888899" //股票代码
				}, {
					downNum: 23, //最低申购
					topNum: 1000, //最高申购
					releaseprice: 2340, //发行价格
					applyTime: "07-28", //申购日期
					stockName: "富士山", //股票名称
					stockCode: "001234" //股票代码
				}, {
					downNum: 290, //最低申购
					topNum: 344, //最高申购
					releaseprice: 6666, //发行价格
					applyTime: "09-10", //申购日期
					stockName: "贵州茅台", //股票名称
					stockCode: "888899" //股票代码
				}, {
					downNum: 23, //最低申购
					topNum: 1000, //最高申购
					releaseprice: 2340, //发行价格
					applyTime: "07-28", //申购日期
					stockName: "富士山", //股票名称
					stockCode: "001234" //股票代码
				}, {
					downNum: 290, //最低申购
					topNum: 344, //最高申购
					releaseprice: 6666, //发行价格
					applyTime: "09-10", //申购日期
					stockName: "贵州茅台", //股票名称
					stockCode: "888899" //股票代码
				}, {
					downNum: 23, //最低申购
					topNum: 1000, //最高申购
					releaseprice: 2340, //发行价格
					applyTime: "07-28", //申购日期
					stockName: "富士山", //股票名称
					stockCode: "001234" //股票代码
				}, {
					downNum: 290, //最低申购
					topNum: 344, //最高申购
					releaseprice: 6666, //发行价格
					applyTime: "09-10", //申购日期
					stockName: "贵州茅台", //股票名称
					stockCode: "888899" //股票代码
				}, {
					downNum: 23, //最低申购
					topNum: 1000, //最高申购
					releaseprice: 2340, //发行价格
					applyTime: "07-28", //申购日期
					stockName: "富士山", //股票名称
					stockCode: "001234" //股票代码
				}, {
					downNum: 290, //最低申购
					topNum: 344, //最高申购
					releaseprice: 6666, //发行价格
					applyTime: "09-10", //申购日期
					stockName: "贵州茅台", //股票名称
					stockCode: "888899" //股票代码
				}, {
					downNum: 23, //最低申购
					topNum: 1000, //最高申购
					releaseprice: 2340, //发行价格
					applyTime: "07-28", //申购日期
					stockName: "富士山", //股票名称
					stockCode: "001234" //股票代码
				}, {
					downNum: 290, //最低申购
					topNum: 344, //最高申购
					releaseprice: 6666, //发行价格
					applyTime: "09-10", //申购日期
					stockName: "贵州茅台", //股票名称
					stockCode: "888899" //股票代码
				}, {
					downNum: 23, //最低申购
					topNum: 1000, //最高申购
					releaseprice: 2340, //发行价格
					applyTime: "07-28", //申购日期
					stockName: "富士山", //股票名称
					stockCode: "001234" //股票代码
				}, {
					downNum: 290, //最低申购
					topNum: 344, //最高申购
					releaseprice: 6666, //发行价格
					applyTime: "09-10", //申购日期
					stockName: "贵州茅台", //股票名称
					stockCode: "888899" //股票代码
				}, {
					downNum: 23, //最低申购
					topNum: 1000, //最高申购
					releaseprice: 2340, //发行价格
					applyTime: "07-28", //申购日期
					stockName: "富士山", //股票名称
					stockCode: "001234" //股票代码
				}, {
					downNum: 290, //最低申购
					topNum: 344, //最高申购
					releaseprice: 6666, //发行价格
					applyTime: "09-10", //申购日期
					stockName: "贵州茅台", //股票名称
					stockCode: "888899" //股票代码
				}, {
					downNum: 23, //最低申购
					topNum: 1000, //最高申购
					releaseprice: 2340, //发行价格
					applyTime: "07-28", //申购日期
					stockName: "富士山", //股票名称
					stockCode: "001234" //股票代码
				}, {
					downNum: 290, //最低申购
					topNum: 344, //最高申购
					releaseprice: 6666, //发行价格
					applyTime: "09-10", //申购日期
					stockName: "贵州茅台", //股票名称
					stockCode: "888899" //股票代码
				}, {
					downNum: 23, //最低申购
					topNum: 1000, //最高申购
					releaseprice: 2340, //发行价格
					applyTime: "07-28", //申购日期
					stockName: "富士山", //股票名称
					stockCode: "001234" //股票代码
				}, {
					downNum: 290, //最低申购
					topNum: 344, //最高申购
					releaseprice: 6666, //发行价格
					applyTime: "09-10", //申购日期
					stockName: "贵州茅台", //股票名称
					stockCode: "888899" //股票代码
				}, {
					downNum: 23, //最低申购
					topNum: 1000, //最高申购
					releaseprice: 2340, //发行价格
					applyTime: "07-28", //申购日期
					stockName: "富士山", //股票名称
					stockCode: "001234" //股票代码
				}, {
					downNum: 290, //最低申购
					topNum: 344, //最高申购
					releaseprice: 6666, //发行价格
					applyTime: "09-10", //申购日期
					stockName: "贵州茅台", //股票名称
					stockCode: "888899" //股票代码
				}],

				// 股票数据
				shareData: [{
						name: "西域旅游",
						code: "xy887364",
						newData: "43.21",
						wave: "234.33"
					},
					{
						name: "贵州茅台",
						code: "mt667788",
						newData: "123.21",
						wave: "34.33"
					}, {
						name: "西域旅游",
						code: "xy887364",
						newData: "43.21",
						wave: "234.33"
					},
					{
						name: "贵州茅台",
						code: "mt667788",
						newData: "123.21",
						wave: "34.33"
					}, {
						name: "西域旅游",
						code: "xy887364",
						newData: "43.21",
						wave: "234.33"
					},
					{
						name: "贵州茅台",
						code: "mt667788",
						newData: "123.21",
						wave: "34.33"
					}, {
						name: "西域旅游",
						code: "xy887364",
						newData: "43.21",
						wave: "234.33"
					},
					{
						name: "贵州茅台",
						code: "mt667788",
						newData: "123.21",
						wave: "34.33"
					}, {
						name: "西域旅游",
						code: "xy887364",
						newData: "43.21",
						wave: "234.33"
					},
					{
						name: "贵州茅台",
						code: "mt667788",
						newData: "123.21",
						wave: "34.33"
					}, {
						name: "西域旅游",
						code: "xy887364",
						newData: "43.21",
						wave: "234.33"
					},
					{
						name: "贵州茅台",
						code: "mt667788",
						newData: "123.21",
						wave: "34.33"
					}
				]
			}
		},
		onLoad() {


			uni.request({

				url: '/api' +
					'/selfselect/getmarketrank?sort_type=1&sort_key=14&from_mid=1&pn=140&rn=20&group=pclist&type=ab&finClientType=pc',
				method: 'GET',
				success: (res) => {
					// let arr = res.data.split(";")
					// arr.pop()
					// for (let i in arr) {
					// 	arr[i] = arr[i].split("~")
					// 	this.mainStock.push({
					// 		title: arr[i][1],
					// 		price: parseFloat(arr[i][3]),
					// 		UpDown: parseFloat(arr[i][4]),
					// 		percent: parseFloat(arr[i][5])
					// 	})
					// }
					// console.log("指数", this.mainStock)
					console.log("跌幅榜", res)
				}
			})
		},
		methods: {
			// 市场和自选
			sharesType(index) {
				this.current = index;

				this.sinceAnddefault = index

				console.log("index", index)
			},

			// 股票排行榜
			sharesRanking(item) {
				console.log('item', item);

				this.selectState = item.index
			},

			// 查看自选股票详情
			sharesDeatil(value) {
				console.log("股票详情", value)
				uni.$u.route({
					url: 'pages/other/sharesDetail/sharesDetail',
					params: {
						shearTitle: value
					}
				})
			},
			// 用户新股申购
			applyUser(value) {
				console.log("value=", value.stockName)
			}
		},
		onShow(value) {
			let that = this
			uni.getStorage({
				key: 'OptionalKey',
				success: function(res) {
					that.current = 1;
					that.sinceAnddefault = 1
				}
			});
			uni.removeStorage({
				key: 'OptionalKey',
			});
		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

	.moneyCardOne {
		overflow: hidden;
		height: 100rpx;
		background-color: #d81e06;
		display: flex;
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 1000;

		/* #ifdef app-plus*/
		padding-top: 70rpx;
		/* #endif */

	}

	.moneyCardTwo {
		/* border: 1px solid green; */
		display: flex;
		justify-content: center;
		margin: 0 40rpx;
		font-size: 30rpx;
		background-color: #ededed;
	}


	.moneyCardThree {
		/* border: 1px solid tomato; */
		margin: 0 40rpx;
		margin-top: 100rpx;
		padding-top: 20rpx;
	}


	.sinceOne {

		/* margin: 200rpx 40rpx 0 40rpx; */
		/* margin-top: 34px; */
		background-color: white;
		border-radius: 5px;
		z-index: 100;

	}

	.sinceTwo {
		padding: 10rpx 20rpx;
		margin: 30rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		border-radius: 10px;
	}

	/* 申购 */
	.purchase {
		/* border: 1px solid green; */
		/* margin-top: 100rpx; */
		background: white;
		font-size: 25rpx;
		margin: 0 20rpx;
		/* padding: 6rpx 0; */
	}

	.demo-layout {
		/* border: 1px solid tomato; */
		color: red;
	}

	.purchaseData {
		/* border: 1px solid tomato; */
		/* margin-top: 100px; */
		padding-top: 170rpx;
		background-color: white;
	}
</style>
