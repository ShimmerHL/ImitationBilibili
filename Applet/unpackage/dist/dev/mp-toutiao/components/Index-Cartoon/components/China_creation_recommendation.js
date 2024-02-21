"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      refresh_img: ""
    };
  },
  methods: {
    refresh_click() {
      if (this.$data.refresh_img == "") {
        this.$data.refresh_img = "refresh_img";
      } else {
        this.$data.refresh_img = "";
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({}, {}, {}, {
    a: common_vendor.n($data.refresh_img),
    b: common_assets._imports_0$1,
    c: common_vendor.o((...args) => $options.refresh_click && $options.refresh_click(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "P:/Project/UniAPP/ImitationBilibili/components/Index-Cartoon/components/China_creation_recommendation.vue"]]);
tt.createComponent(Component);
