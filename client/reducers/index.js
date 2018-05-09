import { combineReducers } from 'redux';
import ProjectReducer from './projectReducer';

/**
 * root reducer - contains all the reducers
 *
 * @param  {object} state the initial state
 *
 * @param  {object} action the action
 *
 */
const reducers = combineReducers({
  projectReducer: ProjectReducer
});

export default reducers;
