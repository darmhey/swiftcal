import mongoose, { Schema, Document } from "mongoose";

export interface IAvailability extends Document {
  hostId: mongoose.Types.ObjectId;
  // weeklyAvailability: {
  //   [key: string]: string[]; // Example: { Monday: ["09:00-12:00", "14:00-17:00"] }
  // };
  timezone: string;
  duration: number;
}

const AvailabilitySchema = new Schema<IAvailability>({
  hostId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  //weeklyAvailability: { type: Map, of: [String], required: true },
  timezone: { type: String, required: true },
  duration: { type: Number, required: true },
});

export const Availability = mongoose.model<IAvailability>(
  "Availability",
  AvailabilitySchema
);

// "weeklyAvailability": { "Monday": ["09:00-12:00", "14:00-17:00"], "Tuesday": ["10:00-13:00"] },
