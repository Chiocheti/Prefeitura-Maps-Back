const { Router } = require("express");

const router = Router();

const callRoutes = require("./call.routes");

router.use("/calls", callRoutes);

module.exports = router;
