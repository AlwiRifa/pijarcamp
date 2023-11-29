import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import ProduksTable from '../components/home/ProduksTable'; // Update the import
import ProduksCard from '../components/home/ProduksCard'; // Update the import

const Home = () => {
  const [produks, setProduks] = useState([]); // Update the state name
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/produks') // Update the endpoint
      .then((response) => {
        setProduks(response.data.data); // Update the state
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Produk List</h1>
        <Link to='/produks/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <ProduksTable produks={produks} /> 
      ) : (
        <ProduksCard produks={produks} /> 
      )}
    </div>
  );
};

export default Home;
