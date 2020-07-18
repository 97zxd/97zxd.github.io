var express=require("express");
var router=express.Router();
var models=require("../utlis/dbtools");

router.get("/del",function(req,res){
    // console.log("收到删除帖子的请求");
    models.Blog.deleteOne({_id:req.query._id}).exec(function(err){
        // console.log("删除成功");
        // res.render("index.ejs",{user:req.session.user});
        // res.render("/");
        res.redirect("/")
    })
})



module.exports=router;