import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import ProdukSingleCard from './ProdukSingleCard'; // Update the import

const ProduksCard = ({ produks }) => { // Update the component name and prop
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {produks.map((item) => (
        <ProdukSingleCard key={item._id} produk={item} /> 
      ))}
    </div>
  );
};

export default ProduksCard; // Update the export
