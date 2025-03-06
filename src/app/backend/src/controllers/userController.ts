import { Request, Response, NextFunction } from "express";
import { User } from "../models/userModel";

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
// export const getCurrentUser = (req: Request, res: Response) => {
//   if (!req.user) {
//     res.status(401).json({ message: "Nooot logged in" });
//   } else {
//     res.json(req.user as IUser);
//   }
// };

export const getMe = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // Explicitly return Promise<void>
  try {
    const { googleId } = req.user as { googleId: string };
    const user = await User.findOne({ googleId });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return; // Ensure the function completes
    }
    res.json(user);
  } catch (error) {
    next(error); // Pass errors to Express error handler
  }
};
