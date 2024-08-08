import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    index: true,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    lowercase: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
