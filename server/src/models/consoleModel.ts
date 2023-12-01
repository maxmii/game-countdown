import { IConsole } from '../types/types';
import { model, Schema } from 'mongoose';

const consoleSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: Date,
            required: false,
        },
        productFamily: {
            type: String,
            required: true,
        },
        developer: {
            type: String,
            required: true,
        },
        generation: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

export default model<IConsole>('Consoles', consoleSchema);
