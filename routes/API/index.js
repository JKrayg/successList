const router = require("express").Router();
const checkList = require("./Checklist");

router.use("/goals", checkList);

module.exports = router;