// 正常显示
module.exports = function (req, res) {
  res.send("book index");
};

//  id显示效果
module.exports.get = function (req, res, next) {
  res.send("get book " + req.params.id);
};

module.exports.post = function (req, res, next) {
  next(new Error("not implemented"));
};

module.exports.put = function (req, res, next) {
  res.send("put book");
};

module.exports.delete = function (req, res, next) {
  res.send("delete book " + req.params.id);
};
