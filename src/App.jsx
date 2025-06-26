import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import ProdutoForm from './pages/ProdutoForm';
import ListaProdutos from './pages/ListaProdutos';

function App() {
  return (
    <Container>
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6">Cadastro de Produtos</Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<ListaProdutos />} />
        <Route path="/cadastro" element={<ProdutoForm />} />
      </Routes>
    </Container>
  );
}

export default App;