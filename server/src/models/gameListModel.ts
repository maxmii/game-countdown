import { IGameList } from '../types/types';
import { model, Schema } from 'mongoose';

const gameListSchema: Schema = new Schema(
    {
        versionId: {
            type: Number,
            required: true,
        },
        userId: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
);

export default model<IGameList>('GameList', gameListSchema);
