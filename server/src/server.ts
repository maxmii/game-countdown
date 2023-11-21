import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import gameRoutes from './routes';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}${process.env.MONGODB_DB}?retryWrites=true&w=majority`;

app.use(cors());

app.use(gameRoutes);

mongoose
    .connect(uri)
    .then(() => {
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
    })
    .catch((error) => {
        throw error;
    });
