$(".navbox>.navlist>li").click(function () {
  //点击导航栏
  var index = $(this).index(); //获取导航栏的下标
  // console.log(index);
  $(".navlist").each(function (e) {
    $(this)
      .find("li")
      .eq(index)
      .addClass("on")
      .siblings("li")
      .removeClass("on");
  });
});
$(".navbox .icon-open").click(function () {
  $(".navbox").addClass("visible");
});
$(".navbox .icon-close,.navbox .model").click(function () {
  $(".navbox").removeClass("visible");
});
