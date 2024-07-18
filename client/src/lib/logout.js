import axios from "axios";
import { toast } from "react-toastify";

const handleLogOut = async (setCurrentUser) => {
  try {
    await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
      withCredentials: true,
    });
    toast.success("Déconnexion réussie");
    setCurrentUser(null);
  } catch (error) {
    toast.error("Erreur lors de la déconnexion");
  }
};

export default handleLogOut;
