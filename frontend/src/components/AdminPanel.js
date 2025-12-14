import { useState } from "react";
import axios from "../api/axios";

const AdminPanel = () => {
  const [sweet, setSweet] = useState({
    name: "",
    category: "",
    price: 0,
    quantity: 0
  });

  const submit = async () => {
    await axios.post("/sweets", sweet);
    alert("Sweet added");
  };

  return (
    <div className="form">
      <h3>Add Sweet</h3>

      <input placeholder="Name" onChange={(e) => setSweet({ ...sweet, name: e.target.value })} />
      <input placeholder="Category" onChange={(e) => setSweet({ ...sweet, category: e.target.value })} />
      <input type="number" placeholder="Price" onChange={(e) => setSweet({ ...sweet, price: e.target.value })} />
      <input type="number" placeholder="Quantity" onChange={(e) => setSweet({ ...sweet, quantity: e.target.value })} />

      <button onClick={submit}>Add</button>
    </div>
  );
};

export default AdminPanel;
