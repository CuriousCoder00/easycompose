import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { PORT } from './lib/env.config';
import './lib/db';
import { authRouter } from "./routes/index.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});