import React from 'react'
import { jest } from '@jest/globals'
import { render, waitFor, screen, act } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import GamesTablePage from '@/app/gamesTable/page'
import fetchGames from '@/components/fetchGames'
import { Game } from '@/app/models/Game.Model'

const gamesData = [
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
] as Game[]

jest.mock('@/components/fetchGames', () => {
    return jest.fn(() =>
        Promise.resolve([
            // Replace this with the mock data you want to return
            gamesData
            // ...
        ])
    )
})

const mockedFetchGames = fetchGames as jest.Mocked<typeof fetchGames>

const server = setupServer(
    rest.get(
        `${process.env.NEXT_PUBLIC_API_URL}?key=${process.env.NEXT_PUBLIC_API_KEY}`,
        (req: any, res: any, ctx: any) => {
            return res(ctx.json({ results: [] }))
        }
    )
)

beforeAll(() => server.listen())
afterEach(() => server.restoreHandlers())
afterAll(() => server.close())

describe('Games Table Page', () => {
    it('renders without crashing', () => {
        render(<GamesTablePage />)
    })

    it('calls fetchGames on mount', async () => {
        render(<GamesTablePage />)
        await waitFor(() => expect(fetchGames).toHaveBeenCalled())
    })

    it('displays the loading games data is not available', () => {
        render(<GamesTablePage />)
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('displays the games data when available', async () => {
        mockedFetchGames.mockResolvedValueOnce(gamesData)
        await act(() => {
            render(<GamesTablePage />)
        })
        await waitFor(() => expect(screen.getByText('Game 1')).toBeInTheDocument())
        await waitFor(() => expect(screen.getByText('Game 2')).toBeInTheDocument())
    })
    it('renders Link component for each game', async () => {
        await act(() => {
            render(<GamesTablePage />)
        })
        await waitFor(() => expect(screen.getByText('Games List')).toBeInTheDocument())
    })
})
