var express = require("express");
var router = express.Router();
var session = require("express-session");
var models=require("../utlis/dbtools");

router.use(
  session({
    secret: "session", // 这是一个秘钥，它参与加密数据的生成。
    resave: false, // 当发送每次请求的时候，如果session的数据没有发生变化时，是否强制保存session，默认值是true。
  })
);
/* GET home page. */
router.get("/", function (req, res, next) {
  // console.log(req.session.user);
  models.Blog.find().exec(function (err, data) {
    if (!err) {
      res.render("index.ejs", { user: req.session.user, blogs: data });
    }
  });
});

module.exports = router;


  
