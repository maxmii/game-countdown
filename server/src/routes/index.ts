import { Router } from 'express';
import {
    getGames,
    addGame,
    updateGame,
    deleteGame,
} from '../controllers/games';

const router: Router = Router();

router.get('/games', getGames);

router.post('/add-game', addGame);

router.put('/edit-game/:id', updateGame);

router.delete('/delete-game/:id', deleteGame);

export default router;
