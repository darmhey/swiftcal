import { Request, Response } from "express";
import { Availability } from "../models/availabilityModel";

// Get availability for a specific host
export const getAvailability = async (req: Request, res: Response) => {
  try {
    const { hostId } = req.params;
    const availability = await Availability.findOne({ hostId });
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
