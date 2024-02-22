import mongoose from "mongoose";

const courseModel = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Category Name required"],
    },
    code: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },

  {
    timestamps: true,
  }
);

const Course =
  mongoose.models.courses || mongoose.model("courses", courseModel);

export default Course;
