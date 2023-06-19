import app from "./app.js";
import { connectDB } from "./db.js";

async function main() {
  await connectDB();
  app.listen(app.get("port"));
  console.log("Server is running on port:", app.get("port"));
}

main();

// connectDB();
// app.listen(app.get("port"));
// console.log("Server is running on port:", app.get("port"));
