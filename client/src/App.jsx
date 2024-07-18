import "./index.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fetchAuth from "./lib/auth";
import Navbar from "./components/Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    fetchAuth().then((response) => setCurrentUser(response));
  }, []);

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
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Outlet context={{ currentUser, setCurrentUser }} />
      <p className="p-2 text-center text-GreenComp">
        Bienvenue: {currentUser?.first_name}
      </p>
    </>
  );
}

export default App;
