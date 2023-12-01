import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'http://localhost:4000';

export const getGames = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const games: AxiosResponse<ApiDataType> = await axios.get(
            `${baseUrl}/games`,
        );
        console.log(games);
        return games;
    } catch (error) {
        console.log(error);
        throw new Error(String(error));
    }
};

export const addGames = async (
    formData: IGame,
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const game: Omit<IGame, '_id'> = {
            name: formData.name,
            description: formData.description,
            released: formData.released,
            releaseDate: formData.releaseDate,
            platforms: formData.platforms,
            developer: formData.developer,
            genres: formData.genres,
            series: formData.series,
        };
        const saveGame: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + '/add-game',
            game,
        );
        return saveGame;
    } catch (error) {
        throw new Error(String(error));
    }
};

// export const updateGame = async (
//     game: IGame,
// ): Promise<AxiosResponse<ApiDataType>> => {
//     try {
//         const gameUpdate: Pick<IGame, "status"> = {

//         }
//     } catch (error) {
//         throw new Error(String(error));
//     }
// };

export const deleteGame = async (
    _id: string,
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedGame: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/delete-game/${_id}`,
        );
        return deletedGame;
    } catch (error) {
        throw new Error(String(error));
    }
};
