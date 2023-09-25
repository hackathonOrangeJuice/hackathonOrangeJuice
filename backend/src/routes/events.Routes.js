const { Router } = require("express");
const ensureAuthentication  = require("../middlewares/ensureAuthentication");
const eventsController = require("../controllers/EventsController");

const controller = new eventsController();

const routes = Router();



routes.get("/", controller.getAllEvents);
routes.get("/:id", controller.getEventById);
routes.get("/bydate/:date", controller.getEventByDate);
routes.post("/", controller.registerEvent);
routes.put("/", controller.editEvent);
routes.delete("/:date", controller.deleteEvent)


module.exports = routes;



