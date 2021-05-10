
//判断当前浏览器是web还是app
function navigatorIsMobile(){
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            return true;
        }
        return false;
}
//微信分享
function weixinFX(appId,signature,span,link,title,desc,img) { 

    wx.config({
        debug: false, //这里是开启测试，如果设置为true，则打开每个步骤，都会有提示，是否成功或者失败
        appId: appId,
        timestamp: span, //生成签名的时间戳
        nonceStr:span, //生成签名的随机串
        signature: signature,//签名
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'
        ]
    });
    var title=title!=undefined?title:'百合情感--帮您挽回破裂的婚姻';
    var desc=desc!=undefined?desc:'如果你现在因为分手、感情破裂等问题备受煎熬，那么请参与百合情感挽回定制服务，推翻你固有的思维定式，并且给自己一个重新获得美好爱情的机会!';
    var img=img!=undefined?img:"//static5.baihe.com/images/logo300.png";
    weixinFXTxt(title,desc,link,img);
}

//微信分享
function weixinFXDebug(appId,signature,span,link,title,desc,img) {
    wx.config({
        debug: true, //这里是开启测试，如果设置为true，则打开每个步骤，都会有提示，是否成功或者失败
        appId: appId,
        timestamp: span, //生成签名的时间戳
        nonceStr:span, //生成签名的随机串
        signature: signature,//签名
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'
        ]
    });
    var title=title!=undefined?title:'百合情感--帮您挽回破裂的婚姻';
    var desc=desc!=undefined?desc:'如果你现在因为分手、感情破裂等问题备受煎熬，那么请参与百合情感挽回定制服务，推翻你固有的思维定式，并且给自己一个重新获得美好爱情的机会!';
    var img=img!=undefined?img:"//static5.baihe.com/images/logo300.png";
    weixinFXTxt(title,desc,link,img);
}

//微信分享内容
function weixinFXTxt(title,desc,link,img) {
    wx.ready(function() {
        wx.onMenuShareTimeline({
            title:title, // 分享标题
            link: link, // 分享链接
            imgUrl: img, // 分享图标
        });
        wx.onMenuShareAppMessage({
            title: title, 
            desc: desc, 
            link: link, 
            imgUrl: img, 
            type: '', 
            dataUrl: '', 
        });
        wx.onMenuShareQQ({
            title: title, 
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: img, // 分享图标
        });
        wx.onMenuShareWeibo({
            title: title, // 分享标题1
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: img, // 分享图标
        });
    });
}
