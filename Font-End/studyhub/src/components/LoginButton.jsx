import { loginWithGoogle } from "../features/auth/googleLogin";

const LoginButton = () => (
  <button
    onClick={loginWithGoogle}
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
  >
    Sign in with Google
  </button>
);

export default LoginButton;
