import { HYDRATE } from 'next-redux-wrapper';
import { UPDATE_USER, REPLACE_USER } from '../actions/UserActions';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case REPLACE_USER: {
      return {
        ...action.payload
      }
    }
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload
      }
    default: return state;
  }
}

export default userReducer
