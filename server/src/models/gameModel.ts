import { IGame } from '../types/game';
import { model, Schema } from 'mongoose';

const gameSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    released: {
      type: String,
      required: true,
      default: false,
    },
    releaseDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    platforms: {
      type: [String],
      required: false,
    },
    developer: {
      type: String,
      required: false,
    },
    genres: {
      type: [String],
      required: false,
    },
    series: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

export default model<IGame>('Games', gameSchema);
