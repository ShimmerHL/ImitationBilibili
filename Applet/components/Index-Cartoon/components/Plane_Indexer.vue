<template>
	<view class="Plane_Indexer_top">
		<view class="Plane_Indexer_ViewLeft">索引</view>
		<view class="Plane_Indexer_ViewRight">
			<text>查看更多</text>
			<image src="/static/icon/wukuangyoujiantou.png" />
		</view>
	</view>
	<view class="Plane_Indexer_Bottom">
		<view>搞笑</view>
		<view>热血</view>
		<view>奇幻</view>
		<view>励志</view>
		<view>萌系</view>
		<view>运动</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "/uni.scss";
	.Plane_Indexer_top {
		width: 100%;
		height: 75rpx;
		margin-top: 30rpx;
		position: relative;

		view {
			display: inline-block;
			font-size: 30rpx;
			vertical-align: middle;

			text {
				vertical-align: middle;
			}

			image {
				width: 33rpx;
				height: 33rpx;
				vertical-align: middle;
			}
		}

		.Plane_Indexer_ViewLeft {
			position: absolute;
			left: 20rpx;
		}

		.Plane_Indexer_ViewRight {
			position: absolute;
			right: 20rpx;
			color: #cfaaaa;
		}

	}

	.Plane_Indexer_Bottom{
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		height: 200rpx;
		padding: 0 20rpx;
		border-bottom: 1rpx solid $uni-br-color;
		
		view{
			width: 220rpx;
			height: 80rpx;
			line-height: 80rpx;
			font-size: 27rpx;
			background-color: #f7f4ea;
			border-radius: 5rpx;
		}
	}
</style>
