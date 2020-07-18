//top部分
var phone = document.getElementsByClassName("phone")[0];
var phonecontent = document.getElementsByClassName("phonecontent")[0];
// console.log(phone);
// console.log("yes");
phone.onmouseenter = function (e) {
    phonecontent.style.display = "block"
}
phone.onmouseleave = function (e) {
    phonecontent.style.display = "";
}


var topDown = document.getElementsByClassName("topDown");
// console.log(topDown);
var topDowncontent = document.getElementsByClassName("topDowncontent");
// console.log(topDowncontent);
for (var i = 0; i < topDown.length; i++) {
    topDown[i].index = i
    topDown[i].onmouseenter = function (e) {
        //获取当前点击的topDown的索引
        // console.log(this.index);
        topDowncontent[this.index].style.display = "block"
    }
    topDown[i].onmouseleave = function (e) {
        topDowncontent[this.index].style.display = ""

    }
}



//图片轮播

imgs = bannercenter_img.children;
btns = btn.children;
// console.log(btns);
imgs[0].style.display = "block";
btns[0].className = "orange";
var index = 0;


// 定义并调用自动播放函数
timer = setInterval(autoPlay, 2000);

console.log(btns.length);
for (var i = 0; i < btns.length; i++) {


    btns[i].onmouseover = function () {
        // console.log("鼠标进入");
        clearInterval(timer);
        // console.log(this.innerHTML);
        index = this.innerHTML - 1;
        changeimg(index);
        // console.log(index);
    }
    btns[i].onmouseout = function () {
        console.log("鼠标移开了");
        // setInterval(timer);
        timer = setInterval(autoPlay, 2000);

    }
}

//图片切换函数
function changeimg(index) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
        // console.log("ok")
        btns[i].className = "";
    }

    imgs[index].style.display = "block";
    // console.log(btns[index]);
    btns[index].className = "orange";
    // console.log("shuchu");

}
function autoPlay() {
    //   console.log("输出");

    index++;

    if (index == 5) {
        index = 0;
    }
    changeimg(index);
    //   console.log(index);
}





for (var i = 0; i < nav.children.length; i++) {
    nav.children[i].index = i;

    nav.children[i].onclick = function () {
        // console.log(this.index);
        for (var j = 0; j < nav.children.length; j++) {
            nav.children[j].className = " ";

        }
        this.className = "red";
    }
}

var index1 = -1;
var H = window.innerHeight;
var fixed = document.getElementById("fixed");


window.onscroll = function () {
    // console.log("1110");
    //获取窗口滚动高度
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(st);
    for (var i = floors.children.length - 1; i >= 0; i--) {
        var ot = floors.children[i].offsetTop;

        console.log("执行了");
        if (st >= 100) {
            fixed.style.display = "block";
            // 左右偏移  上下偏移  模糊距离
            fixed.style.boxShadow = "0px 5px 5px rgb(0,0,0,0.5)";
        } else {
            fixed.style.display = "";
        }

        if (st + H / 2 >= ot) {
            if (i != index1) {
                // console.log(i);
                for (var j = 0; j < nav.children.length; j++) {
                    nav.children[j].className = " ";
                }
                nav.children[i].className = "red";
                index1 = i;
            }
            break;
        }
    }
}


// //顶部固定栏
// var fixed = document.getElementById("fixed");

//     window.onscroll = function (e) {
//         // console.log("滚动了");
//         // console.log(window.scrollY);
//         if (window.scrollY >= 100) {
//             // console.log("该停了");

//             fixed.style.display = "block";
//             // 左右偏移  上下偏移  模糊距离
//             fixed.style.boxShadow = "0px 5px 5px rgb(0,0,0,0.5)";
//         } else {
//             fixed.style.display = "";
//         }
//     }