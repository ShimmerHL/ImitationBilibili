<template>
	<view>
		<view class="recommended-list-top">
			{{RecommendedName}}推荐
		</view>
		<view class="recommended-list-context">
			view
		</view>
	</view>
</template>

<script setup>
	const state = reactive({
		RecommendedId:"",
		RecommendedJson:[{
			Id:1,
			Name:"黑之召唤士",
			ImageUrl:"/static/images/heizhizhaohuanshi.jpg",
			Label:"会员专享",
			NumberOfPlays:"291.9万",
			Speech:"170"
		},{
			Id:1,
			Name:"犬夜叉剧场版 穿越时空的思念",
			ImageUrl:"/static/images/quanyecha.jpg",
			Label:"会员专享",
			NumberOfPlays:"1300.2万",
			Speech:"1"
		},{
			Id:1,
			Name:"JOJO的奇妙冒险 石之海",
			ImageUrl:"/static/images/jojodeqimiaomaoxian.jpg",
			Label:"独家",
			NumberOfPlays:"2130.9万",
			Speech:"161"
		}]
	})
	
	defineProps({
		RecommendedName:String
	})
	
	return{
		...toRefs(state)
	}
</script>

<style lang="scss">

</style>