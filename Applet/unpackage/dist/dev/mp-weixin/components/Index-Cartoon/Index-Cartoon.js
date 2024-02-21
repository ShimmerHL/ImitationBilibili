"use strict";
const common_vendor = require("../../common/vendor.js");
const DateFilter = () => "./components/Date_Filter.js";
const PlaneIndexer = () => "./components/Plane_Indexer.js";
const DramaRecommendation = () => "./components/Drama_recommendation.js";
const ChinaCreationRecommendation = () => "./components/China_creation_recommendation.js";
const _sfc_main = {
  name: "Index-Popular",
  data() {
    return {};
  },
  components: {
    DateFilter,
    PlaneIndexer,
    DramaRecommendation,
    ChinaCreationRecommendation
  }
};
if (!Array) {
  const _component_DateFilter = common_vendor.resolveComponent("DateFilter");
  const _component_PlaneIndexer = common_vendor.resolveComponent("PlaneIndexer");
  const _component_DramaRecommendation = common_vendor.resolveComponent("DramaRecommendation");
  const _component_ChinaCreationRecommendation = common_vendor.resolveComponent("ChinaCreationRecommendation");
  (_component_DateFilter + _component_PlaneIndexer + _component_DramaRecommendation + _component_ChinaCreationRecommendation)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "P:/Project/UniAPP/ImitationBilibili/components/Index-Cartoon/Index-Cartoon.vue"]]);
wx.createComponent(Component);
