import { IVersion } from '../types/types';
import { model, Schema } from 'mongoose';

const versionSchema: Schema = new Schema(
    {
        gameId: {
            type: Number,
            required: true,
        },
        consoleId: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
);

export default model<IVersion>('Versions', versionSchema);
