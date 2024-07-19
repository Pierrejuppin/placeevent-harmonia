/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { House, LogIn, LogOut, ListMusic, CircleUserRound } from "lucide-react";
import logo from "../../static/images/rockicon.png";
import handleLogOut from "../lib/logout";

export default function Navbar({ setCurrentUser }) {
  return (
    <div className="shadow bg-WhiteComp">
      <div className="md:flex md:justify-between md:items-center">
        <div className="flex justify-between">
          <img
            src={logo}
            alt=""
            className="hidden sm:block h-25 w-25 p-2 ml-4"
          />
        </div>
        <div className="flex justify-end ml-50 text-gray-300">
          <NavLink
            to="/"
            className="border-b-2 border-transparent transition-colors duration-300 transform hover:text-gray-200 hover:border-GreenComp mx-1.5 sm:mx-6"
          >
            <House color="#31111D" size={50} />
          </NavLink>
          <NavLink
            to="/event"
            className="border-b-2 border-transparent  transition-colors duration-300 transform hover:text-gray-200 hover:border-GreenComp mx-1.5 sm:mx-6"
          >
            <ListMusic color="#31111D" size={50} />
          </NavLink>
          <NavLink
            to="/connexion"
            className="border-b-2 border-transparent  transition-colors duration-300 transform hover:text-gray-200 hover:border-GreenComp mx-1.5 sm:mx-6"
          >
            <LogIn color="#31111D" size={50} />
          </NavLink>
          <button
            type="button"
            label="Déconnexion"
            onClick={() => handleLogOut(setCurrentUser)}
            className="border-b-2 border-transparent transition-colors duration-300 transform hover:text-gray-200 hover:border-GreenComp mx-1.5 sm:mx-6"
          >
            <LogOut color="#31111D" size={50} />
          </button>
          <NavLink
            to="/profile"
            className="border-b-2 border-transparent  transition-colors duration-300 transform hover:text-gray-200 hover:border-GreenComp mx-1.5 sm:mx-6"
          >
            <CircleUserRound color="#31111D" size={50} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
