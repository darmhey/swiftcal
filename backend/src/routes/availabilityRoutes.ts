import express from "express";
import {
  getAvailability,
  updateAvailability,
} from "../controllers/availabilityController";

const router = express.Router();

router.get("/:hostId", getAvailability);
router.put("/:hostId", updateAvailability);

export default router;
