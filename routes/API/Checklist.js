const router = require("express").Router();
const checkListController = require("../../controller/checkListController");

router.route("/").get(checkListController.findAll)

module.exports = router;