interface Game {
  _id: string;
  name: string;
  description: string;
  released: boolean;
  releaseDate: Date;
  platforms: string[];
  developer: string;
  genres: string[];
  series: string;
}

interface GameProps {
  game: Game;
}

type ApiDataType = {
  message: string;
  status: string;
  games: Game[];
  game?: Game;
};
