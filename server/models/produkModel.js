import mongoose from 'mongoose';

const ProdukSchema = mongoose.Schema(
  {
    namaProduk: {  // Mengganti nama_produk menjadi namaProduk
      type: String,
      required: true,
    },
    keterangan: {
      type: String,
      required: true,
    },
    harga: {
      type: Number,
      required: true,
    },
    jumlah: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Produk = mongoose.model('Produk', ProdukSchema);
