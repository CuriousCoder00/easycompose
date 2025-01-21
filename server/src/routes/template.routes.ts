import { Router } from "express"
import { createTemplateController, getAllTemplatesController, getTemplate } from "../controllers/template.controller";
import { authMiddleware } from "../lib/middlewares";

const templateRouter: Router = Router()

templateRouter.get("/all", getAllTemplatesController);
templateRouter.get("/user", authMiddleware, getAllTemplatesController);
templateRouter.get("/:id", getTemplate);
templateRouter.post("/create", authMiddleware, createTemplateController)
templateRouter.get("/", getTemplate)

export default templateRouter;