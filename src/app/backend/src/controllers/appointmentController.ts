import { Request, Response } from "express";
import { Appointment } from "../models/appointmentModel";

// Get all appointments
export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await Appointment.find();
    res.status(201).json({
      status: "success",
      data: {
        appointments,
      },
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new appointment
export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { hostId, date, status, meetingLink } = req.body;
    const newAppointment = new Appointment({
      hostId,
      date,
      status,
      meetingLink,
    });
    await newAppointment.save();
    res.status(201).json({
      status: "success",
      data: {
        appointment: newAppointment,
      },
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ message: "Error creating appointment" });
  }
};

// Create a new Appointment
// export const createAppointment = async (req: Request, res: Response) => {
//   try {
//     const { hostId, email, role } = req.body;
//     const newAppointment = new Appointment({ name, email, role });
//     await newAppointment.save();
//     res.status(201).json({
//       status: "success",
//       data: {
//         tour: newAppointment,
//       },
//     });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ message: error });
//   }
// };
