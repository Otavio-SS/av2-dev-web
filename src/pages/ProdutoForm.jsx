import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { cadastrarProduto, atualizarProduto } from '../api/produtos';

function ProdutoForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const produtoEdit = location.state?.produto;

  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    descricao: '',
  });

  useEffect(() => {
    if (produtoEdit) {
      setProduto(produtoEdit);
    }
  }, [produtoEdit]);

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (produto.id) {
      await atualizarProduto(produto.id, produto);
    } else {
      await cadastrarProduto(produto);
    }
    navigate('/');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Nome" name="nome" value={produto.nome} onChange={handleChange} required />
      <TextField label="Preço" name="preco" type="number" value={produto.preco} onChange={handleChange} required />
      <TextField label="Descrição" name="descricao" value={produto.descricao} onChange={handleChange} required />
      <Button type="submit" variant="contained">{produto.id ? 'Atualizar' : 'Cadastrar'}</Button>
    </Box>
  );
}

export default ProdutoForm;