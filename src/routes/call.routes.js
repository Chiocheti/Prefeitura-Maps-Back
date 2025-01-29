const { Router } = require("express");

const callController = require("../controllers/call.controller");

const callRoutes = Router();

callRoutes.get("/getAll", callController.getAll);
callRoutes.post("/create", callController.create);

module.exports = callRoutes;
