import React, { useEffect, useState } from 'react';
import { listarProdutos, deletarProduto } from '../api/produtos';
import { Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  const carregarProdutos = async () => {
    const res = await listarProdutos();
    setProdutos(res.data);
  };

  const handleDelete = async (id) => {
    await deletarProduto(id);
    carregarProdutos();
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <>
      <Button variant="contained" onClick={() => navigate('/cadastro')} sx={{ mb: 2 }}>Cadastrar Novo Produto</Button>
      <List>
        {produtos.map((produto) => (
          <ListItem
            key={produto.id}
            secondaryAction={
              <>
                <IconButton edge="end" onClick={() => navigate('/cadastro', { state: { produto } })}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" onClick={() => handleDelete(produto.id)}>
                  <Delete />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={produto.nome} secondary={`R$ ${produto.preco} - ${produto.descricao}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListaProdutos;
