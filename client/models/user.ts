import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  username: {
    type: String,
    required: [true, "Please enter a username"],
    minlength: [3, "Username must be at least 3 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

// export default mongoose.models.User || mongoose.model("User", UserSchema);
const User = mongoose.models.users || mongoose.model("users", UserSchema);

export default User;
