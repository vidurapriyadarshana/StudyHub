import UserProfile from "../components/UserProfile";
import useAuthStore from "../store/authStore";
import Register from "./RegisterPage";

const AuthPage = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {user ? <UserProfile /> : <Register />}
    </div>
  );
};

export default AuthPage;
