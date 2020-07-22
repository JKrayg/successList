const router = require("express").Router();
const checkList = require("./Checklist");
const users = require("./users")

router.use("/goals", checkList);

module.exports = router;