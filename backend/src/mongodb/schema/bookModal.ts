import mongoose from "mongoose";

enum ViwingTime {
  SEVENAM,
  ELEVENAM,
  THREEPM,
  SEVENPM,
}

const BookSchema = new mongoose.Schema({
  viwingTime: {
    type: String,
    enum: ViwingTime,
  },
  seats: {
    type: Array<{ label: String; booked: Boolean }>,
    require: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export const bookModal = mongoose.model("bookings", BookSchema);
