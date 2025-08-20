import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if (!DB_URI) {
  console.log(
    "there is no DB_URI defined in the <env.production/development.local>"
  );
}

export default async function connectToDb() {
  try {
    await mongoose.connect(DB_URI);

    console.log(`connected to the database succesfully`);
  } catch (error) {
    console.log("can't connect to the data base", error);

    process.exit(1);
  }
}
