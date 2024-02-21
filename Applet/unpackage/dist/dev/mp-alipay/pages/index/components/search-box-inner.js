"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.o(_ctx.search),
    b: common_vendor.p({
      radius: "30",
      placeholder: "搜索",
      clearButton: "auto",
      cancelButton: "none",
      readonly: true
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e6c4f512"], ["__file", "P:/Project/UniAPP/ImitationBilibili/pages/index/components/search-box-inner.vue"]]);
my.createComponent(Component);
