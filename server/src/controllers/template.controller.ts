import { Request, RequestHandler, Response } from "express";
import Template from "../schemas/template.schema";
import fs from "fs";

/**
 * Get all templates
 * @param req Request
 * @param res Response
 * @returns Promise<void>
 * @description Get all templates
 * @route GET /api/v1/templates
 * @access Public
 * @type Controller
 * @statusCodes 200 - Success
 * @statusCodes 500 - Server error
 */
export const getAllTemplatesController: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const templates = await Template.find();
        res.status(200).json({ templates });
        return;
    } catch (error: any) {
        res.status(500).json({ message: error.message });
        return;
    }
}

export const getTemplatesOfUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = req.user;
        if (!user) {
            res.status(400).json({ message: "User not found" });
            return;
        }
        const templates = await Template.find({ _id: user.id });
        if (!templates) {
            res.status(400).json({ message: "Templates not found" });
            return;
        }
        res.status(200).json({ templates });
        return
    } catch (error: any) {
        res.status(500).json({ message: error.message });
        return;

    }
}
/**
 * Get a template by id
 * @param req Request
 * @param res Response
 * @returns Promise<void>
 * @description Get a template by id
 * @route GET /api/v1/templates/:id
 * @access Public
 * @type Controller
 * @statusCodes 200 - Success
 * @statusCodes 500 - Server error
 */

export const getTemplateController: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const template = await Template.findById(req.params.id);
        res.status(200).json({ template });
        return;
    } catch (error: any) {
        res.status(500).json({ message: error.message });
        return;
    }
}

/**
 * Create a template
 * @param req Request
 * @param res Response
 * @returns Promise<void>
 * @description Create a template
 * @route POST /api/v1/templates
 * @access Public
 * @type Controller
 * @statusCodes 201 - Template created
 * @statusCodes 500 - Server error
 */

export const createTemplateController: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const template = await Template.create(req.body);
        res.status(201).json({ template });
        return;
    } catch (error: any) {
        res.status(500).json({ message: error.message });
        return;
    }
}

/**
 * Update a template
 * @param req Request
 * @param res Response
 * @returns Promise<void>
 * @description Update a template
 * @route PUT /api/v1/templates/:id
 * @access Public
 * @type Controller
 * @statusCodes 200 - Template updated
 * @statusCodes 500 - Server error
 */

export const updateTemplateController: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const template = await Template.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ template });
        return;
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
        return;
    }
}

/**
 * Delete a template
 * @param req Request
 * @param res Response
 * @returns Promise<void>
 * @description Delete a template
 * @route DELETE /api/v1/templates/:id
 * @access Public
 * @type Controller
 * @statusCodes 200 - Template deleted
 * @statusCodes 500 - Server error
 */

export const deleteTemplateController: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        await Template.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Template deleted" });
        return;
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
        return;
    }
}

export const getTemplate = async (req: Request, res: Response) => {
    try {
        fs.readFile("src/lib/templates/layout.html", "utf8", (err, data) => {
            if (err) {
                res.status(500).json({ message: err.message });
                return;
            }
            res.status(200).send(data);
        });
        return;
    } catch (error: any) {
        res.status(500).json({ message: error.message });
        return;
    }
}