import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateProduk = ({ destination = "/" }) => {
  const [namaProduk, setNamaProduk] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [harga, setHarga] = useState("");
  const [jumlah, setJumlah] = useState("");
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
      .post("pijarcamp-server.vercel.app/produks", data) // Update the endpoint to match your backend
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Produk Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto w-full mt-32">

      <div className="flex flex-col border rounded-lg w-[500px] mx-auto">
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Create a Product</h1>
        </div>

        <div className="pt-0 p-6 space-y-4">
          {/* Nama Produk */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-900">
              Nama Produk
            </label>
            <input
              type="text"
              value={namaProduk}
              onChange={(e) => setNamaProduk(e.target.value)}
              className="border rounded-lg border-zinc-300 px-4 py-2 w-full"
            />
          </div>

          {/* Keterangan */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-900">
              Keterangan
            </label>
            <input
              type="text"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              className="border rounded-lg border-zinc-300 px-4 py-2 w-full"
            />
          </div>

          {/* Harga */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-900">Harga</label>
            <input
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              className="border rounded-lg border-zinc-300 px-4 py-2 w-full"
            />
          </div>

          {/* Jumlah */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-900">Jumlah</label>
            <input
              type="number"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              className="border rounded-lg border-zinc-300 px-4 py-2 w-full"
            />
          </div>
            </div>

          {/* submit  */}
            
            <div className="p-6 pt-0 flex justify-between">
            <Link
              to={destination}
              className="px-4 py-3 rounded-lg text-sm font-medium border border-zinc-300 hover:bg-zinc-100 cursor-pointer"
            >
              Cancel
            </Link>
            <button
              onClick={handleSaveBook}
              className="px-4 py-3 rounded-lg text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-700 cursor-pointer"
            >
              Continue
            </button>
          </div>

      </div>
    </div>
  );
};

export default CreateProduk;
