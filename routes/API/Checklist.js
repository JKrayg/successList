const router = require("express").Router();
const checkListController = require("../../controller/checkListController");

router.route("/")
.get(checkListController.findAll)
.post(checkListController.create)

router.route("/:id")
.get(checkListController.findById)
.put(checkListController.update)
.delete(checkListController.remove)
module.exports = router;