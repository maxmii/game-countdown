import { Document } from 'mongoose';

export interface IGame extends Document {
  name: string;
  description: string;
  released: boolean;
  releaseDate: Date;
  platforms: string[];
  developer: string;
  genres: string[];
  series: string;
}
