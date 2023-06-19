import mongoose from "mongoose";
import { variables } from "./config.js";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      `${variables.DB_URL}/${variables.DB_NAME}`
    );
    // console.log(">>>DB is connected");
    console.log(
      "DB",
      con.connection.name,
      "is coonected on port:",
      con.connection.port
    );
  } catch (err) {
    console.log(err);
  }
};
