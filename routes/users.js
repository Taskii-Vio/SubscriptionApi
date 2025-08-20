import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.json({ message: "these are all the users" });
});

usersRouter.get("/:id");

usersRouter.post("/");

usersRouter.put("/:id");

usersRouter.delete("/:id");

export default usersRouter;
