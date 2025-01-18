import { Router } from "express";
import { loginController, logoutController, registrationController } from "../controllers/auth.controller";

const authRouter: Router = Router();

authRouter.post("/register", registrationController);
authRouter.post("/login", loginController);
authRouter.post("/logout", logoutController);

export default authRouter;