<template>
	<view id="MyHomePage">
		<view class="login">
			<view>
				<image src="/static/icon/subarea/fanju.png" mode=" aspectFill"></image>
			</view>
			<button>B站登录</button>
		</view>
		<view class="History Choosable">
			<view class="History_Record">历史记录</view>
			<view class="History_more">
				<text>查看更多</text>
				<image src="/static/icon/wukuangyoujiantou.png" />
			</view>
		</view>
		<view class="Feedback Choosable">
			<view>意见反馈</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	@import "/uni.scss";

	#MyHomePage {
		width: 100%;
		height: 100%;

		.login {
			width: 100%;
			height: 280rpx;
			position: relative;
			border-bottom: 1rpx solid $uni-br-color;

			view {
				width: 130rpx;
				height: 130rpx;
				background: #cfcfcf;
				border-radius: 50%;
				text-align: center;
				position: absolute;
				left: 50%;
				top: 35%;
				transform: translate(-50%, -50%);


				image {
					width: 100rpx;
					height: 100rpx;
					position: absolute;
					left: 50%;
					top: 45%;
					transform: translate(-50%, -50%);
				}
			}

			button {
				border: 0;
				width: 150rpx;
				height: 50rpx;
				line-height: 50rpx;
				background: #ff557f;
				color: #fff;
				font-size: 25rpx;
				position: absolute;
				left: 50%;
				top: 70%;
				transform: translate(-50%, -50%);
			}
		}

		.History {
			position: relative;
			width: 100%;

			.History_Record {
				position: absolute;
			}

			.History_more {
				position: absolute;
				right: 30rpx;
				
				text{
					vertical-align: middle;
				}
				
				image{
					width: 30rpx;
					height: 30rpx;
					vertical-align: middle;
				}
			}
		}

		.Choosable {
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			padding-left: 20rpx;
			border-bottom: 1rpx solid $uni-br-color;
		}

	}
</style>