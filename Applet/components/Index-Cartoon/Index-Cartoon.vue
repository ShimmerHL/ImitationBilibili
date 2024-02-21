<template>
	<DateFilter></DateFilter>
	<PlaneIndexer></PlaneIndexer>
	<DramaRecommendation></DramaRecommendation>
	<ChinaCreationRecommendation></ChinaCreationRecommendation>
</template>

<script>
	import DateFilter from "./components/Date_Filter.vue"
	import PlaneIndexer from "./components/Plane_Indexer.vue"
	import DramaRecommendation from "./components/Drama_recommendation.vue"
	import ChinaCreationRecommendation from "./components/China_creation_recommendation.vue"
	
	export default {
		name:"Index-Popular",
		data() {
			return {
				
			};
		},
		components:{
			DateFilter,PlaneIndexer,DramaRecommendation,ChinaCreationRecommendation
		}
	}
</script>

<style lang="scss">
</style>