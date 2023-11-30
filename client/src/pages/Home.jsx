import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProduksTable from "../components/home/ProduksTable"; // Update the import
import Spinner from "../components/Loading";

const Home = () => {
  const [produks, setProduks] = useState([]); // Update the state name
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pijarcamp-server.vercel.app/produks") // Update the endpoint
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
    <div className="mt-28 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col mb-6 space-y-2">
          <h1 className="text-2xl font-semibold leading-none tracking-tight">
            Produk List
          </h1>
          <p className="text-zinc-500">Pijarcamp Level 3 tugas 10</p>
        </div>
        <Link
          to="/produks/create"
          className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-700 cursor-pointer"
        >
          Add Product
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <ProduksTable produks={produks} />
      ) : (
        <ProduksCard produks={produks} />
      )}
    </div>
  );
};

export default Home;
