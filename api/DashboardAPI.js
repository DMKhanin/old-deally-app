import axios from 'axios';
import DashboardAPIService from './DashboardAPIService';

export async function getShops() {
  return await DashboardAPIService.get('/shops').then(response => response.data);
};

export async function getShopById(id) {
  return await DashboardAPIService.get(`/shop/${id}`).then(response => response.data);
}

export async function createShop({ slug, name }) {
  return await DashboardAPIService.post(`/shop`, { slug, name }).then(response => response.data);
}

export async function uploadShopLogotyppassporte({ id, formData }) {
  // const config = { headers: { "Content-Type": "multipart/form-data" } };
  return await DashboardAPIService.post(`/shop/${id}/logotype`, formData).then(response => response.data);
}

export async function getCategoriesByShopId({ shopId }) {
  return await DashboardAPIService.get(`/shop/${shopId}/categories`).then(response => response.data);
}

export async function createCategory({ name, shopId }) {
  return await DashboardAPIService.post(`/shop/${shopId}/categories`, { name }).then(response => response.data);
}

export async function getCategoryById({ shopId, categoryId }) {
  return await DashboardAPIService.get(`/shop/${shopId}/categories/${categoryId}`).then(reponse => reponse.data);
}

export async function updateCategory({ name, shopId, categoryId }) {
  return await DashboardAPIService.put(`/shop/${shopId}/categories/${categoryId}`, { name }).then(response => response.data);
}

export async function deleteCategory({ shopId, categoryId }) {
  return await DashboardAPIService.delete(`/shop/${shopId}/categories/${categoryId}`).then(response => response.data);
}

export async function getProductsByShopId({ shopId }) {
  return await DashboardAPIService.get(`/shop/${shopId}/products`).then(response => response.data)
}

export async function createProduct({ shopId, formData }) {
  return await DashboardAPIService.post(`/shop/${shopId}/products`, formData).then(response => response.data);
}

export async function updateProduct({ shopId, productId, formData }) {
  // console.log(formData);
  return await DashboardAPIService.put(`/shop/${shopId}/products/${productId}`, formData).then(response => response.data);
}

export async function deleteProduct({ shopId, productId }) {
  return await DashboardAPIService.delete(`/shop/${shopId}/products/${productId}`).then(response => response.data);
}

export async function getProductById({ shopId, productId }) {
  return await DashboardAPIService.get(`/shop/${shopId}/products/${productId}`).then(response => response.data);
}

export async function deleteShop({ shopId }) {
  return await DashboardAPIService.delete(`/shop/${shopId}`).then(response => response.data);
}

export async function loginUser({ email, password }) {
  return await DashboardAPIService.post(`/passport/login`, { email, password }).then(response => response.data);
}

export async function loginFacebook({ userID }) {
  return await DashboardAPIService.post(`/passport/login/facebook`, { userID }).then(response => response.data);
}

export async function loginGoogle({ googleId }) {
  return await DashboardAPIService.post(`/passport/login/google`, { googleId }).then(response => response.data);
}

export async function registerUser({ email, password }) {
  return await DashboardAPIService.post(`/passport/signup`, { email, password }).then(response => response.data);
}

export async function registerFacebookUser({ email, userID, picture, name }) {
  return await DashboardAPIService.post(`/passport/signup/facebook`, { email, userID, picture, name }).then(response => response.data);
}

export async function registerGoogleUser({ email, googleId, familyName, givenName, imageUrl }) {
  return await DashboardAPIService.post(`/passport/signup/google`, {  email, googleId, familyName, givenName, imageUrl }).then(response => response.data);
}

export async function getUser() {
  return await DashboardAPIService.get(`/user`).then(response => response.data);
}

export async function updateUserInfo({ email, firstName, lastName }) {
  return await DashboardAPIService.put(`/user/info`, { email, firstName, lastName }).then(response => response.data);
}

export async function updateUserPassword({ password, repeatPassword, newPassword }) {
  return await DashboardAPIService.put(`/user/password`, { password, repeatPassword, newPassword }).then(response => response.data);
}

export async function updateUserAvatar(formData) {
  return await DashboardAPIService.put('/user/avatar', formData).then(response => response.data);
}

export async function uploadFile({ shopId, productId, formData }) {
  return await DashboardAPIService.post(`/files/${productId}`, formData).then(response => response.data);
}

export async function getFiles({ productId }) {
  return await DashboardAPIService.get(`/files/${productId}`).then(response => response.data);
}

export async function getShopAnallytics({ shopId, requestData }) {
  return await DashboardAPIService.get(`/analytics/shop/${shopId}`, { params: { ...requestData } }).then(response => response.data);
}

export async function getProductAnalitycs({ productId, requestData }) {
  return await DashboardAPIService.get(`/analytics/product/${productId}`, requestData).then(response => response.data);
}