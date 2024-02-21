import mongoose from "mongoose";

const Category = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Category Name required"],
    },
    code: {
      type: String,
      require: [true, "Category Code required"],
      unique: true,
    },
    description: {
      type: String,
      require: [false],
    },
  },
  {
    timestamps: true,
  }
);

const Categories =
  mongoose.models.categories || mongoose.model("categories", Category);

export default Categories;
