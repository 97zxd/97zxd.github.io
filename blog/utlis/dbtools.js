const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/blog",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (!err) {
      console.log("数据库连接成功");
    } else {
      console.log("数据库连接失败喽！");
    }
  }
);

let userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

let User = mongoose.model("user", userSchema);

let blogSchema = new mongoose.Schema({
  title: String,
  tag: Array,
  content: String,
  username: String,
  num: {
    type: Number,
    default: 0,
  },
  time: String,
  reply: Array,
});

let Blog = mongoose.model("blog", blogSchema);

// module.exports=Blog;
module.exports = { User, Blog };
