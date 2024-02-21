<template>
	<view>
		<view class="Drama_Rd_Top">
			<text>国创推荐</text>
		</view>
		<view class="Drama_Rd_Content">
			<view class="Drama_Rd_Content_List">
				<view class="DR_Content_img">
					<image src="../../../static/images/guanweizhiding.jpg" mode=" aspectFit"/>
					<view class="DR_Content_img_Number">
					 万追番
					</view>
				</view>
				<view class="DR_Content_text">
					<view v-if="1">更新至xxx话</view>
					<view v-else>
						全xxx话
					</view>
				</view>
			</view>
			<view class="Drama_Rd_Content_List">
				<view class="DR_Content_img">
					<image src="../../../static/images/guanweizhiding.jpg" mode=" aspectFit"/>
					<view class="DR_Content_img_Number">
					 万追番
					</view>
				</view>
				<view class="DR_Content_text">
					<view v-if="1">更新至xxx话</view>
					<view v-else>
						全xxx话
					</view>
				</view>
			</view><view class="Drama_Rd_Content_List">
				<view class="DR_Content_img">
					<image src="../../../static/images/guanweizhiding.jpg" mode=" aspectFit"/>
					<view class="DR_Content_img_Number">
					 万追番
					</view>
				</view>
				<view class="DR_Content_text">
					<view v-if="1">更新至xxx话</view>
					<view v-else>
						全xxx话
					</view>
				</view>
			</view>
		</view>
		<view class="Drama_Rd_refresh" @click="refresh_click">
			<image :class="refresh_img" src="@/static/icon/shuaxin.png" ></image>
			<text>翻一翻</text>
		</view>
	</view>
</template> 

<script>
	export default {
		data() {
			return {
				refresh_img: ""
			}
		},
		methods: {
			refresh_click(){ //控制刷新按钮旋转
				if(this.$data.refresh_img == ""){
					this.$data.refresh_img = "refresh_img"
				}else{
					this.$data.refresh_img = ""
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "/uni.scss";
	$Box-LRMargin:20rpx;
	.Drama_Rd_Top{
		width: 100%;
		height: 60rpx;
		margin-top: $Box-LRMargin;
		position: relative;
		font-size: 27rpx;
		
		text{
			position: absolute;
			left: $Box-LRMargin;
		}
		
	}
	.Drama_Rd_Content{
		display: flex;
		justify-content: space-between;
		width: 95%;
		padding: 0 $Box-LRMargin;
		
		.Drama_Rd_Content_List{
			width: 220rpx;
			font-size: 23rpx;
			text-align: left;
			
			image{
				width: 100%;
				height: 250rpx;
				margin-bottom: 10rpx;
			}
			
			.DR_Content_text{
				font-size: 21rpx;
				color: #d0d0d0;
				margin-top: 10rpx;
			}
			
		}
	}
	.Drama_Rd_refresh{
		width: 100%;
		padding: 20rpx 0;
		font-size: 25rpx;
		border-bottom: 1rpx solid $uni-br-color;
		
		image{
			width: 40rpx;
			height: 40rpx;
			vertical-align: middle;
		}
		text{
			margin-left: 5rpx;
			vertical-align: middle;
			color: red;
		}
		
		
		
		@keyframes Image_Refresh {
			0%{
				transform: rotate(0deg);
			}
			
			100%{
				transform: rotate(360deg);
			}
		}
		
		.refresh_img{
			animation: Image_Refresh linear 1s infinite;
		}
	}
</style>
