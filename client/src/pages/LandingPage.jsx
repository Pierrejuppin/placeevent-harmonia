import { Link } from "react-router-dom";
import logo from "../../static/images/rockicon.png";

export default function LandingPage() {
  return (
    <div className="backgroundpc2 bg-cover h-screen">
      <div className="pt-12 text-center">
        <img src={logo} alt="Logo" className="h-25 w-25 mx-auto" />
        <p className=" mt-10 mx-auto text-xl font-main text-white lg:text-center">
          Réservez !!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="mt-8 flex lg:justify-center gap-12">
          <Link to="/register">
            <button
              type="button"
              className="text-GreenComp font-main bg-BrownComp text-xl mx-auto px-3 py-1 rounded-md flex justify-center items-center gap-4 lg:mx-0"
            >
              Inscription
            </button>
          </Link>
          <Link to="/connexion">
            <button
              type="button"
              className="text-GreenComp font-main bg-BrownComp text-xl mx-auto px-3 py-1 rounded-md flex justify-center items-center gap-4 lg:mx-0"
            >
              Connexion
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
