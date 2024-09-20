import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      trim: true,
      type: String,
      unique: true,
      required: [true, "Name required!"],
    },
    email: {
      trim: true,
      type: String,
      required: [true, "Email required!"],
    },
    contactNo: {
      trim: true,
      type: String,
      required: [true, "Contact No required!"],
    },
    message: {
      trim: true,
      type: String,
      required: [true, "Message required!"],
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.contacts ||
  mongoose?.model("contacts", contactSchema);
