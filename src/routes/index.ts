import { Router } from 'express';
import apiRoutes from './api/index.js';

const router = Router();

router.use('/api', apiRoutes);

router.use((_req, res) => {
    res.status(404).send('Not Found');
});

export default router;



