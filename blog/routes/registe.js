var express = require('express');
var router=express.Router();
var models=require("../utlis/dbtools");

router.post("/registe",function(req,res){
    console.log("收到注册请求");
    username=req.body.username;
    password=req.body.password;
    models.User.findOne({username:username}).exec(function(err,data){
        if(data){
            res.send("用户已被注册");
        }else{
            let u=new models.User({
                username:username,
                password:password
            });

            u.save(function(err){
                if(!err){
                    console.log("数据保存成功");
                    res.redirect("/login.html")
                }else{
                    res.send("注册失败");
                }
            })
        }
    })
})


module.exports = router;