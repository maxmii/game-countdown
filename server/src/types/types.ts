import { Document, Types } from 'mongoose';

export interface IGame extends Document {
    name: string;
    description?: string;
    released: boolean;
    releaseDate?: Date;
    platforms?: string[];
    developer?: string;
    genres?: string[];
    series?: string;
}

export interface IUser extends Document {
    userName: string;
    password: string;
    dateOfBirth: Date;
    gameList: Types.ObjectId;
}

export interface IGameList extends Document {
    game: Types.ObjectId;
    user: Types.ObjectId;
}
