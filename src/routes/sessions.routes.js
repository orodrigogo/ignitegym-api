const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const UserRefreshToken = require("../controllers/UserRefreshToken");

const sessionsController = new SessionsController();
const userRefreshToken = new UserRefreshToken();

const sessionsRoutes = Router();
sessionsRoutes.post("/", sessionsController.create);
sessionsRoutes.post("/refresh-token", userRefreshToken.create);

module.exports = sessionsRoutes;