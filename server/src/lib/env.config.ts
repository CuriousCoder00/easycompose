import dotenv from 'dotenv';

dotenv.config();

/**
 * MongoDB URI
 * @type string
 * @description MongoDB connection URI
 * @default mongodb://localhost:27017/easy-compose
 */
export const MONGO_URI: string = process.env.MONGO_URI || 'mongodb://localhost:27017/easy-compose';

/**
 * Port
 * @type number
 * @description Port number
 * @default 3000
 */
export const PORT: string = process.env.PORT || '3000';

/**
 * JWT Secret
 * @type string
 * @description JWT secret
 * @default 'secret'
 */
export const JWT_SECRET: string = process.env.JWT_SECRET || 'cd311b835802c9e4c51a4';

/**
 * JWT expiration
 * @type string
 * @description JWT expiration
 * @default 7d
 */
export const JWT_EXPIRATION: string = process.env.JWT_EXPIRATION || '7d';

/**
 * Client URL
 * @type string
 * @description Base Client URL
 * @default http://localhost:5173
 */
export const BASE_CLIENT_URL: string = process.env.BASE_API_URL || 'http://localhost:5173';