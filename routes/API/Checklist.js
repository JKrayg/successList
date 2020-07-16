const router = require("express").Router();
const checkListController = require("../../controller/checkListController");

router.route("/")
.get(checkListController.findAll)
.post(checkListController.create);

module.exports = router;