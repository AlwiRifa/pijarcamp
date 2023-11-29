import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateProduk = () => {
  const [namaProduk, setNamaProduk] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [harga, setHarga] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      nama_produk: namaProduk,
      keterangan: keterangan,
      harga: harga,
      jumlah: jumlah,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/produks', data) // Update the endpoint to match your backend
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Produk Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Product</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Nama Produk</label>
          <input
            type='text'
            value={namaProduk}
            onChange={(e) => setNamaProduk(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Keterangan</label>
          <input
            type='text'
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Harga</label>
          <input
            type='number'
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Jumlah</label>
          <input
            type='number'
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateProduk;
