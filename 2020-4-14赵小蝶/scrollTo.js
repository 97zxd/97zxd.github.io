function scrollTo(end,f){

    // 获取起点位置
    var start=document.body.scrollTop||document.documentElement.scrollTop;
    
    var x=start;

    var timer=setInterval(function(){

        x+=(end-start)/300*16.7;

        if(start<end){
            if(x>=end){
                clearInterval(timer);
                x=end;
                // 如果传入第二个参数 动画结束执行此函数
                if(f){
                    f();
                }
            }
        }else{
            if(x<=end){
                clearInterval(timer);
                x=end;
                // 如果传入第二个参数 动画结束执行此函数
                if(f){
                    f();
                }
            }
        }

        document.body.scrollTop=x;
        document.documentElement.scrollTop=x;

    },16.7)
}