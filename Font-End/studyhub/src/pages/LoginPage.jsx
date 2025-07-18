import { useLocation, useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../features/auth/googleLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async () => {
    await loginWithGoogle();
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
