import { EMPLOYEES_FETCH_SUCCESS } from '../actions/type';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      console.log('payload day');
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
