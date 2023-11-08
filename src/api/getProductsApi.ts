export const getProductsApi = () => {
  return fetch(import.meta.env.VITE_BACKEND_PROD || 'http://localhost:3001/api/products');
};
