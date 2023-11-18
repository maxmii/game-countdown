interface IGame {
    _id: string;
    name: string;
    description: string;
    released: boolean;
    releaseDate: Date;
    platforms: string[];
    developer: string;
    genres?: string[];
    series?: string;
    createdAt?: string;
    updatedAt?: string;
}

interface GameProps {
    game: IGame;
}

type ApiDataType = {
    message: string;
    status: string;
    games: IGame[];
    game?: IGame;
};
