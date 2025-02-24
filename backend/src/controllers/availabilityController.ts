import { Request, Response } from "express";
import { Availability } from "../models/availabilityModel";
//import mongoose from "mongoose";

// Get availability for a specific host
export const getAvailability1 = () => console.log("hello");
export const getAvailability = async (req: Request, res: Response) => {
  try {
    const availability = await Availability.find();

    if (!availability) {
      return res.status(404).json({ message: "Availability not found" });
    }

    res.json(availability);
  } catch (error) {
    console.error("Error fetching availability:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update availability for a host
export const updateAvailability = async (req: Request, res: Response) => {
  try {
    const { hostId } = req.params;
    const { weeklyAvailability, timezone, duration } = req.body;

    const updatedAvailability = await Availability.findOneAndUpdate(
      { hostId },
      { weeklyAvailability, timezone, duration },
      { new: true, upsert: true }
    );

    res.json(updatedAvailability);
  } catch (error) {
    console.error("Error updating availability:", error);
    res.status(500).json({ message: "Error updating availability" });
  }
};

export const createAvailability = async (req: Request, res: Response) => {
  try {
    const { hostId, timezone, duration } = req.body;
    const newAvailability = new Availability({ hostId, timezone, duration });
    await newAvailability.save();
    res.status(201).json({
      status: "success",
      data: {
        availability: newAvailability,
      },
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ message: "Error creating appointment" });
  }
};

export const getAva = async (req: Request, res: Response) => {
  try {
    const availability = await Availability.find();
    res.status(200).json({
      status: "success",
      data: {
        availability,
      },
    });
  } catch (error) {
    console.error("Error fetching availability:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
