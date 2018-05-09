import express from 'express';
import seedProjects from '../seeders/projectSeeder';

const router = express.Router();

router.get('/api/projects/seed', seedProjects);

export default router;
