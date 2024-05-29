import axios from 'axios'
import fetchGames from '@/components/fetchGames'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('fetch games', () => {
    it('Succcessfully fetches the data from the API', async () => {
        const data = [
            {
                id: 1,
                name: 'Game 1',
                released: '2024-01-01',
                rating: 4.5,
                metacritic: 90,
                parent_platforms: [{ platform: { name: 'PC' } }]
            },
            {
                id: 2,
                name: 'Game 2',
                released: '2024-03-01',
                rating: 3.5,
                metacritic: 60,
                parent_platforms: [{ platform: { name: 'Xbox' } }]
            }
        ]

        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { results: data } }))

        await expect(fetchGames()).resolves.toEqual(data)

        expect(mockedAxios.get).toHaveBeenCalledWith(
            `${process.env.NEXT_PUBLIC_API_URL}?key=${process.env.NEXT_PUBLIC_API_KEY}`
        )
    })

    it('fetches error data from API', async () => {
        const errorMessage = 'Network Error'

        mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))

        await expect(fetchGames()).rejects.toThrow(errorMessage)
    })
})
