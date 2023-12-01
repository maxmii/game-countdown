import { Document } from 'mongoose';

export interface IGame extends Document {
    name: string;
    description: string;
    released: boolean;
    releaseDate: Date;
    platforms: string[];
    developer: string;
    genres: string[];
    series: string;
}

export interface IConsole extends Document {
    name: string;
    releaseDate: Date;
    productFamily: string;
    developer: string;
    generation: string;
}

export interface IUser extends Document {
    userName: string;
    password: string;
    dateOfBirth: Date;
    gameListId: number;
}

export interface IVersion extends Document {
    gameId: number;
    consoleId: number;
}

export interface IGameList extends Document {
    versionId: number;
    userId: number;
}
