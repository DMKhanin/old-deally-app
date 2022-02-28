/**** Libaries ****/
import Router from 'next/router';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

/**** Action types ****/
export const UPDATE_USER = 'UPDATE_USER';
export const REPLACE_USER = 'REPLACE_USER';

/**** API ****/
import { loginFacebook, loginGoogle, loginUser } from '../../api/DashboardAPI';

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: { ...user }
  }
};

export const replaceUser = (user) => {
  return {
    type: REPLACE_USER,
    payload: { ...user }
  }
}

export const loginUserAction = ({ email, password }) => {
  return async (dispatch) => {
    try {
      console.log({ email, password })
      const response = await loginUser({ email, password });
      cookies.set('deally:token', response.data.token);
      return dispatch(updateUser({ ...response.data }));
    } catch (error) {
      console.log('LOGIN USER ERROR:', error);
      return dispatch(updateUser({}));
    }
  }
}

export const loginGoogleUserAction = ({ googleId }) => {
  return async (dispatch) => {
    try {
      const response = await loginGoogle({ googleId })
      cookies.set('deally:token', response.data.token);
      return dispatch(updateUser({ ...response.data }));
    } catch (error) {
      console.log('LOGIN USER ERROR:', error);
      return dispatch(updateUser({}));
    }
  }
}

export const loginFacebookAction = ({ userID }) => {
  return async (dispatch) => {
    try {
      const response = await loginFacebook({ userID });
      cookies.set('deally:token', response.data.token);
      return dispatch(updateUser({ ...response.data }));
    } catch (error) {
      console.log('LOGIN USER ERROR:', error);
      return dispatch(updateUser({}));
    }
  }
}

export const logoutUserAction = () => {
  return async (dispatch) => {
    cookies.remove('deally:token');
    Router.push('/signin');
    return dispatch(replaceUser({}));
  }
}