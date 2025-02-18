import mongoose, { Schema, Document } from "mongoose";

export interface IAppointment extends Document {
  hostId: mongoose.Types.ObjectId;
  clientId: mongoose.Types.ObjectId;
  date: Date;
  status: "pending" | "confirmed" | "canceled";
  meetingLink: string;
  createdAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>({
  hostId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  clientId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "canceled"],
    default: "pending",
  },
  meetingLink: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Appointment = mongoose.model<IAppointment>(
  "Appointment",
  AppointmentSchema
);
