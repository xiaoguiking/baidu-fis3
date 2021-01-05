module.exports = function (req, res) {
  res.send("This is about page");
};

// id
module.exports.get = function (req, res, next) {
  res.send("get book" + req.params.id);
};

module.exports.put = function (req, res, next) {
  res.send("put about");
};
