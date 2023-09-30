import mongoose from "mongoose";
import dotenv from 'dotenv'

const url_string = process.env.URL_STRING;


export function connectToMongoDB() {
  return mongoose.connect(
    url_string
  );
}
