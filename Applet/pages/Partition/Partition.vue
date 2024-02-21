<template>
	<view id="PartitionHome">
		<view v-for="value in PartitionData" :key = "valueKey">
			<image :src="value.icon" mode=" "></image>
			<text>{{value.name}}</text>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				PartitionData: [{
					name: "番剧",
					icon: "/static/icon/subarea/fanju.png",
					url: ""
				}, {
					name: "国创",
					icon: "/static/icon/subarea/guochuang.png",
					url: ""
				}, {
					name: "纪录片",
					icon: "/static/icon/subarea/jilupian.png",
					url: ""
				}, {
					name: "动画",
					icon: "/static/icon/subarea/donghua.png",
					url: ""
				}, {
					name: "音乐",
					icon: "/static/icon/subarea/yinyue.png",
					url: ""
				}, {
					name: "舞蹈",
					icon: "/static/icon/subarea/wudao.png",
					url: ""
				}, {
					name: "游戏",
					icon: "/static/icon/subarea/youxi.png",
					url: ""
				}, {
					name: "知识",
					icon: "/static/icon/subarea/zhishi.png",
					url: ""
				}, {
					name: "科技",
					icon: "/static/icon/subarea/keji.png",
					url: ""
				}, {
					name: "运动",
					icon: "/static/icon/subarea/yundong.png",
					url: ""
				}, {
					name: "汽车",
					icon: "/static/icon/subarea/qiche.png",
					url: ""
				}, {
					name: "生活",
					icon: "/static/icon/subarea/shenghuo.png",
					url: ""
				}, {
					name: "美食",
					icon: "/static/icon/subarea/meishi.png",
					url: ""
				}, {
					name: "动物圈",
					icon: "/static/icon/subarea/dongwuquan.png",
					url: ""
				}, {
					name: "鬼畜",
					icon: "/static/icon/subarea/guichu.png",
					url: ""
				}, {
					name: "时尚",
					icon: "/static/icon/subarea/shishang.png",
					url: ""
				}, {
					name: "娱乐",
					icon: "/static/icon/subarea/yule.png",
					url: ""
				}, {
					name: "影视",
					icon: "/static/icon/subarea/yingshi.png",
					url: ""
				}, {
					name: "电影",
					icon: "/static/icon/subarea/dianying.png",
					url: ""
				}, {
					name: "电视剧",
					icon: "/static/icon/subarea/dianshiju.png",
					url: ""
				}, {
					name: "游戏赛事",
					icon: "/static/icon/subarea/youxisaishi.png",
					url: ""
				}]
			};
		}
	}
</script>

<style lang="scss">
	#PartitionHome {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;

		view {
			width: 25%;
			text-align: center;
			margin: 35rpx 0;

			image {
				width: 80rpx;
				height: 80rpx;
			}
			
			text{
				display: block;
			}
		}
	}
</style>