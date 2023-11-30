import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const ProduksTable = ({ produks }) => {
  return (
    <div className='border rounded-lg'>
    <table className='w-full'>
      <thead className='border-b'>
        <tr className=''>
          <th className='p-4 text-center font-medium text-zinc-500 w-16'>No</th>
          <th className='p-4 text-left font-medium text-zinc-500'>Nama</th>
          <th className='p-4 text-left font-medium text-zinc-500'>Description</th>
          <th className='p-4 text-center font-medium text-zinc-500'>Harga</th>
          <th className='p-4 text-center font-medium text-zinc-500'>Jumlah</th>
          <th className='p-4 text-center font-medium text-zinc-500'></th>
        </tr>
      </thead>
      <tbody className='p-6'>
        {produks.map((produk, index) => (
          <tr key={produk._id} className='p-6 hover:bg-zinc-100 border-b text-zinc-900'>
            <td className='p-4 text-center'>{index + 1}</td>
            <td className='p-4 text-left'>{produk.nama_produk}</td>
            <td className='p-4 text-left'>{produk.keterangan}</td>
            <td className='p-4 text-center font-medium'>Rp.{produk.harga}</td>
            <td className='p-4 text-center'>{produk.jumlah}</td>
            <td className='p-4 text-center'>
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
    </div>
  );
};

export default ProduksTable;
