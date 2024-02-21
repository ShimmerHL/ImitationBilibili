<template>
	<view class="Date_Filter_Top">
		<view v-for="value in Week" :key="value.Index">
			<view class="Date_Filter_Top_Box" @click="Date_Filter_OnClick(value.Index)" :class="value.WeekStyleClass">
				<text v-if="value.TheDay">周</text>
				{{value.ChineseNumbers}}
			</view>
		</view>
	</view>

	<view class="Date_Filter_Bottom">
		<view v-for="value in FanDrama" :key="item">
			<view class="FanDramaBox">
				<image :src="value.ImageSrc" mode="aspectFill"></image>
				<text class="Date_Filter_Bottom_text1">{{value.Name}}</text>
				<text class="Date_Filter_Bottom_text2">第{{value.Set}}话</text>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	export default {
		data() {
			return {
				LastIndex: 3, //记录上一次位置 3为默认值与星期无关
				Week: [{
					Number: 0,
					ChineseNumbers: "一",
					TheDay: 0,
					WeekStyleClass: ""
				}, {
					Number: 1,
					ChineseNumbers: "二",
					TheDay: 0,
					WeekStyleClass: ""
				}, {
					Number: 2,
					ChineseNumbers: "三",
					TheDay: 0,
					WeekStyleClass: ""
				}, {
					Number: 3,
					ChineseNumbers: "四",
					TheDay: 0,
					WeekStyleClass: ""
				}, {
					Number: 4,
					ChineseNumbers: "五",
					TheDay: 0,
					WeekStyleClass: ""
				}, {
					Number: 5,
					ChineseNumbers: "六",
					TheDay: 0,
					WeekStyleClass: ""
				}, {
					Number: 6,
					ChineseNumbers: "日",
					TheDay: 0,
					WeekStyleClass: ""
				}],
				//原数据
				FanDramaJson: [
					[{
							UniqueID: "23331",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "魔法使黎明期",
							Set: 9
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						}
					],
					[{
						UniqueID: "23333",
						ImageSrc: "/static/images/dongfangshaonian.jpg",
						Name: "东方少年 第二季",
						Set: 2
					}],
					[{
						UniqueID: "23334",
						ImageSrc: "/static/images/jingdongmaomao.jpg",
						Name: "新 东京猫猫",
						Set: 2
					}],
					[{
							UniqueID: "23331",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "魔法使黎明期",
							Set: 9
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						}
					],
					[{
							UniqueID: "23331",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "魔法使黎明期",
							Set: 9
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						},
						{
							UniqueID: "23331",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "魔法使黎明期",
							Set: 9
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						},
						{
							UniqueID: "23331",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "魔法使黎明期",
							Set: 9
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						},
						{
							UniqueID: "23331",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "魔法使黎明期",
							Set: 9
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						}
					],
					[{
							UniqueID: "23331",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "魔法使黎明期",
							Set: 9
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						},
						{
							UniqueID: "23331",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "魔法使黎明期",
							Set: 9
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						},
						{
							UniqueID: "23331",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "魔法使黎明期",
							Set: 9
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						}
					],
					[{
							UniqueID: "23331",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "魔法使黎明期",
							Set: 9
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						},
						{
							UniqueID: "23331",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "魔法使黎明期",
							Set: 9
						},
						{
							UniqueID: "23332",
							ImageSrc: "/static/images/mofashilimingqi.jpg",
							Name: "歌愈少女",
							Set: 6
						}
					]
				],
				//根据点击的星期显示的数据
				FanDrama: []
			}
		},
		methods: {
			Date_Filter_OnClick(Index: number) { //点击后添加或删除class和更改显示的内容  长度0-6 
				this.Week[this.LastIndex].WeekStyleClass = "" //去掉上一次的class
				this.LastIndex = Index //上一次的值改变为本次
				this.Week[Index].WeekStyleClass = "WeekStyle" //给本次的添加class

				this.FanDrama = this.FanDramaJson[Index]

			}
		},
		mounted() {
			let TheDay: number = new Date().getDay()  //获取当天为周几
			let WeekArr: [] = [] //暂时存储Week数组
			let FanDramaArr: [] = [] //暂时存储FanDrama数组
			
			if(TheDay == 0) TheDay = 7;
			
			this.Week[TheDay - 1].TheDay = 1 //给当天添加一个周字
			this.Week[TheDay - 1].WeekStyleClass = "WeekStyle" //给当天的盒子添加class改变样式
			this.LastTheDay = TheDay //LastTheDay重新赋值为星期当天

			if (TheDay <= 3 && TheDay > 0) { //根据当前星期自动从左到右排序到中间
				WeekArr = [...this.Week.splice(TheDay + 3, 7), ...this.Week]
				FanDramaArr = [...this.FanDramaJson.splice(TheDay + 3, 7), ...this.FanDramaJson]
			} else if (TheDay >= 5 && TheDay <= 7) {
				WeekArr = [...this.Week.splice(TheDay - 4, 7), ...this.Week]
				FanDramaArr = [...this.FanDramaJson.splice(TheDay - 4, 7), ...this.FanDramaJson]
			} else {
				WeekArr = [...this.Week.splice(TheDay + 4), ...this.Week]
				FanDramaArr = [...this.FanDramaJson.splice(TheDay + 4), ...this.FanDramaJson]
			}
			
			for (let i = 0, Arr = WeekArr.length; i < Arr; i++) {
				WeekArr[i].Index = i // 添加一个index解决微信和h5使用v-for获取的下标不一致问题
			}
			 
			this.Week = WeekArr
			this.FanDramaJson = FanDramaArr

			this.FanDrama = FanDramaArr[3] //给FanDrama赋值用于渲染当前天的内容 由于已经排序好了直接写第四组数据就行了
		}
	}
</script>

<style lang="scss">
	@import "/uni.scss";
	.Date_Filter_Top {
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		width: 100%;
		font-size: 25rpx;

		.Date_Filter_Top_Box {
			box-sizing: border-box;
			width: 85rpx;
			height: 50rpx;
			line-height: 50rpx;
			margin: 10rpx 10rpx;
		}

		.WeekStyle {
			background-color: #ff8585;
			color: #fff;
			border-radius: 30rpx;
		}
	}

	.Date_Filter_Bottom {
		display: flex;
		flex-direction: row; 
		flex-wrap: wrap;
		box-sizing: border-box;
		width: 100%;
		padding: 0 0 30rpx 30rpx;
		border-bottom: 1rpx solid $uni-br-color;

		.FanDramaBox {
			width: 150rpx;
			margin: 20rpx 30rpx 0 0;

			image {
				width: 150rpx;
				height: 150rpx;
			}

			text {
				display: block;
				text-align: left;
			}

			.Date_Filter_Bottom_text1 {
				display: -webkit-box;
				width: 150rpx;
				font-size: 30rpx;
				overflow: hidden;
				word-break: break-all;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}

			/* #ifdef MP-WEIXIN*/
			.Date_Filter_Bottom_text1 {
				word-break: break-all;
				white-space: pre-line;
			}

			.Date_Filter_Bottom_text2 {
				margin-top: 5rpx;
				font-size: 20rpx;
				color: #ff8585;
			}
		}
	}
</style>
