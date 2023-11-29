import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const ProduksTable = ({ produks }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr className='bg-gray-200'>
          <th className='border border-gray-600 rounded-md p-2'>No</th>
          <th className='border border-gray-600 rounded-md p-2'>Nama</th>
          <th className='border border-gray-600 rounded-md max-md:hidden p-2'>
            Description
          </th>
          <th className='border border-gray-600 rounded-md p-2'>Harga</th>
          <th className='border border-gray-600 rounded-md p-2'>Jumlah</th>
          <th className='border border-gray-600 rounded-md p-2'></th>
        </tr>
      </thead>
      <tbody>
        {produks.map((produk, index) => (
          <tr key={produk._id} className={(index % 2 === 0) ? 'bg-gray-100' : 'bg-white'}>
            <td className='border border-gray-700 rounded-md text-center p-2'>
              {index + 1}
            </td>
            <td className='border border-gray-700 rounded-md text-center p-2'>
              {produk.nama_produk}
            </td>
            <td className='border border-gray-700 rounded-md text-center max-md:hidden p-2'>
              {produk.keterangan}
            </td>
            <td className='border border-gray-700 rounded-md text-center p-2'>
              {produk.harga}
            </td>
            <td className='border border-gray-700 rounded-md text-center p-2'>
              {produk.jumlah}
            </td>
            <td className='border border-gray-700 rounded-md text-center p-2'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/produks/edit/${produk._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/produks/delete/${produk._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProduksTable;
