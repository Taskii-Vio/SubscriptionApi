import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up");

authRouter.get("/sign-in");

authRouter.post("/sing-out");

export default authRouter;
