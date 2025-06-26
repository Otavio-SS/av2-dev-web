import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const listarProdutos = () => api.get('/produtos');
export const cadastrarProduto = (produto) => api.post('/produtos', produto);
export const atualizarProduto = (id, produto) => api.put(`/produtos/${id}`, produto);
export const deletarProduto = (id) => api.delete(`/produtos/${id}`);
