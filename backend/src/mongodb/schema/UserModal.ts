import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  firstName: {
    type: String,
    required: [true, "Please Define Firstname"],
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const userModal = mongoose.model("users", userSchema);
