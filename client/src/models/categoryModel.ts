import mongoose from "mongoose";

const CategoryModel = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Category Name Required"],
    },
    code: {
      type: String,
      require: [true, "Category Code Required"],
      unique: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Category =
  mongoose.models.categories || mongoose.model("categories", CategoryModel);
export default Category;
