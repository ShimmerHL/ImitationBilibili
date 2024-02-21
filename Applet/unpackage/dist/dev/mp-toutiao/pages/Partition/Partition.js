"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      PartitionData: [{
        name: "番剧",
        icon: "/static/icon/subarea/fanju.png",
        url: ""
      }, {
        name: "国创",
        icon: "/static/icon/subarea/guochuang.png",
        url: ""
      }, {
        name: "纪录片",
        icon: "/static/icon/subarea/jilupian.png",
        url: ""
      }, {
        name: "动画",
        icon: "/static/icon/subarea/donghua.png",
        url: ""
      }, {
        name: "音乐",
        icon: "/static/icon/subarea/yinyue.png",
        url: ""
      }, {
        name: "舞蹈",
        icon: "/static/icon/subarea/wudao.png",
        url: ""
      }, {
        name: "游戏",
        icon: "/static/icon/subarea/youxi.png",
        url: ""
      }, {
        name: "知识",
        icon: "/static/icon/subarea/zhishi.png",
        url: ""
      }, {
        name: "科技",
        icon: "/static/icon/subarea/keji.png",
        url: ""
      }, {
        name: "运动",
        icon: "/static/icon/subarea/yundong.png",
        url: ""
      }, {
        name: "汽车",
        icon: "/static/icon/subarea/qiche.png",
        url: ""
      }, {
        name: "生活",
        icon: "/static/icon/subarea/shenghuo.png",
        url: ""
      }, {
        name: "美食",
        icon: "/static/icon/subarea/meishi.png",
        url: ""
      }, {
        name: "动物圈",
        icon: "/static/icon/subarea/dongwuquan.png",
        url: ""
      }, {
        name: "鬼畜",
        icon: "/static/icon/subarea/guichu.png",
        url: ""
      }, {
        name: "时尚",
        icon: "/static/icon/subarea/shishang.png",
        url: ""
      }, {
        name: "娱乐",
        icon: "/static/icon/subarea/yule.png",
        url: ""
      }, {
        name: "影视",
        icon: "/static/icon/subarea/yingshi.png",
        url: ""
      }, {
        name: "电影",
        icon: "/static/icon/subarea/dianying.png",
        url: ""
      }, {
        name: "电视剧",
        icon: "/static/icon/subarea/dianshiju.png",
        url: ""
      }, {
        name: "游戏赛事",
        icon: "/static/icon/subarea/youxisaishi.png",
        url: ""
      }]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.PartitionData, (value, k0, i0) => {
      return {
        a: value.icon,
        b: common_vendor.t(value.name)
      };
    }),
    b: _ctx.valueKey
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "P:/Project/UniAPP/ImitationBilibili/pages/Partition/Partition.vue"]]);
tt.createPage(MiniProgramPage);
