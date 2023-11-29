import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateProduks';
import ShowBook from './pages/ShowProduk';
import EditBook from './pages/EditProduk';
import DeleteBook from './pages/DeleteProduks';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/produks/create' element={<CreateBook />} />
      <Route path='/produks/details/:id' element={<ShowBook />} />
      <Route path='/produks/edit/:id' element={<EditBook />} />
      <Route path='/produks/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
