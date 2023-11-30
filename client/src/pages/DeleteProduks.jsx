import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteProduk = ({ destination = "/" }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteProduk = () => {
    setLoading(true);
    axios
      .delete(`https://pijarcamp-server.vercel.app/produks/${id}`) // Update the endpoint to match your backend
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Product Deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black/20">
     

      <div className="width-[500px] rounded-lg p-6 bg-white">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Delete Product</h1>
          <div className="text-sm text-red-600 bg-red-100 px-4 py-2 rounded-lg ">
            <strong>Warning:</strong> This action is not reversible. Please be
            certain.
          </div>

          <div className="flex justify-between">
            <Link
              to={destination}
              className="px-4 py-3 rounded-lg text-sm font-medium border border-zinc-300 hover:bg-zinc-100 cursor-pointer"
            >
              Cancel
            </Link>
            <button
              onClick={handleDeleteProduk}
              className="px-4 py-3 rounded-lg text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-700 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduk;
