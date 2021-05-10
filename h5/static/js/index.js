var page = new Vue({
  el: "#page",
  created: function () {},
  data: {
    hl: false,
    cur: 0,
    num1: 0,
    num2: 0,
    zxtype: 0,
    name: "",
    tel: "",
    list: [
      { title: "首页", href: "/index/mi2" },
      { title: "关于我们", href: "/index/mi2?pos=20.5" },
      { title: "挽爱服务", href: "/index/mi2?pos=31.5" },
      { title: "专家导师", href: "/index/mi2?pos=41" },
      { title: "百合情感问答", href: "/index/mi2?pos=55.5" },
      { title: "定制挽爱方案", href: "/pay" },
    ],
    list2: [
      "王女士向情感导师李老师进行了挽爱咨询",
      "李先生向情感导师梁老师进行了挽爱咨询",
      "王小姐向情感导师吴老师进行了挽爱咨询",
      "白先生向情感导师李老师进行了挽爱咨询",
      "张女士向情感导师赵老师进行了挽爱咨询",
      "赵女士向情感导师吴老师进行了挽爱咨询",
      "高先生向情感导师金老师进行了挽爱咨询",
      "邓女士向情感导师黄老师进行了挽爱咨询",
      "江小姐向情感导师田老师进行了挽爱咨询",
      "万先生向情感导师范老师进行了挽爱咨询",
      "丁小姐向情感导师黄老师进行了挽爱咨询",
      "于女士向情感导师张老师进行了挽爱咨询",
      "朱女士向情感导师田老师进行了挽爱咨询",
      "张女士向情感导师李老师进行了挽爱咨询",
      "邓女士向情感导师田老师进行了挽爱咨询",
      "李先生向情感导师张老师进行了挽爱咨询",
      "王女士向情感导师朱老师进行了挽爱咨询",
      "张女士向情感导师黄老师进行了挽爱咨询",
      "高先生向情感导师朱老师进行了挽爱咨询",
      "张女士向情感导师黄老师进行了挽爱咨询",
    ],
    list3: [
      { title: "请选择求助类型", id: 0 },
      { title: "婚姻挽救", id: 1 },
      { title: "爱情挽回", id: 2 },
      { title: "第三者分离", id: 3 },
      { title: "婚姻诊断", id: 4 },
      { title: "同性情感", id: 5 },
      { title: "心理咨询", id: 6 },
      { title: "法律支持", id: 7 },
      { title: "其他问题", id: 8 },
    ],
    list4: [
      { cl1: "婚姻挽救", cl2: "婚姻到了破裂的边缘" },
      { cl1: "爱情挽回", cl2: "各种原因不能继续相爱的恋人" },
      { cl1: "第三者分离", cl2: "快速有效处理第三者困扰" },
      { cl1: "婚姻诊断", cl2: "评估婚姻状况，寻找症结所在" },
      { cl1: "同性情感", cl2: "面对同性情感无法恰当解决" },
      { cl1: "心理咨询", cl2: "心理困惑、障碍正确疏导" },
      { cl1: "法律支持", cl2: "婚内财产如何保护， 子女抚养权如何争取" },
      { cl1: "更多服务", cl2: "" },
    ],
    list5: ["夏莉", "苏瑞", "晓慧", "张鸿", "谈檀", "李晴雨"],
    list6: [
      {
        name: "夏莉",
        cl1: "百合网高级情感顾问",
        cl2: "婚姻家庭咨询师",
        cl3: "国家二级心理咨询师",
        cl5: "和我一起来学习爱的语言，学习 爱的秘密吧！",
        dz: "4582",
        zx: "5284",
      },
      {
        name: "苏瑞",
        cl1: "百合网高级情感顾问",
        cl2: "婚姻家庭咨询师",
        cl3: "国家婚姻家庭一级咨询师",
        cl5: "互相理解，共同成长，让我们离自己想要的幸福越来越近。",
        dz: "3058",
        zx: "3585",
      },
      {
        name: "晓慧",
        cl1: "百合网高级情感顾问",
        cl2: "资深情感专家",
        cl3: "国家二级心理咨询师",
        cl5: "带着感情中的困惑和问题来就是，百合网的晓慧等着你。",
        dz: "4985",
        zx: "5247",
      },
      {
        name: "张鸿",
        cl1: "百合网高级情感顾问",
        cl2: "国家婚姻家庭一级咨询师",
        cl3: "二级心理咨询师资深情感专家",
        cl5: "世界上没有不争吵的感情，只有不肯包容的心灵。",
        dz: "2581",
        zx: "3692",
      },
      {
        name: "谈檀",
        cl1: "百合网高级情感顾问",
        cl2: "圣彼得堡赫尔岑国立大学心理学硕士",
        cl3: "心理咨询师",
        cl5: "世界上没有不争吵的感情，只有不肯包容的心灵。",
        dz: "5853",
        zx: "6852",
      },
      {
        name: "李晴雨",
        cl1: "百合网高级情感顾问",
        cl2: "一级婚姻家庭咨询师资",
        cl3: "情感咨询师",
        cl5:
          "耐心聆听您的悲伤，用心抚慰您的过往，全心陪伴您的身旁，真心期待您的到访。",
        dz: "2578",
        zx: "4095",
      },
    ],
    list7: arrList,
  },
  methods: {
    msub: function (e) {
      e.preventDefault();
      window.alert("提交");
    },
    scroll_top_ani: function (pos) {
      var f = parseInt($("html").css("font-size"));
      $("html,body").animate({ scrollTop: pos * f + "px" }, 300);
    },
  },
  computed: {
    zxtype2: function () {
      return this.list3[this.zxtype].title;
    },
  },
});
window.onscroll = function (ev) {
  page.hl = false;
};
function init() {
  window.setInterval(function () {
    page.$set(page.$data, "cur", (page.cur + 1) % page.list2.length);
  }, 4000);
  var d1 = new Date();
  var d2 = new Date(2016, 1, 19);
  var day = parseInt((d1 - d2) / (1000 * 60 * 60 * 24));
  var st = 1000 + (day - 2) * 24;
  var st2 = 52013 + (day - 4) * 24;

  var num = new Number(
    1000 + day * 24 + parseInt(1 * d1.getHours())
  ).toString();
  var num2 = new Number(52013 + day * 24 + parseInt(1 * d1.getHours()));
  var ix = window.setInterval(function () {
    if (st > num) {
      window.clearInterval(ix);
      return;
    }
    page.$data.num1 = st;
    st = st + 1;
  }, 20);
  var ix2 = window.setInterval(function () {
    if (st2 > num2) {
      window.clearInterval(ix2);
    }
    page.$data.num2 = st2;
    st2 = st2 + 1;
  }, 50);
}
init();

var swiper2 = new Swiper(".swp2", {
  pagination: ".swiper-pagination",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  paginationClickable: true,
  pagination: ".swiper-pagination",
  initialSlide: 1,
  slidesPerView: 1.8,
  coverflow: {
    rotate: 0,
    stretch: 10,
    depth: 40,
    modifier: 2,
    slideShadows: true,
  },
});
