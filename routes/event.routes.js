import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventByCategoryId,
  updateEvent,
  deleteEvent,
  getEventById,
} from "../controllers/event.controller.js";

const router = express.Router();

router.post("/", createEvent);
router.get("/", getAllEvents);
router.get("/getEventByCategoryId/:id", getEventByCategoryId);
router.get("/getEventById/:id", getEventById);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
