const { Router } = require("express");

const router = Router();

const callRoutes = require("./call.routes");
const trashRoutes = require("./trash.routes");
const treeRoutes = require("./tree.routes");

router.use("/calls", callRoutes);
router.use("/trees", treeRoutes);
router.use("/trash", trashRoutes);

module.exports = router;
