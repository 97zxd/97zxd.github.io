var express = require("express");
var router = express.Router();
var models = require("../utlis/dbtools");

//查看帖子详情
router.get("/blog_detail", function (req, res) {
  models.Blog.findOne({ _id: req.query._id }).exec(function (err, data) {
    // 1console.log(data);
    if(!err) {
        var a = data.num + 1;
        models.Blog.updateOne({ _id: req.query._id }, { $set: { num: a } }).exec(function(err){
            if(!err){
              // console.log(req.session.user);
                res.render("blog-detail.ejs", { user: req.session.user, data: data });
                
            }
        });
        
    }
    
  });

  // console.log("收到查看详情的请求");
  // console.log(req.query);
  // console.log(req.query._id);
});


module.exports = router;
