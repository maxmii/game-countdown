import axios from 'axios'
import { Game } from '@/app/models/Game.Model'

const fetchGames = async (): Promise<Game[]> => {
    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}?key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    return response.data.results
}

export default fetchGames
