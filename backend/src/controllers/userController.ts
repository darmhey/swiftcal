import { Request, Response } from "express";
import { User, IUser } from "../models/userModel";

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, role } = req.body;
    const newUser = new User({ name, email, role });
    await newUser.save();
    res.status(201).json({
      status: "success",
      data: {
        tour: newUser,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: error });
  }
};

//Get current user

export const getCurrentUser = (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Not logged in" });
  res.json(req.user as IUser);
};
