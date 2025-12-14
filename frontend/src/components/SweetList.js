import { useEffect, useState } from "react";
import axios from "../api/axios";
import SweetGrid from "./SweetGrid";

const SweetList = () => {
  const [sweets, setSweets] = useState([]);

  const fetchSweets = async () => {
    const res = await axios.get("/sweets");
    setSweets(res.data);
  };

  const purchase = async (id) => {
    await axios.post(`/sweets/${id}/purchase`, { quantity: 1 });
    fetchSweets();
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  return <SweetGrid sweets={sweets} onPurchase={purchase} />;
};

export default SweetList;
