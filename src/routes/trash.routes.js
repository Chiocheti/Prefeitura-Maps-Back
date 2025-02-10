const { Router } = require("express");

const trashController = require("../controllers/trash.controller");

const trashRoutes = Router();

trashRoutes.get("/getAll", trashController.getAll);
trashRoutes.post("/create", trashController.create);

module.exports = trashRoutes;
