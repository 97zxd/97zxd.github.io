//封装方法 获取路径
function getQuery() {
    //?x=10&y=20
    var str = location.search.replace("?", "")
    console.log(str);
    //"x=10&y=20"
    var arr = str.split("&");
    var query = {};
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("=");
        query[arr2[0]] = arr2[1];
    }
    // console.log(query);
    return query;
}