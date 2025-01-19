import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./env.config";

interface JwtPayload {
    id: string;
    email: string;
    exp: number;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.easy_compose_token;
        if (!token) {
            res.status(401).json({ message: "Unauthorized: Token missing" });
            return
        }
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        // Check if the token is expired
        const currentTime = Math.floor(Date.now() / 1000);
        if (decoded.exp <= currentTime) {
            res.clearCookie("easy_compose_token").status(401).json({ message: "Unauthorized: Token expired" });
            return;
        }
        req.user = {
            id: decoded.id,
            email: decoded.email
        }
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized: Invalid token" });
        return
    }
};