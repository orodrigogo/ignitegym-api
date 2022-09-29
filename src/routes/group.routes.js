const { Router } = require("express");

const GroupsController = require("../controllers/GroupsController");

const groupRoutes = Router();

const groupsController = new GroupsController();

groupRoutes.get("/", groupsController.index);

module.exports = groupRoutes;