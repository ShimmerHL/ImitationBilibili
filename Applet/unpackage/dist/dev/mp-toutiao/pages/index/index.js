"use strict";
const common_vendor = require("../../common/vendor.js");
const SearchBoxInner = () => "./components/search-box-inner.js";
const HotVideoNow = () => "./components/hot-video-now.js";
const _sfc_main = {
  data() {
    return {
      ChangeStyleClass: ["Popular_Cartoon_ChangeStyle", ""],
      ScrollToLeft: 0,
      ScreenWidth: 0
    };
  },
  components: {
    HotVideoNow,
    SearchBoxInner
  },
  onLoad() {
  },
  created() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        this.ScreenWidth = res.windowWidth;
      }
    });
  },
  methods: {
    /*
    	搜索下放导航栏样式
    	通过动态class修改样式 
    	0为热门  1为追番
    */
    Change_color(ClassName) {
      switch (ClassName) {
        case "Popular_text":
          this.ChangeStyleClass[0] = "Popular_Cartoon_ChangeStyle";
          this.ChangeStyleClass[1] = "";
          this.ScrollToLeft = 0;
          break;
        case "Cartoon_text":
          this.ChangeStyleClass[1] = "Popular_Cartoon_ChangeStyle";
          this.ChangeStyleClass[0] = "";
          this.ScrollToLeft = this.ScreenWidth;
      }
    }
    // onScroll(event : any) {
    // 	// console.log(event.detail.scrollLeft)
    // 	this.ScrollViewLeft(event.detail.scrollLeft, event.detail.scrollWidth)
    // },
  },
  setup() {
  }
};
if (!Array) {
  const _component_SearchBoxInner = common_vendor.resolveComponent("SearchBoxInner");
  const _component_HotVideoNow = common_vendor.resolveComponent("HotVideoNow");
  (_component_SearchBoxInner + _component_HotVideoNow)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($data.ChangeStyleClass[0]),
    b: common_vendor.o(($event) => $options.Change_color("Popular_text")),
    c: common_vendor.n($data.ChangeStyleClass[1]),
    d: common_vendor.o(($event) => $options.Change_color("Cartoon_text")),
    e: $data.ScrollToLeft,
    f: common_vendor.o((...args) => _ctx.onScroll && _ctx.onScroll(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "P:/Project/UniAPP/ImitationBilibili/pages/index/index.vue"]]);
tt.createPage(MiniProgramPage);
