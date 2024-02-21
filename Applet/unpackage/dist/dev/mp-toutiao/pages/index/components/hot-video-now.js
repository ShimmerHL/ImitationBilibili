"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const IndexCartoon = () => "../../../components/Index-Cartoon/Index-Cartoon.js";
const _sfc_main = {
  data() {
    return {
      MackJson: [
        {
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
        },
        {
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
    };
  },
  components: {
    IndexCartoon
  },
  methods: {}
};
if (!Array) {
  const _easycom_Index_Cartoon2 = common_vendor.resolveComponent("Index-Cartoon");
  _easycom_Index_Cartoon2();
}
const _easycom_Index_Cartoon = () => "../../../components/Index-Cartoon/Index-Cartoon.js";
if (!Math) {
  _easycom_Index_Cartoon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.MackJson, (value, k0, i0) => {
      return common_vendor.e({
        a: value.Image,
        b: common_vendor.t(value.Title),
        c: value.Label
      }, value.Label ? {
        d: common_vendor.t(value.Label)
      } : {}, {
        e: common_vendor.t(value.UPName),
        f: common_vendor.t(value.NumberPlays),
        g: common_vendor.t(value.Date)
      });
    }),
    b: common_assets._imports_0,
    c: common_assets._imports_1,
    d: _ctx.index,
    e: _ctx.scrollTop,
    f: common_vendor.o((...args) => _ctx.upper && _ctx.upper(...args)),
    g: common_vendor.o((...args) => _ctx.lower && _ctx.lower(...args)),
    h: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
    i: _ctx.scrollTop,
    j: common_vendor.o((...args) => _ctx.upper && _ctx.upper(...args)),
    k: common_vendor.o((...args) => _ctx.lower && _ctx.lower(...args)),
    l: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "P:/Project/UniAPP/ImitationBilibili/pages/index/components/hot-video-now.vue"]]);
tt.createComponent(Component);
