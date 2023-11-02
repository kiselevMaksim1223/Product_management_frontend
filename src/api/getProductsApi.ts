export const getProductsApi = () => {
  console.log(import.meta.env.VITE_BACKEND_PROD);

  return fetch(import.meta.env.VITE_BACKEND_PROD || 'localhost:3001/api/products');
};
