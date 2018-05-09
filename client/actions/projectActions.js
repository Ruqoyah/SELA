import axios from 'axios';
import PROJECTS from './types';

/**
 * @description Get projects
 *
 * @return {object} dispatch object
 */
const getProjects = () => (dispatch) =>
  axios.get(`/api/projects`)
    .then((response) => {
      dispatch({
        type: PROJECTS,
        payload: response.data.projects
      });
    })
    .catch(error => Promise.reject(error.response.data.message));


export default getProjects;
