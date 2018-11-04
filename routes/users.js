var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post("/test", function(req, res) {
	var record = req.body;
//	console.log(req.body);
	console.log("sn: " + req.body.sn + " ip: " + req.body.ip);
	res.end(JSON.stringify({"sn":record.sn, "ip":record.ip, "cmd":"date"}));
});

module.exports = router;
