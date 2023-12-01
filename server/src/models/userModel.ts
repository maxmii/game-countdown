import { IUser } from '../types/types';
import { model, Schema } from 'mongoose';

const userSchema: Schema = new Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        gameListID: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
);

export default model<IUser>('Users', userSchema);
