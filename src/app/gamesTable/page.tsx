'use client';

import { useState, useEffect } from 'react';

import fetchGames from '../components/fetchGames';
import LoadingPage from '../components/loadingPage';

interface Game {
  id: number;
  name: string;
  released?: string;
  rating?: number;
}
const GamesTablePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    const fetchGameData = async () => {
      const gameData = await fetchGames();
      setGames(gameData);
    };
    fetchGameData();
  }, []);
  return (
    <>
      {games.length > 0 ? (
        <>
          <h1> Games List</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Release Date</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => {
                return (
                  <tr key={game.id}>
                    <td>{game.name}</td>
                    <td>{game.released}</td>
                    <td>{game.rating}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default GamesTablePage;
