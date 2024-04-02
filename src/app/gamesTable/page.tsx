'use client';

import { useState, useEffect, useCallback, memo } from 'react';

import fetchGames from '../components/fetchGames';
import LoadingPage from '../components/layout/LoadingPage';
import Table from '../components/Table';

interface Game {
  id: number;
  name: string;
  released?: string;
  rating?: number;
}

const columns = [
  {
    name: 'Name',
    selector: (game: Game) => game.name,
    sortable: true,
  },
  {
    name: 'Release Date',
    selector: (game: Game) => game.released,
    sortable: true,
  },
  {
    name: 'Rating',
    selector: (game: Game) => game.rating,
    sortable: true,
  },
];

const GamesTablePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  const fetchGameData = useCallback(async () => {
    const gameData = await fetchGames();
    setGames(gameData);
  }, []);

  useEffect(() => {
    fetchGameData();
  }, [fetchGameData]);

  return (
    <>
      {games.length > 0 ? (
        <>
          <h1> Games List</h1>
          <Table data={games} columns={columns} />
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default memo(GamesTablePage);
