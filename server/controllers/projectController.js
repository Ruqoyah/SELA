import Project from '../models/project';

/**
 * Get projects from database
 *
 * @param {object} req - request object
 * @param {object} res - response object
 *
 * @return {object} - success or failure
 */
export default function getProjects(req, res) {
  Project.find()
    .then((response) => {
      if (response) {
        res.status(200).json({
          projects: response,
        });
      } else {
        res.status(404).json({ error: 'No Project found' });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'Internal Server Error'
    }));
}
