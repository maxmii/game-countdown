'use client'

import { useState, useEffect, useCallback, useMemo, memo } from 'react'
import Link from 'next/link'
import dateFormat from 'dateformat'

import fetchGames from '@/components/fetchGames'
import LoadingPage from '@/components/layout/LoadingPage'
import { Game } from '../models/Game.Model'

const columns = [
  {
    name: 'Name',
  },
  {
    name: 'Release Date',
  },
  {
    name: 'Rating',
  },
  {
    name: 'Metacritic Score',
  },
  {
    name: 'Platforms',
  },
]

const GamesTablePage: React.FC = () => {
  const [games, setGames] = useState<Array<Game>>([])

  const fetchGameData = useCallback(async () => {
    const gameData = await fetchGames()
    setGames(gameData)
  }, [])

  useEffect(() => {
    fetchGameData()
  }, [fetchGameData])

  const formattedGames = useMemo(
    () =>
      games.map((game) => ({
        id: game.id,
        name: game.name,
        releaseDate: dateFormat(game.released, 'dddd mmmm yyyy'),
        rating: game.rating,
        metacriticRating: game.metacritic,
        platforms: game.parent_platforms
          ? game.parent_platforms.map((platform: any) => platform.platform.name)
          : [],
      })),
    [games]
  )

  console.log(formattedGames)

  return (
    <div className="flex content-center justify-center">
      {games.length > 0 ? (
        <>
          <div className="h-fit w-fit">
            <h1 className="text-3xl justify-center flex items-center my-8">
              {' '}
              Games List
            </h1>

            <table className="bg-blue-400">
              <thead>
                <tr className="bg-blue-800">
                  {columns.map((column) => (
                    <th className="px-10" key={column.name}>
                      {column.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {formattedGames.map((game) => (
                  <tr className="text-center" key={game.id}>
                    <td>
                      <Link
                        className="hover:text-blue-800"
                        href={`/game/${game.id}`}
                      >
                        {game.name}
                      </Link>
                    </td>
                    <td>{game.releaseDate}</td>
                    <td>{game.rating} out of 5</td>
                    <td>{game.metacriticRating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  )
}

export default memo(GamesTablePage)
