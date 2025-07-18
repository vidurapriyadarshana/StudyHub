import { auth, provider, signInWithPopup, signOut } from "../../services/firebase";
import useAuthStore from "../../store/authStore";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    useAuthStore.getState().setUser({
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    });
  } catch (err) {
    console.error("Google sign-in failed:", err);
  }
};

export const logoutGoogle = async () => {
  try {
    await signOut(auth);
    useAuthStore.getState().logout();
  } catch (err) {
    console.error("Sign-out failed:", err);
  }
};
