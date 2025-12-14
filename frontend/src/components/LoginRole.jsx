import { useNavigate } from "react-router-dom";

const LoginRole = () => {
  const navigate = useNavigate();

  return (
    <div className="center-card">
      <h2>Welcome Back</h2>
      <p>Choose your role to continue</p>

      <button onClick={() => navigate("/login?role=user")}>
        Login as Customer
      </button>

      <button onClick={() => navigate("/login?role=admin")}>
        Login as Admin
      </button>
    </div>
  );
};

export default LoginRole;
