$(function () {
  //页面初始化调用 生成页码
  makePage(total, 1);
});
function makePage(total, page) {
  var pageHtml = "";
  var ddd =
    '<div class="fy_d"></div><div class="fy_d"></div><div class="fy_d"></div>';
  function createPage(index) {
    //单页码生成
    if (page == index) {
      pageHtml +=
        '<div class="fy_y selected" ><a href="javascript:void(0)">' +
        page +
        "</a></div>";
    } else {
      pageHtml +=
        '<div class="fy_y" onclick="pageClick(this)"><a href="javascript:void(0)">' +
        index +
        "</a></div>";
    }
  }
  if (total <= 7) {
    for (var i = 1; i <= total; i++) {
      //没有点
      createPage(i);
    }
  } else {
    if (page <= 3) {
      for (var i = 1; i <= 3 + 1; i++) {
        createPage(i);
      }
      pageHtml += ddd;
      //三个点后面 生成最后一个页数
      createPage(total);
    } else if (page > total - 3) {
      //第一页
      createPage(1);
      //三个点...
      pageHtml += ddd;
      //生成最后5个页数
      for (var i = total - 3; i <= total; i++) {
        createPage(i);
      }
    } else {
      //当前页在中间 1 。。。page。。。totla
      createPage(1);
      pageHtml += ddd;
      for (var i = page - 1; i <= page + 1; i++) {
        createPage(i);
      }
      pageHtml += ddd;
      createPage(total);
    }
  }
  if (page > 1 && total > 1) {
    // 上一页
    pageHtml =
      '<div class="previous" onclick="previous()"><img src="./images/prev.jpg" alt="" /></div><div class="pagenum">' +
      pageHtml;
  } else {
    pageHtml =
      '<div class="previous"><img src="./images/prev.jpg" alt="" /></div><div class="pagenum">' +
      pageHtml;
  }
  if (page < total && total > 1) {
    // 下一页
    pageHtml =
      pageHtml +
      '</div><div class="next" onclick="next()"><img src="./images/next.jpg" alt="" /></div>';
  } else {
    pageHtml =
      pageHtml +
      '</div><div class="next"><img src="./images/next.jpg" alt="" /></div>';
  }
  $(".pagination").html(pageHtml);
}
//上一页点击事件
function previous() {
  var page = $(".pagination>.pagenum>.selected>a").text();
  if (page <= 1) {
    return;
  }
  makePage(total, page * 1 - 1);
}
//下一页点击事件
function next() {
  var page = $(".pagination>.pagenum>.selected>a").text();
  if (page >= total) {
    return;
  }
  makePage(total, page * 1 + 1);
}
//直接点击页数事件
function pageClick(that) {
  var page = $(that).text();
  makePage(total, page * 1);
}
