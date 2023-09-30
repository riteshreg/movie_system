import mongoose from "mongoose";

const screenSchema = new mongoose.Schema({
  screenId: {
    type: Number,
    required: true,
    unique:true,
  },
  title: {
    type: String,
    required: true,
  },
  seats: {
    type: Array<{ value: String; booked: Boolean }>,
    required: true,
  },
});

export const screenModal = mongoose.model("screens", screenSchema);
