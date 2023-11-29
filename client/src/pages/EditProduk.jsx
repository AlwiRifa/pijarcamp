import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [namaProduk, setNamaProduk] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [harga, setHarga] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/produks/${id}`)
      .then((response) => {
        setNamaProduk(response.data.nama_produk);
        setKeterangan(response.data.keterangan);
        setHarga(response.data.harga);
        setJumlah(response.data.jumlah);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check the console');
        console.log(error);
      });
  }, [id]);

  const handleEditProduk = () => {
    const data = {
      nama_produk,
      keterangan,
      harga,
      jumlah,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/produks/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Produk Edited successfully', { variant: 'success' });
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
      <h1 className='text-3xl my-4'>Edit Produk</h1>
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
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditProduk}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditBook;
