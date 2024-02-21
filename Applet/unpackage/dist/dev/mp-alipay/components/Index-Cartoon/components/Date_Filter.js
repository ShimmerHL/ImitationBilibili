"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      LastIndex: 3,
      //记录上一次位置 3为默认值与星期无关
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
        [
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
        [
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
        [
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
        [
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
        [
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
        ]
      ],
      //根据点击的星期显示的数据
      FanDrama: []
    };
  },
  methods: {
    Date_Filter_OnClick(Index) {
      this.Week[this.LastIndex].WeekStyleClass = "";
      this.LastIndex = Index;
      this.Week[Index].WeekStyleClass = "WeekStyle";
      this.FanDrama = this.FanDramaJson[Index];
    }
  },
  mounted() {
    let TheDay = (/* @__PURE__ */ new Date()).getDay();
    let WeekArr = [];
    let FanDramaArr = [];
    if (TheDay == 0)
      TheDay = 7;
    this.Week[TheDay - 1].TheDay = 1;
    this.Week[TheDay - 1].WeekStyleClass = "WeekStyle";
    this.LastTheDay = TheDay;
    if (TheDay <= 3 && TheDay > 0) {
      WeekArr = [...this.Week.splice(TheDay + 3, 7), ...this.Week];
      FanDramaArr = [...this.FanDramaJson.splice(TheDay + 3, 7), ...this.FanDramaJson];
    } else if (TheDay >= 5 && TheDay <= 7) {
      WeekArr = [...this.Week.splice(TheDay - 4, 7), ...this.Week];
      FanDramaArr = [...this.FanDramaJson.splice(TheDay - 4, 7), ...this.FanDramaJson];
    } else {
      WeekArr = [...this.Week.splice(TheDay + 4), ...this.Week];
      FanDramaArr = [...this.FanDramaJson.splice(TheDay + 4), ...this.FanDramaJson];
    }
    for (let i = 0, Arr = WeekArr.length; i < Arr; i++) {
      WeekArr[i].Index = i;
    }
    this.Week = WeekArr;
    this.FanDramaJson = FanDramaArr;
    this.FanDrama = FanDramaArr[3];
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.Week, (value, k0, i0) => {
      return common_vendor.e({
        a: value.TheDay
      }, value.TheDay ? {} : {}, {
        b: common_vendor.t(value.ChineseNumbers),
        c: common_vendor.o(($event) => $options.Date_Filter_OnClick(value.Index)),
        d: common_vendor.n(value.WeekStyleClass),
        e: value.Index
      });
    }),
    b: common_vendor.f($data.FanDrama, (value, k0, i0) => {
      return {
        a: value.ImageSrc,
        b: common_vendor.t(value.Name),
        c: common_vendor.t(value.Set)
      };
    }),
    c: _ctx.item
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "P:/Project/UniAPP/ImitationBilibili/components/Index-Cartoon/components/Date_Filter.vue"]]);
my.createComponent(Component);
