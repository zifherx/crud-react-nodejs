import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (_pass) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(_pass, salt);
};

userSchema.statics.comparePassword = async (_pass, _newPass) => {
  return await bcrypt.compare(_pass, _newPass);
};

export default model("User", userSchema);
