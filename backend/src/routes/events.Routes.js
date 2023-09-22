const { Router } = require("express");
const eventsController = require("../controllers/EventsController");

const controller = new eventsController();

const routes = Router();

routes.get("/", controller.getAllEvents);
routes.get("/:id", controller.getEventById);
routes.post("/", controller.registerEvent);
routes.put("/", controller.editEvent);


module.exports = routes;



