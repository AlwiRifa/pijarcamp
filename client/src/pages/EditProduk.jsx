import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditProduk = ({ destination = "/" }) => {
  const [namaProduk, setNamaProduk] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [harga, setHarga] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/produks/${id}`)
      .then((response) => {
        setNamaProduk(response.data.nama_produk);
        setKeterangan(response.data.keterangan);
        setHarga(response.data.harga);
        setJumlah(response.data.jumlah);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check the console");
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
        enqueueSnackbar("Produk Edited successfully", { variant: "success" });
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
      {/* {loading ? <Spinner /> : ""} */}
      <div className="flex flex-col border rounded-lg w-[500px] mx-auto">
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Edit a Product</h1>
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
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-900">Harga</label>
            <input
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              className="border rounded-lg border-zinc-300 px-4 py-2 w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-900">Jumlah</label>
            <input
              type="number"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              className="border rounded-lg border-zinc-300 px-4 py-2 w-full"
            />
          </div>

          {/* submit */}
        </div>
        <div className=" p-6 pt-0 flex justify-between">
          <Link
            to={destination}
            className="px-4 py-3 rounded-lg text-sm font-medium border border-zinc-300 hover:bg-zinc-100 cursor-pointer"
          >
            Cancel
          </Link>
          <button
            onClick={handleEditProduk}
            className="px-4 py-3 rounded-lg text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-700 cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduk;
