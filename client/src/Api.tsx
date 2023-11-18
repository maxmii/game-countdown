import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'https://localhost:4000';

export const getGames = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const games: AxiosResponse<ApiDataType> = await axios.get(
            `${baseUrl}/games`,
        );
        return games;
    } catch (error) {
        throw new Error(String(error));
    }
};
