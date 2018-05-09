import express from 'express';
import seedProjects from '../seeders/projectSeeder';
import getProjects from '../controllers/projectController';

const router = express.Router();

router.get('/api/projects', getProjects);

router.get('/api/projects/seed', seedProjects);

export default router;
