import React from 'react';

type Props = GameProps;

const Game: React.FC<Props> = ({ game }) => {
    return (
        <div className="Card">
            <div className="Card--text">
                <h1>{game.name}</h1>
                <span>{game.description}</span>
                <ul>
                    <li>Released?: {game.released}</li>
                    <li>Platforms: {game.platforms}</li>
                    <li>Genres: {game.genres}</li>
                </ul>
            </div>
        </div>
    );
};

export default Game;
