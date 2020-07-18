var express = require("express");
var router = express.Router();
var models = require("../utlis/dbtools");
var indexRouter = require("./index");
var getCurrentTime = require("../utlis/get_time");
router.use("/", indexRouter);

router.post("/commit_content", function (req, res) {
  // console.log("收到发的贴子的请求");
  // console.log(req.body);
  let time = getCurrentTime();
  var title = req.body.title;
  var tag = req.body.tag.trim().split(" ");
  var content = req.body.content;
  let l = new models.Blog({
    title: title,
    tag: tag,
    content: content,
    username: req.session.user.username,
    time: time,
  });
  l.save(function (err) {
    if (!err) {
      console.log("发帖成功");
      res.redirect("/");
    } else {
      res.send("发帖失败");
    }
  });
});

module.exports = router;
