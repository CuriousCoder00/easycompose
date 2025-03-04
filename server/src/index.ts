import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { BASE_CLIENT_URL, PORT } from './lib/env.config';
import './lib/db';
import { authRouter, templateRouter } from "./routes/index.routes";

const app = express();

app.use(cors(
    {
        origin: true,
        credentials: true
    }
));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/template', templateRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});