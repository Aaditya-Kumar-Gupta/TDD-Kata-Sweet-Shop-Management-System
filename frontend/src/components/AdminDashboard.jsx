import { useEffect, useState } from "react";
import axios from "../api/axios";

const AdminDashboard = () => {
  const [sweets, setSweets] = useState([]);

  const load = async () => {
    const res = await axios.get("/sweets");
    setSweets(res.data);
  };

  const remove = async (id) => {
    await axios.delete(`/sweets/${id}`);
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {sweets.map((s) => (
          <tr key={s._id}>
            <td>{s.name}</td>
            <td>{s.category}</td>
            <td>{s.price}</td>
            <td>{s.quantity}</td>
            <td>
              <button onClick={() => remove(s._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminDashboard;
