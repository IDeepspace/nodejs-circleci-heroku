"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_express.default.static(_path.default.join(__dirname, '/../build')));
app.get('*', function (req, res) {
  res.sendFile(_path.default.join(__dirname, '/../build/index.html'));
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  _logger.default.info("CBD-Lite application is listening to port ".concat(port));
});
