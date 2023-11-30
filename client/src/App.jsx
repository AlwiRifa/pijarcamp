import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateProduk from './pages/CreateProduks';
import ShowProduk from './pages/ShowProduk';
import EditProduk from './pages/EditProduk';
import DeleteProduk from './pages/DeleteProduks';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/produks/create' element={<CreateProduk />} />
      <Route path='/produks/details/:id' element={<ShowProduk />} />
      <Route path='/produks/edit/:id' element={<EditProduk />} />
      <Route path='/produks/delete/:id' element={<DeleteProduk />} />
    </Routes>
  );
};

export default App;
