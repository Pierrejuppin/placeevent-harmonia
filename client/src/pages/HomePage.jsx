import { Link } from "react-router-dom";
import logo from "../../static/images/rockicon.png";

export default function HomePage() {
  return (
    <main className="backgroundpc1 bg-cover min-h-screen">
      <div>
        <div className="pt-12">
          <img src={logo} alt="Logo" className="h-25 w-25 mx-auto " />
          <h1 className="text-center text-3xl text-white mt-6">
            Bienvenue sur <span className="text-GreenComp">Place Event</span>
          </h1>
          <p className="pt-5 ml-10 text-xl text-white lg:text-center">
            Votre site de réservation de place de concert en ligne
          </p>
        </div>

        <div className="m-6 flex flex-col justify-center items-center lg:gap-1">
          <Link to="/landing">
            <button
              type="button"
              className="text-GreenComp bg-BrownComp  p-2 rounded-md "
            >
              Démarrer
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
