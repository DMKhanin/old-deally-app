const UPDATE_FILES_LIST = 'UPDATE_FILES_LIST';

const filesReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FILES_LIST:
      return [...action.payload]
    default:
      return state;
  }
}

export default filesReducer;