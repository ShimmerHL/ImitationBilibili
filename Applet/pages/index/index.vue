<template>
	<view id="Index_Box">
		<view class="Index_top">
			<SearchBoxInner></SearchBoxInner>
			<view class="Popular_Cartoon">
				<view class="Popular">
					<text class="Index_top_text" :class="ChangeStyleClass[0]"
						@click="Change_color('Popular_text')">热门</text>
				</view>
				<view class="Cartoon">
					<text class="Index_top_text" :class="ChangeStyleClass[1]"
						@click="Change_color('Cartoon_text')">追番</text>
				</view>
			</view>
		</view>


		<scroll-view class="scroll-view_H" :scroll-left="ScrollToLeft" scroll-x="true" @scroll="onScroll">
			<HotVideoNow></HotVideoNow>
		</scroll-view>

	</view>
</template>

<script lang="ts">
	import SearchBoxInner from "./components/search-box-inner.vue"
	import HotVideoNow from "./components/hot-video-now.vue"


	export default {
		data() {
			return {
				ChangeStyleClass: ["Popular_Cartoon_ChangeStyle", ""],
				ScrollToLeft: 0,
				ScreenWidth: 0
			}
		},
		components: {
			HotVideoNow,
			SearchBoxInner
		},
		onLoad() {
		
		},
		created() {
			uni.getSystemInfo({
			      success: (res) => {
					this.ScreenWidth = res.windowWidth; // 屏幕宽度，单位为px
			      },
			    });
		},
		methods: {
			/*
				搜索下放导航栏样式
				通过动态class修改样式 
				0为热门  1为追番
			*/

			Change_color(ClassName : String) {

				switch (ClassName) {
					case "Popular_text":
						this.ChangeStyleClass[0] = "Popular_Cartoon_ChangeStyle"
						this.ChangeStyleClass[1] = ""
						this.ScrollToLeft = 0
						break;
					case "Cartoon_text":
						this.ChangeStyleClass[1] = "Popular_Cartoon_ChangeStyle"
						this.ChangeStyleClass[0] = ""
						this.ScrollToLeft = this.ScreenWidth
				}

			},	
			// onScroll(event : any) {
			// 	// console.log(event.detail.scrollLeft)
			// 	this.ScrollViewLeft(event.detail.scrollLeft, event.detail.scrollWidth)
			// },
		},
		setup() {
	// 		let onScrollsetTimeout = null

	// 		function ScrollViewLeft(ScrollLeft : number, scrollWidth : number) {
 
	// 			// if(ScrollLeft == 0) return
				
	// 			onScrollsetTimeout = setTimeout(() => {
	// 					clearTimeout(onScrollsetTimeout)
	// 					console.log(ScrollLeft, this.ScrollToLeft)
	// 				if (ScrollLeft <= 200 && ScrollLeft > 0) {
	// 					this.$nextTick(function () {
	// 						this.ScrollToLeft = scrollWidth / 2
	// 					});
	// 				} else if ( ScrollLeft > 201){
	// 					this.$nextTick(function () {
	// 						this.ScrollToLeft = 0
	// 					});
	// 				}
	// 			}, 500)
	// 		}



	// 		return {
	// 			ScrollViewLeft
	// 		}
		}
	}
</script>

<style lang="scss">
	@import "/uni.scss";
	#Index_Box {
		.Index_top {
			border-bottom: 1rpx solid $uni-br-color;
		}

		.Index_top .Popular_Cartoon {}

		.Index_top .Popular_Cartoon view {
			display: inline-block;
			width: 50%;
			height: 70rpx;
			text-align: center;
			font-size: 35rpx;

			.Index_top_text {
				display: inline-block;
				width: 70rpx;
				height: 70rpx;
			}
		}

		.Popular_Cartoon_ChangeStyle {
			color: red;
			border-bottom: 1rpx solid red;
		}

		.scroll-view_H {
			white-space: nowrap;
			width: 100%;
			animation: 1s linear;
		}

	}
</style>