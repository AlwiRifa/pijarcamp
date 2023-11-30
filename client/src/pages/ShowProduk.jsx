import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowProduk = () => {
  const [produk, setProduk] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pijarcamp-server.vercel.app/produks/produks/${id}`)
      .then((response) => {
        setProduk(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Produk</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{produk._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Nama Produk</span>
            <span>{produk.nama_produk}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Keterangan</span>
            <span>{produk.keterangan}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Harga</span>
            <span>{produk.harga}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Jumlah</span>
            <span>{produk.jumlah}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(produk.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(produk.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowProduk;
