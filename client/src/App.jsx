import "./index.css";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fetchAuth from "./lib/auth";
import Navbar from "./components/Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  useEffect(() => {
    fetchAuth().then((response) => setCurrentUser(response));
  }, []);

  const hiddenPaths = ["/", "/landing", "/connexion", "/register"];

  const shouldShowNavbar = !hiddenPaths.includes(location.pathname);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      {shouldShowNavbar && (
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
      <Outlet context={{ currentUser, setCurrentUser }} />
    </>
  );
}

export default App;
