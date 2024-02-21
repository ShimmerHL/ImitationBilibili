<template>

	<view id="demo1" class="scroll-view-item_H uni-bg-red">
		<view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y demo1_box" @scrolltoupper="upper"
				@scrolltolower="lower" @scroll="scroll" show-scrollbar="false">
				<view class="scroll-view-item uni-bg-red PopularVideos" v-for="value in MackJson" :key="index">
					<image :src="value.Image"  mode="aspectFit" lazy-load=true></image>
					<view class="Information">
						<view class="Information_Title">
							<text>{{value.Title}}</text>
						</view>
						<view class="Information_Label">
							<text v-if="value.Label">{{value.Label}}</text>
						</view>
						<view class="Information_UPName">
							<image src="@/static/icon/UPzhu.png" alt="" />
							<text>{{value.UPName}}</text>
						</view>
						<view class="Information_Other">
							<view class="Information_Other_left">
								<image src="@/static/icon/toumingxiaodianshi.png" alt="" />
								<text>{{value.NumberPlays}}</text>
							</view>
							<view class="Information_Other_right">
								<text>{{value.Date}}</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
	<view id="demo2" class="scroll-view-item_H uni-bg-green">
		<view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y demo2_box" @scrolltoupper="upper"
				@scrolltolower="lower" @scroll="scroll" show-scrollbar="false">
				<Index-Cartoon></Index-Cartoon>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import IndexCartoon from "@/components/Index-Cartoon/Index-Cartoon.vue"
	
	export default {
		data() {
			return {
				MackJson: [{
						Id: 1,
						Image: "/static/images/guimie.jpg",
						Title: "【10月】鬼灭之刃 无限列车篇 01【独家正版】",
						Label: "百万播放",
						UPName: "鬼灭之刃",
						NumberPlays: 2333333,
						Date: "7-15"
					},
					{
						Id: 2,
						Image: "/static/images/duilurenhenbuyouhao.jpg",
						Title: "【4月】恋爱游戏世界对路人角色很不友好 10【独家正版】",
						UPName: "恋爱游戏",
						NumberPlays: 1952,
						Date: "7-05"
					},
					{
						Id: 3,
						Image: "/static/images/shilaimu.jpg",
						Title: "【7月】关于我转生变成史莱姆这档事 第二季 41",
						UPName: "史莱姆",
						NumberPlays: 10049581,
						Date: "7-25"
					},
					{
						Id: 4,
						Image: "/static/images/guanweizhiding.jpg",
						Title: "命运 冠位指定 冠位时间神殿所罗门",
						UPName: "Fate",
						NumberPlays: 30058154,
						Date: "7-01"
					},
					{
						Id: 4,
						Image: "/static/images/abolian.jpg",
						Title: "【4月】测不准的阿波连同学",
						UPName: "阿波连",
						NumberPlays: 545812,
						Date: "7-05"
					},{
						Id: 5,
						Image: "/static/images/guimie.jpg",
						Title: "【10月】鬼灭之刃 无限列车篇 01【独家正版】",
						Label: "百万播放",
						UPName: "鬼灭之刃",
						NumberPlays: 2333333,
						Date: "7-15"
					},
					{
						Id: 6,
						Image: "/static/images/duilurenhenbuyouhao.jpg",
						Title: "【4月】恋爱游戏世界对路人角色很不友好 10【独家正版】",
						UPName: "恋爱游戏",
						NumberPlays: 1952,
						Date: "7-05"
					},
					{
						Id: 7,
						Image: "/static/images/shilaimu.jpg",
						Title: "【7月】关于我转生变成史莱姆这档事 第二季 41",
						Label: "日常人气飙升",
						UPName: "史莱姆",
						NumberPlays: 10049581,
						Date: "7-25"
					},
					{
						Id: 8,
						Image: "/static/images/guanweizhiding.jpg",
						Title: "命运 冠位指定 冠位时间神殿所罗门",
						UPName: "Fate",
						NumberPlays: 30058154,
						Date: "7-01"
					},
					{
						Id: 9,
						Image: "/static/images/abolian.jpg",
						Title: "【4月】测不准的阿波连同学",
						UPName: "阿波连",
						NumberPlays: 545812,
						Date: "7-05"
					}
				]
			}
		},
		components:{
			IndexCartoon
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	scroll-view ::-webkit-scrollbar {
		display: none;
	}

	.scroll-Y {
		// height: 300rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		text-align: center;
		font-size: 36rpx;
	}

	#demo1 {
	}

	#demo2 {
	}

	.scroll-view-item {
		box-sizing: border-box;
		height: 250rpx;
		padding: 30rpx;
		text-align: left;
		font-size: 36rpx;
	}

	.demo1_box {
		height: 1185rpx;

		/* #ifdef H5 */
		height: calc(1150rpx + 110rpx);

		/* #endif */
		.PopularVideos {
			box-sizing: border-box;
			border-top: 1rpx solid $uni-bg-color;

			image {
				display: inline-block;
				width: 300rpx;
				height: 200rpx;
				vertical-align: middle;
				border-radius: 15rpx;
			}

			.Information {
				display: inline-block;
				width: 380rpx;
				margin-left: 15rpx;
				vertical-align: middle;

				.Information_Title {
					height: 80rpx;

					text {
						display: -webkit-box;
						height: 80rpx;
						font-size: 27rpx;
						overflow: hidden;
						word-break: break-all;
						text-overflow: ellipsis;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						text-align: left;
					}

					/* #ifdef MP-WEIXIN*/
					text {
						word-break: break-all;
						white-space: pre-line;
					}

					/* #endif*/
				}

				.Information_Label {
					width: 100%;
					height: 30rpx;
					vertical-align: left;

					text {
						height: 30rpx;
						display: inline-block;
						padding: 0 8rpx;
						font-size: 20rpx;
						color: rgb(220, 223, 33);
						border: 1rpx solid rgb(220, 223, 33);
					}
				}

				.Information_UPName {
					margin-top: 7rpx;

					image {
						width: 30rpx;
						height: 30rpx;
						vertical-align: middle;
					}

					text {
						margin-left: 3rpx;
						font-size: 20rpx;
						color: pink;
						vertical-align: middle;
					}
				}

				.Information_Other {
					position: relative;
					top: -18rpx;
					width: 100%;
					height: 30rpx;

					view {
						display: inline-block;
						width: 200rpx;
						font-size: 20rpx;

						image {
							display: inline-block;
							width: 30rpx;
							height: 30rpx;
							margin-right: 5rpx;
							vertical-align: middle;
						}

						text {
							display: inline-block;
							vertical-align: middle;
							color: pink;
						}
					}
				}

			}
		}
	}

	.demo2_box {
		height: 1185rpx;

		/* #ifdef H5 */
		height: calc(1150rpx + 110rpx);
		/* #endif */
		
		
	}
</style>
