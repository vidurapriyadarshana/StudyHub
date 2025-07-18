import { logoutGoogle } from "../features/auth/googleLogin";
import useAuthStore from "../store/authStore";

const UserProfile = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <div className="flex items-center gap-4 p-4">
      <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full" />
      <div>
        <p className="font-medium">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
      <button onClick={logoutGoogle} className="ml-auto text-red-500">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
