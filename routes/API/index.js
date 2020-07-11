const router = require("express").Router();
const checkList = require("./Checklist");

router.use("/list", checkList);

module.exports = router;