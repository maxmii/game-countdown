import React, { useState, useEffect } from 'react';
import { getGames } from './Api';
import GameItem from './components/GameItem';

const App: React.FC = () => {
    const [games, setGames] = useState<IGame[]>([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = (): void => {
        getGames()
            .then(({ data: { games } }: IGame[] | any) => setGames(games))
            .catch((err: Error) => console.log(err));
    };

    return (
        <main className="App">
            <h1>My Games</h1>
            {games.map((game: IGame) => (
                <GameItem key={game._id} game={game} />
            ))}
        </main>
    );
};

export default App;
