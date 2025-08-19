import express from "express";
import { PORT } from "./config/env.js";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "tarek" });
});

app.listen(PORT, () => {
  console.log(`this server is running on port ${PORT}`);
});
