import mongoose, { Schema, Document } from "mongoose";

export interface IAppointment extends Document {
  hostId: mongoose.Types.ObjectId;
  date: Date;
  status: "confirmed" | "canceled";
  meetingLink: string;
  createdAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>({
  hostId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  date: {
    type: Date,
    default: Date.now,
    required: [true, "What Date?"],
  },
  status: {
    type: String,
    enum: ["confirmed", "canceled"],
    default: "confirmed",
  },
  meetingLink: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Appointment = mongoose.model<IAppointment>(
  "Appointment",
  AppointmentSchema
);
