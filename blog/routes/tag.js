var express=require("express");
var router=express.Router();
var models=require("../utlis/dbtools");

router.get("/tag",function(req,res){
    console.log("收到查看标签的请求");
    console.log(req.body);
    models.Blog.find({},{"tag":1,_id:0}).exec(function (err, tag) {
        // console.log(tag);
        if (!err) {
       let newtag=[];
        tag.forEach(function(item,index){
            // console.log("item是", item);
            // item.forEach(function(tagValue,index){
            //     newtag.push(tagValue);
            // })
            for(var i=0;i<item.tag.length;i++){
                // console.log(item.tag[i]);
                // newtag[newtag.length]=item[i];
                newtag.push(item.tag[i]);
            }
        })
        // console.log("newtag是",newtag);

        let tagNew=[];
        for (var i = 0; i < newtag.length; i++) {
            //如果当前数组的第i已经保存进了临时数组，那么跳过，
            //否则把当前项push到临时数组里面
            if (tagNew.indexOf(newtag[i]) == -1) {
                tagNew.push(newtag[i]);
            }
        }
            res.render("tag.ejs",{ user:req.session.user ,tags: tagNew })
        }
      });
   
})

module.exports=router;