import mongoose from "mongoose";

const Course = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Course name required"],
  },
  code: {
    type: String,
    unique: true,
    require: [true, "Course Code required"],
  },
  description: {
    type: String,
    require: false,
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
});

const Courses = mongoose.models.courses || mongoose.model("courses", Course);

export default Courses;
