import express from "express";
import {
  getUsers,
  createUser,
  getCurrentUser,
} from "../controllers/userController";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/me", getCurrentUser);

export default router;
