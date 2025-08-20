import express from "express";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import subscriptionsRouter from "./routes/subscriptions.js";

import connectToDb from "./DATABASE/mongodb.js";

import { DB_URI, NODE_ENV, PORT } from "./config/env.js";

const app = express();

app.use("/auth", authRouter);

app.use("/users", usersRouter);

app.use("/subscriptions", subscriptionsRouter);

app.listen(PORT, async () => {
  await connectToDb();

  console.log(`this server is running on port ${PORT}`);
});
