import mongoose from "mongoose";

export async function connect() {
  try {
    const mongoURI = process.env.MONGO_URI || ""; // Set a default value if MONGO_URI is undefined
    await mongoose.connect(mongoURI, {});
    console.log(">>> DB is connected");
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
