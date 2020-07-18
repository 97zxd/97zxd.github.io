var express=require("express");
var router=express.Router();
var User=require("../utlis/dbtools");

router.get("/logout",function(req,res){
    // console.log("收到退出请求");
    if(req.session.user){
        delete req.session.user;
        res.redirect("/");
    }
})

module.exports=router;
