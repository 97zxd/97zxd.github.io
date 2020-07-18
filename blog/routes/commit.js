var express=require("express");
var router=express.Router();
var indexRouter = require('./index');
router.use('/', indexRouter);

router.get("/commit",function(req,res){
    console.log("收到发贴按钮请求");
    res.render("blog-commit.ejs",{ user:req.session.user })
});


module.exports=router;