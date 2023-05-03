import mongoose from "mongoose";
import validator from "validator";

let BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide the name"],
    },
    phone: {
      type: Number,
      required: [true, "Please provide the phone"],
    },
    person: {
      type: Number,
      required: [true, "Please Provide the persons"],
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
    },

    startTime: {
      type: String,
      required: [true, "Please Provide the Start Time"],
    },
    endTime: {
      type: String,
      required: [true, "Please Provide the End Time"],
    },
    date: {
      type: Date,
    //   min: new Date().toLocaleDateString(),
    //   max: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      required: [true, "Please Provide the date"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("MerryHotelBookings", BookSchema);
