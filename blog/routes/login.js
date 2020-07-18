var express=require("express");
var router=express.Router();
var models=require("../utlis/dbtools");

router.post("/login",function(req,res){
    console.log("收到登录请求");
    username=req.body.username;
    password=req.body.password;
    models.User.findOne({username:username,password:password}).exec(function(err,data){
        console.log(data);
        req.session.user=data;
        console.log(password);
        console.log(username);
        if(data){
             if(username==data.username&&password==data.password){
            console.log("登录成功啦");
            res.redirect("/")
            // res.render("index")
        }else{
            res.send("登录失败，用户名或密码错误")
        }
        }else{
            res.send("用户未注册");
        }
    })
})


module.exports = router;

