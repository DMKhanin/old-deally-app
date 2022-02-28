import { getFiles } from "../../api/DashboardAPI"

export const updateFiles = (files) => {
  return {
    type: 'UPDATE_FILES_LIST',
    payload: files
  }
}

export const getFilesByProductId = (productId) => {
  return async (dispatch) => {
    const { list } = await getFiles({ productId });
    return dispatch(updateFiles(list))
  }
}

