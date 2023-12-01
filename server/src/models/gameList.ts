import { IGameList } from '../types/types';
import { model, Schema } from 'mongoose';

const gameListSchema: Schema = new Schema(
    {
        game: {
            type: Schema.Types.ObjectId,
            ref: 'Games',
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'Users',
            required: true,
        },
    },
    { timestamps: true },
);

export default model<IGameList>('Version', gameListSchema);
