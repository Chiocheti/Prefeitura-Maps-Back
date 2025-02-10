const { Router } = require("express");

const treeController = require("../controllers/tree.controller");

const treeRoutes = Router();

treeRoutes.get("/getAll", treeController.getAll);

module.exports = treeRoutes;
