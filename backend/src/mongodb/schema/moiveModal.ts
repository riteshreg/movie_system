import mongoose from "mongoose";

enum ViwingTime {
  SEVENAM,
  ELEVENAM,
  THREEPM,
  SEVENPM,
}

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    requried: true,
  },
  cast: {
    type: [String],
    required: true,
  },
  released_date: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  viewing_time: {
    type: [String],
    enum: ViwingTime,
  },
  screenId:{
    type:String,
    required:true,
  }
});

export const movieModal = mongoose.model("movies", movieSchema);
