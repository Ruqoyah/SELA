import PROJECTS from '../actions/types';

const INITIAL_STATE = {
  projects: [],
};

  /**
   * reducer - contains the reducer
   *
   * @param  {object} state the initial state
   *
   * @param  {object} action the action
   *
   * @return {Object} returns an Object
   *
   */
const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROJECTS:
    return {
      ...state,
      projects: action.payload
    };
  default:
    return state;
  }
};

export default projectReducer;
