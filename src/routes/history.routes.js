const { Router } = require("express");

const HistoryController = require("../controllers/HistoryController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const historyRoutes = Router();

const historyController = new HistoryController();

historyRoutes.use(ensureAuthenticated);

historyRoutes.get("/", historyController.index);
historyRoutes.post("/", historyController.create);

module.exports = historyRoutes;