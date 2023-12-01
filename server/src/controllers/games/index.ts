import { Response, Request } from 'express';
import { IGame } from '../../types/types';
import Game from '../../models/gameModel';

const getGames = async (req: Request, res: Response): Promise<void> => {
    try {
        const games: IGame[] = await Game.find();
        res.status(200).json({ games });
    } catch (error) {
        throw error;
    }
};

const addGame = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<
            IGame,
            | 'name'
            | 'description'
            | 'released'
            | 'releaseDate'
            | 'platforms'
            | 'developer'
            | 'genres'
            | 'series'
        >;
        const game: IGame = new Game({
            name: body.name,
            description: body.description,
            released: body.released,
            releaseDate: body.releaseDate,
            platforms: body.platforms,
            developer: body.developer,
            genres: body.genres,
            series: body.series,
        });

        const newGame: IGame = await game.save();
        const allGames: IGame[] = await Game.find();

        res.status(201).json({
            message: 'Game Added',
            game: newGame,
            games: allGames,
        });
    } catch (error) {
        throw error;
    }
};

const updateGame = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req;

        const updateGame: IGame | null = await Game.findByIdAndUpdate(
            { _id: id },
            body,
        );

        const allGames: IGame[] = await Game.find();

        res.status(200).json({
            message: 'Game Updated',
            game: updateGame,
            games: allGames,
        });
    } catch (error) {
        throw error;
    }
};

const deleteGame = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedGame: IGame | null = await Game.findByIdAndRemove(
            req.params.id,
        );
        const allGames: IGame[] = await Game.find();

        res.status(200).json({
            message: 'Game Delete',
            game: deleteGame,
            games: allGames,
        });
    } catch (error) {
        throw error;
    }
};

export { getGames, addGame, updateGame, deleteGame };
