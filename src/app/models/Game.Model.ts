export type Game = {
  parent_platforms: Array<{ platform: { name: string } }>;
  id: number;
  name: string;
  released?: string;
  rating?: number;
  metacritic?: number;
};
