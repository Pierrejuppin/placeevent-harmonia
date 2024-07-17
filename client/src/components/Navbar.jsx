import { NavLink } from "react-router-dom";
import { House, CalendarDays, ListMusic, CircleUserRound } from "lucide-react";
import logo from "../../static/images/rockicon.png";

export default function Navbar() {
  return (
    <nav className="shadow bg-WhiteComp flex justify-between">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-start">
          <img src={logo} alt="" className="h-25 w-25" />
        </div>
        <div className="capitalize flex justify-end text-gray-300">
          <NavLink
            to="/"
            className="border-b-2 border-transparent transition-colors duration-300 transform hover:text-gray-200 hover:border-BrownComp mx-1.5 sm:mx-6"
          >
            <House color="#31111D" size={50} />
          </NavLink>
          <NavLink
            to="/"
            className="border-b-2 border-transparent  transition-colors duration-300 transform hover:text-gray-200 hover:border-BrownComp mx-1.5 sm:mx-6"
          >
            <ListMusic color="#31111D" size={50} />
          </NavLink>
          <NavLink
            to="/"
            className="border-b-2 border-transparent transition-colors duration-300 transform hover:text-gray-200 hover:border-BrownComp mx-1.5 sm:mx-6"
          >
            <CalendarDays color="#31111D" size={50} />
          </NavLink>
          <NavLink
            to="/"
            className="border-b-2 border-transparent  transition-colors duration-300 transform hover:text-gray-200 hover:border-BrownComp mx-1.5 sm:mx-6"
          >
            <CircleUserRound color="#31111D" size={50} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
