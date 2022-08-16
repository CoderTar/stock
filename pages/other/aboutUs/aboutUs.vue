<template>
	<view class="aboutUs">
		<view class="">
			<image src="../../../static/about/about1.jpg" mode=""></image>
		</view>

		<view>
			<image style="height: 400px;" src="../../../static/about/about2.jpg" mode=""></image>
		</view>
		<view class="partOneTitle">
			<h2>公司简介</h2>
			<view style="font-size: 23rpx;">
				<text>{{company_title}}</text>
				<text>投资投资基金有限公司旗下</text>
				<text>{{company_title}}</text>
				<text>投资股权基金管理有限公同</text>
			</view>
		</view>

		<view class="partOneText">
			深证市{{company_title}}投资管理有限公司旗下{{company_title}}投资投资平台成立于2002年8月，注册资本5000万元人民币公司位于{{company_address}},公司通过与大型证券公司和信托基金合作，致力于成为全国最大的股票配资服务平台。
			{{company_title}}投资平台，是一款新型的便捷、安全的线上股票配资服务平台，是广大股民最佳投资利器。我们拥有完善的产品、风控、财务以及客服服务体系，拥有一批技术精湛、诚信进取的管理和技术团队，多年躬耕于互联网、金融、证券行业。
			公司依托多年线下金融领域业务经验及资源。在互联网+金融的浪潮下异军突起赢得了良好的用户口碑，成为互联网股票配资的领导品牌。
		</view>

		<view class="partTwoTitle">
			<h2>企业保证</h2>
		</view>
		<view class="partOneText">
			以银行监管资金，控制风向，并设置止盈线和止损线，让客户及早预知风险，严格按照止盈线和止损线为客户做好风险管理。
			有强大的金融集团北京，资金量庞大，资金来源安全、合法、稳定。
		</view>


		<view class="partThreeTitle">
			<h2>团队管理</h2>
		</view>
		<view class="partOneText">
			公司管理团队主要来自于证券、银行、T等行业精英，具备丰富的证券、金融及私募领域从业经验，所管理的资产规模庞大。
		</view>
		<view class="partFour">
			<h2>经营管理</h2>
		</view>
		<view class="partOneText">
			把客户的利益放在首位，对客户的每一笔投资，都进行专业、严格的标准化风控管理。“专户专款专用”对客户交易保证金进行托管运作。
		</view>

		<view class="partFive">
			<h2>企业使命</h2>
		</view>
		<view class="partOneText">
			安全金融、卓越体验，满足投资者的金融理财需求，帮助客户资产财富快速增长！
		</view>

		<view class="partSix">
			<h2>核心价值</h2>
		</view>
		<view class="partOneText" style="display: flex;flex-direction: column;font-size: 24rpx;">
			<text style="color: red;">诚信：</text>
			<text>坚守诚信原则，重视职业操守，加强互信关系，树立领导品牌。</text>

			<text style="color: red;">专业：</text>
			<text>整合有效资源，借鉴成功案例，提高专业水平，打造精英团队。</text>

			<text style="color: red;">热情：</text>
			<text>保持工作热情，积极面对挑战，敢于攀登高峰，追求卓越品质。</text>
		</view>


		<view class="partSeven">
			<h2>公司愿景</h2>
		</view>
		<view class="partOneText">
			公司秉承“诚信创造财富”的理念，竭诚为广大股民朋友提供稳定、可靠的线上配资平台，为客户提供互联网金融垂直细分领域的融资解决方案。公司拥有完善的人才激励机制，雄厚的资金储备和技术人才储备。面向未来，以安全金融、卓越体验为使命的{{company_title}}投资必将助力中国金融企业走向更辉煌的明天
		</view>
		<view>
			<image style="height: 13 0px;" src="../../../static/about/down.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import {
		basisConfig
	} from '@/network/apiFunction.js'
	export default {
		data() {
			return {
				company_title: '',
				company_address: ""
			}
		},
		onLoad() {
			basisConfig().then(res => {
				if (res.code == 1) {
					this.company_title = res.data.company_title
					this.company_address = res.data.company_address
				}
			})
		}
	}
</script>

<style>
	.aboutUs {
		border-radius: 15px;
		margin: 20rpx 40rpx;
		font-weight: 600;
	}



	.partOneTitle {
		background-image: url('@/static/about/1.jpg');
		height: 150px;
		overflow: hidden;
		background-size: 100% 170%;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.partOneText {
		/* border: 1px solid tomato; */
		font-size: 25rpx;
		padding: 20rpx 0;
	}


	.partTwoTitle {
		background-image: url('@/static/about/3.jpg');
		height: 150px;
		overflow: hidden;
		background-size: 100% 170%;

		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.partThreeTitle {
		background-image: url('@/static/about/5.jpg');
		height: 150px;
		overflow: hidden;
		background-size: 100% 170%;


		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.partFour {
		background-image: url('@/static/about/6.jpg');
		height: 150px;
		overflow: hidden;
		background-size: 100% 170%;

		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}


	.partFive {
		background-image: url('@/static/about/7.jpg');
		height: 150px;
		overflow: hidden;
		background-size: 100% 170%;

		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.partSix {
		background-image: url('@/static/about/8.jpg');
		height: 150px;
		overflow: hidden;
		background-size: 100% 170%;

		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.partSeven {
		background-image: url('@/static/about/9.jpg');
		height: 150px;
		overflow: hidden;
		background-size: 100% 170%;

		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
