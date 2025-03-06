import express from "express";
import {
  getAvailability1,
  updateAvailability,
  getAva,
  createAvailability,
} from "../controllers/availabilityController";

const router = express.Router();

router.post("/", createAvailability);
router.get("/", getAva);
router.get("/:hostId", getAvailability1);
router.put("/:hostId", updateAvailability);

export default router;
