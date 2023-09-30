import mongoose from "mongoose";

export function connectToMongoDB() {
  return mongoose.connect(
    `mongodb+srv://webriteshkhadka:CGO8HX9gGHF9c6Hp@cluster0.fr1auxg.mongodb.net/movie_management_system?retryWrites=true&w=majority`
  );
}
