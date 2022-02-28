import { HYDRATE } from 'next-redux-wrapper';
const UPDATE_SHOP_LIST = 'UPDATE_SHOP_LIST';

const shopsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SHOP_LIST:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default shopsReducer;