import express from "express";
import {
  getAvailability1,
  updateAvailability,
} from "../controllers/availabilityController";

const router = express.Router();

router.get("/:hostId", getAvailability1);
router.put("/:hostId", updateAvailability);

export default router;
