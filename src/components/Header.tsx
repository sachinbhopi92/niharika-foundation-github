import { Link, useLocation } from "react-router-dom";
import { logoImage } from "../assets/images/images";
import { useState } from "react";

const Header: React.FC = () => {
  const location = useLocation(); // Get the current route path
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logoImage} alt="Logo" className="h-16 w-16 rounded-full" />
          <span className="text-2xl font-semibold">
            Niharika Foundation &nbsp; <br />
            Career Technical Training Institute
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <nav className={`lg:flex space-x-4 text-lg font-medium ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row">
            {["Home", "About", "Courses", "Programs", "Awards", "Placement", "Teachers", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className={`${
                    location.pathname === "/" && link === "Home" || location.pathname === `/${link.toLowerCase()}`
                      ? "bg-yellow-500 text-white"
                      : "hover:text-yellow-500"
                  } px-3 py-2 rounded transition duration-200`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
