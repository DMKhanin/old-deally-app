import ClientAPIService from './ClientAPIService.js';


export async function getShopIdBySlug({ slug }) {
  return await ClientAPIService.get(`/shop-id/${slug}`).then(response => response.data);
};

export async function getShopById({ id }) {
  return await ClientAPIService.get(`/shop/${id}`).then(response => response.data);
}

export async function getProductsByShopId({ id }) {
  return await ClientAPIService.get(`/shop/${id}/products`).then(response => response.data);
}

export async function getCategoriesByShopId({ id }) {
  return await ClientAPIService.get(`/shop/${id}/categories`).then(response => response.data);
}

export async function getProductById({ shopId, id }) {
  return await ClientAPIService.get(`/shop/${shopId}/products/${id}`).then(response => response.data);
}


/**
 * requestData: {
 * code: 
 * value
 * }
 */
export async function sendProductEvent(productId, requestData) {
  return await ClientAPIService.post(`/analytics/product/${productId}`, requestData).then(response => response.data);
}

/**
 * requestData: {
 * code: 
 * value
 * }
 */
export async function sendShopEvent(shopId, requestData) {
  return await ClientAPIService.post(`/analytics/shop/${shopId}`, requestData).then(response => response.data)
}