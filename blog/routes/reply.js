var express = require("express");
var router = express.Router();
var models = require("../utlis/dbtools");
const { Collection } = require("mongoose");

//回帖
router.post("/reply", function (req, res) {
  //   console.log(req.body.reply);
  //   console.log(req.body.blogid);

  models.Blog.findOne({ _id: req.body.blogid }).exec(function (err, data) {
    // console.log(data);
    let reply = data.reply;
    var newReply = {
        replyname: req.session.user.username,
        replycontent: req.body.reply,
      };
    reply.push(newReply);
    models.Blog.updateOne(
      { _id: req.body.blogid },
      { $set: { reply: reply } }
    ).exec(function (err) {
      if (!err) {
        // console.log("修改成功");
        res.redirect("/blog_detail?_id=" + req.body.blogid);
      }
    });
  });
});

module.exports = router;
